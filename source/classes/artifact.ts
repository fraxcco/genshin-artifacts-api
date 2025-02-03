interface ArtifactOptions {
    name: string;
    domain: string;
    version: string;
    rarity: {
        minimum: number;
        maximum: number;
    };
    bonusPieces: { 
        two: string;
        four: string;
    }
    images: {
        flower: string;
        plume: string;
        sands: string;
        goblet: string;
        circlet: string;
    };
};

export class Artifact {
    public name: ArtifactOptions[`name`];
    public domain: ArtifactOptions[`domain`];
    public rarity: ArtifactOptions[`rarity`];
    public bonusPieces: ArtifactOptions[`bonusPieces`];
    public images: ArtifactOptions[`images`];
    
    constructor(options: ArtifactOptions) {
        Object.assign(this, options);
    };
};