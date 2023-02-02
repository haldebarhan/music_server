import { Router } from "express";
import AuthController from "../controllers/AuthController";
class AuthRoute {
    router: Router = Router()
    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', AuthController.index)
        this.router.post('/', AuthController.uploadTest)
        this.router.post('/signin', AuthController.signIn)
        this.router.post('/signup', AuthController.GpsignUp)
        this.router.post('/signup/pro', AuthController.proSingup)
        this.router.post('/change/password', AuthController.changePassword)
        this.router.post('/reset/password', AuthController.resetPassword)
    }
}


export default new AuthRoute().router