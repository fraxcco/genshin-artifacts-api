import { Request, Response } from "express";

export class APIController {
    public APIEndpoint(_req: Request, res: Response) {
        try {
            res.json({ endpoints: ["artifacts"] });
        } catch(error) {
            console.log(error);
            
            res.status(500).json({ message: `Internal server error.` });
        };
    };
};