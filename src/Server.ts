import express, { Application } from "express"
import morgan from 'morgan'
import cors from 'cors'
import connect from "./db/database"
import authRoute from "./routes/AuthRoute"
import userRoute from "./routes/UserRoute"
import publicRoute from "./routes/publicRoute"
class Server {
    public app: Application
    constructor() {
        this.app = express()
        this.config()
        this.routes()
        connect()
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3001)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/images', express.static('./public/images'))
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use('/', publicRoute)
        this.app.use('/authentication', authRoute)
        this.app.use('/user', userRoute)
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server
server.start()