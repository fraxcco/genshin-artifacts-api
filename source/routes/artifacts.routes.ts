import { Router } from "express";
import { ArtifactsController } from "../controllers/artifacts.controller";

export class ArtifactsRouter {
    private router: Router;
    private controller: ArtifactsController;

    constructor() {
        this.router = Router();
        this.controller = new ArtifactsController();
        this.routes();
    };

    private routes() {
        this.router.get(`/`, this.controller.artifactsEndpoints);
        this.router.get(`/all`, this.controller.getAllArtifacts);
        this.router.get(`/:name`, this.controller.getArtifactByName);
        this.router.get(`/:name/images/:type`, this.controller.getArtifactImagesByName);
    };

    public getRouter() {
        return this.router;
    };
};