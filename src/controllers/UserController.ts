import { Request, Response } from "express";
import ImageUpload from "../middlewares/imageMulter.middleware";
import Publication from "../models/ad.model";
import { Types } from "mongoose";
import Categorie from "../models/categories.model";
import Compte from "../models/compte.model";

class UserController {
  postAd(req: Request, res: Response) {
    const fileNames: string[] = [];
    const ut = ImageUpload.array("fichiers");
    ut(req, res, async (err: unknown) => {
      const { body } = req;
      const user_id = req.params["user_id"];
      var desc: any = [];
      const data: any = {};
      for (let key in body) {
        if (key != "titre" && key != "categorie") {
          data[key] = body[key];
        }
      }
      desc = data;
      const user = await Compte.findOne({ owner: user_id }).populate("owner");
      if (user) {
        const files = <Array<object>>req.files;
        for (const file of files) {
          const image = <Express.Multer.File>file;
          fileNames.push(image.filename);
        }
        const pub = new Publication({
          _id: new Types.ObjectId(),
          categorie: body.categorie,
          titre: body.titre,
          advertiser: user?.owner._id,
          createdAt: Date.now(),
          fichier: fileNames,
          description: desc,
        });
        pub.save((err, doc) => {
          if (err) console.log(err);
          user.owner.annonces.push(doc._id);
          user.save();
        });
        res.status(200).send({ message: "Enregistrement Terminé" });
      } else console.log("eeeeeeeee");
    });
  }
  removeAd(req: Request, res: Response) {}
  changeAdStatus(req: Request, res: Response) {}
  getAllAds(req: Request, res: Response) {
    res.status(200).send("Hello User");
  }
  getAd(req: Request, res: Response) {}
  addFiles(req: Request, res: Response) {}

  removeFiles(req: Request, res: Response) {}
}

const userController = new UserController();

export default userController;
