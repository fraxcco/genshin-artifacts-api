import { Router } from "express";
import { APIController } from "../controllers/api.controller";

export class APIRouter {
    private router: Router;
    private controller: APIController;

    constructor() {
        this.router = Router();
        this.controller = new APIController();
        this.routes();
    };

    private routes() {
        this.router.get(`/`, this.controller.APIEndpoint);
    };

    public getRouter() {
        return this.router;
    };
};