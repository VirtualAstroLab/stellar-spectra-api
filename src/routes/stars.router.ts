import { Request, Response, Application } from 'express';
import {StarsService} from "../services/stars.service";

export class StarsRouter {

    private service: StarsService;

    constructor(private app: Application) {
        this.service = new StarsService();

        this.routes();
    }

    public routes() {
        this.app.route('/stars').get((req: Request, res: Response) => {

            const body = JSON.stringify(this.service.listStars());

            return res.status(200).send(body);
        });
    }
}



