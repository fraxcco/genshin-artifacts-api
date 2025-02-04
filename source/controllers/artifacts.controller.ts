import { readdirSync, existsSync } from "fs";
import { Request, Response } from "express";
import path from "path";

export class ArtifactsController {
    private dataDir = path.join(__dirname, `../../assets/data`);
    private imagesDir = path.join(__dirname, `../../assets/images`);

    constructor() {
        this.getAllArtifacts = this.getAllArtifacts.bind(this);
        this.getArtifactByName = this.getArtifactByName.bind(this);
        this.getArtifactImagesByName = this.getArtifactImagesByName.bind(this);
    };

    public artifactsEndpoints(_req: Request, res: Response) {
        try {
            res.json({
                endpoints: [
                    {
                        endpoint: "/all/",
                        request_example: "/api/artifacts/all",
                    },
                    {
                        endpoint: "/:name",
                        request_example: "/api/artifacts/obsidian_codex"
                    },
                    {
                        endpoint: "/:name/images/:type",
                        request_example: "/api/artifacts/obsidian_codex/images/flower"
                    }
                ],
            });
        } catch(error) {
            console.log(error);

            res.status(500).json({ message: `Internal server error.` });
        };
    };

    public getAllArtifacts(_req: Request, res: Response) {
        try {
            const artifacts = readdirSync(this.dataDir).map((file) => file.split(`.`)[0]);
            
            res.json(artifacts);
        } catch(error) {
            console.log(error);
            
            res.status(500).json({ message: `Internal server error.` });
        };
    };
    
    public getArtifactByName(req: Request, res: Response) {
        const name = req.params.name.toLowerCase().replace(/ /g, "_");

        try {
            const files = readdirSync(this.dataDir);
            const file = files.find((file) => file.split(`.`)[0] === name);

            if(file) {
                const artifact = require(path.join(this.dataDir, file)).default;

                res.json(artifact);
            } else {
                res.status(404).json({ message: `Artifact not found.` });
            };
        } catch(error) {
            console.log(error);

            res.status(500).json({ message: `Internal server error.` });
        };
    };

    public getArtifactImagesByName(req: Request, res: Response) {
        const name = req.params.name.toLowerCase().replace(/ /g, "_");
        const type = req.params.type;

        try {
            const artifactImagePath = path.join(this.imagesDir, name, `${type}.png`);

            if(existsSync(artifactImagePath)) {
                res.sendFile(artifactImagePath);
            } else {
                res.status(404).json({ message: `Image not found.` });
            };
        } catch(error) {
            console.log(error);
            
            res.status(500).json({ message: `Internal server error.` });
        };
    };
};