import { Request, Response } from "express";
import Publication from "../models/ad.model";
import Categorie from "../models/categories.model";
import Genre from "../models/genre.model";
import Instruments from "../models/instrument.model";
class PublicController {
  async getAllCategories(req: Request, res: Response) {
    Categorie.find({})
      .sort({ nom: 1 })
      .select("nom")
      .exec((err, doc) => {
        if (err) console.log(err);
        res.status(200).send(doc);
      });
  }

  async getAllTypes(req: Request, res: Response) {
    Genre.find({})
      .sort({ nom: 1 })
      .select("nom")
      .exec((err, doc) => {
        if (err) console.log(err);
        res.status(200).send(doc);
      });
  }

  async getAllMusicTools(req: Request, res: Response) {
    Instruments.find({})
      .sort({ nom: 1 })
      .select("nom")
      .exec((err, doc) => {
        if (err) console.log(err);
        res.status(200).send(doc);
      });
  }

  async getAllAds(req: Request, res: Response) {
    Publication.find({})
      .sort({ titre: 1 })
      .exec((err, doc) => {
        if (err) res.status(404).send({ message: "Erreur du Serveur" });
        res.status(200).send(doc);
      });
  }
  async getAdById(req: Request, res: Response) {
    console.log(req.params["id"]);
    Publication.findOne({ _id: req.params["id"] }).exec((err, doc) => {
      if (err) console.log(err);
      res.status(200).send(doc);
    });
  }
}

const publicController = new PublicController();

export default publicController;
