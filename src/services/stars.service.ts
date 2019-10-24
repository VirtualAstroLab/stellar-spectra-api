import {Request, Response, Application} from 'express';

export class StarsService {

    constructor() {
    }

    public listStars() {

        return [
            {
                name: 'Sirius',
                radius: 123
            },
            {
                name: 'Sun',
                radius: 600
            }
        ];
    }
}



