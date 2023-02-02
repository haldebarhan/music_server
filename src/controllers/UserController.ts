import { Request, Response } from "express"
class UserController {
    postAd(req: Request, res: Response) {

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
    addFiles(req: Request, res: Response){

    }

    removeFiles(req: Request, res: Response){
        
    }
}

const userController = new UserController

export default userController