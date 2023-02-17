import { Request, Response } from "express"
import ImageUpload from "../middlewares/imageMulter.middleware"
import upload from "../middlewares/multer.middleware"
class UserController {
    postAd(req: Request, res: Response) {
        const ut = ImageUpload.array('fichiers')
        ut(req, res, (err: unknown)=> {
            console.log(req.body)
            if (req.files) {
                console.log(req.files)
            }
            if (req.file) {
                console.log(req.file)
            }
            res.status(200).send({ message: 'files Uploaded' })
        })
     }
    removeAd(req: Request, res: Response) {

    }
    changeAdStatus(req: Request, res: Response) {

    }
    getAllAds(req: Request, res: Response) {
        res.status(200).send('Hello User')
    }
    getAd(req: Request, res: Response) {

    }
    addFiles(req: Request, res: Response) {

    }

    removeFiles(req: Request, res: Response) {

    }
}

const userController = new UserController

export default userController