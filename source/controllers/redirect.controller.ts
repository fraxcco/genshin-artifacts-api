import { Request, Response } from "express";

export class RedirectController {
    public Redirect(_req: Request, res: Response) {
        try {
            res.redirect("/api/");
        } catch(error) {
            console.log(error);
            
            res.status(500).json({ message: `Internal server error.` });
        };
    };
};