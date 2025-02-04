import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Archaic Petra",
    domain: "Domain of Guyun",
    version: "1.0",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "Gain a 15% Geo DMG Bonus.",
        four: "Upon obtaining an Elemental Shard Created through a Crystallize Reaction, all party members gain a 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/archaic_petra/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/archaic_petra/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/archaic_petra/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/archaic_petra/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/archaic_petra/images/circlet"
    },
});