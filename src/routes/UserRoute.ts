import { Router } from "express";
import userController from "../controllers/UserController";

class UserRoute {
    public router: Router = Router()
    constructor() {
        this.config()
    }
    config(): void {
        this.router.get('/ads', userController.getAllAds)
        this.router.get('/ad/:ad_id', userController.getAd)
        this.router.post('/create', userController.postAd)
        this.router.post('/ad/status/:ad_id', userController.changeAdStatus)
        this.router.delete('/ad/:id', userController.removeAd)
    }
}

const userRoute = new UserRoute

export default userRoute.router