import { Request, Response } from "express";
import Categorie from "../models/categories.model";
import Genre from '../models/genre.model'
import Instruments from "../models/instrument.model";
class PublicController {
    getAllCategories(req: Request, res: Response) {
        Categorie.find({})
            .sort({ nom: 1 })
            .select("nom")
            .exec((err, doc) => {
                if (err) console.log(err)
                res
                    .status(200)
                    .send(doc)

            })
    }

    getAllTypes(req: Request, res: Response) {
        Genre.find({})
            .sort({ nom: 1 })
            .select('nom')
            .exec((err, doc) => {
                if (err) console.log(err)
                res.status(200).send(doc)
            })
    }

    getAllMusicTools(req: Request, res: Response) {
        Instruments.find({})
            .sort({ nom: 1 })
            .select('nom')
            .exec((err, doc) => {
                if (err) console.log(err)
                res.status(200).send(doc)
            })

    }
}


const publicController = new PublicController

export default publicController