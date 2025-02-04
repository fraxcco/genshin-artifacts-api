import { Router } from "express";
import { RedirectController } from "../controllers/redirect.controller";

export class RedirectRouter {
    private router: Router;
    private controller: RedirectController;

    constructor() {
        this.router = Router();
        this.controller = new RedirectController();
        this.routes();
    };

    private routes() {
        this.router.get(`/`, this.controller.Redirect);
    };

    public getRouter() {
        return this.router;
    };
};