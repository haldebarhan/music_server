import { Request, Response } from "express";
import ImageUpload from "../middlewares/imageMulter.middleware";
import User from "../models/user.model";
import Publication from "../models/ad.model";
import { Types } from "mongoose";
import Categorie from "../models/categories.model";

class UserController {
  postAd(req: Request, res: Response) {
    const user_id = "63dd6f97a5e98f0492bcf290";
    const fileNames: string[] = [];
    const ut = ImageUpload.array("fichiers");
    ut(req, res, async (err: unknown) => {
      const { body } = req;
      var desc: any = [];
      const data: any = {};
      for (let key in body) {
        if (key != "titre" && key != "categorie") {
          data[key] = body[key];
        }
      }
      desc = data;
      console.log(desc);
      const user = await User.findOne({ _id: user_id });
      if (user) console.log(user);
      const files = <Array<object>>req.files;
      for (const file of files) {
        const image = <Express.Multer.File>file;
        fileNames.push(image.filename);
      }
      const pub = new Publication({
        _id: new Types.ObjectId(),
        categorie: body.categorie,
        titre: body.titre,
        advertiser: user?._id,
        createdAt: Date.now(),
        fichier: fileNames,
        description: desc,
      });
      pub.save((err, doc) => {
        user?.annonces.push(doc._id);
        user?.save();
        res.status(200).send({ message: "Enregistrement Terminé" });
      });
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
