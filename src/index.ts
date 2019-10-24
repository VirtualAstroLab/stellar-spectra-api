import * as express from 'express';
import * as bodyParser from "body-parser";
import { Request, Response } from 'express';
import * as cors from "cors";

import { StarsRouter } from "./routes/stars.router";

const app = express();

const {
    PORT = 3000,
} = process.env;


const starsRouter =  new StarsRouter(app);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    });
});

if (require.main === module) { // true if file is executed
    app.listen(PORT, () => {
        console.log('server started at http://localhost:'+PORT);
    });
}
export default app;