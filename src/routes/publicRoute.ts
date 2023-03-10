import { Router } from "express";
import publicController from "../controllers/publicController";

class PublicRouter {
    router: Router = Router()
    constructor() {
        this.config()
    }

    config() {
        this.router.get('/', publicController.getAllCategories)
        this.router.get('/types', publicController.getAllTypes)
        this.router.get('/tools', publicController.getAllMusicTools)
        this.router.get('/ads', publicController.getAllAds)
        this.router.get('/ad/:id', publicController.getAdById)
    }
}


const publicRouter = new PublicRouter

export default publicRouter.router