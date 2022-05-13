import express from 'express';
import cors from 'cors';

class App{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
    }

    routes(){
        
    }

}

export default new App().app;