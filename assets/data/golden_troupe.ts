import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Golden Troupe",
    domain: "Denouement of Sin",
    version: "4.0",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "Increases Elemental Skill DMG by 20%.",
        four: "Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG will be further increased by 25%. This effect will be cleared 2s after taking the field."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/golden_troupe/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/golden_troupe/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/golden_troupe/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/golden_troupe/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/golden_troupe/images/circlet"
    },
});