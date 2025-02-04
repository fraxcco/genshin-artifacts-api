import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Marechaussee Hunter",
    domain: "Denouement of Sin",
    version: "4.0",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "Normal and Charged Attack DMG +15%.",
        four: "When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/marechaussee_hunter/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/marechaussee_hunter/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/marechaussee_hunter/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/marechaussee_hunter/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/marechaussee_hunter/images/circlet"
    },
});