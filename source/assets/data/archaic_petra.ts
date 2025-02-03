import { Artifact } from "../../classes/artifact";

export default new Artifact({
    name: "Archaic Petra",
    domain: "Domain of Guyun",
    rarity: {
        minimun: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "Gain a 15% Geo DMG Bonus.",
        four: "Upon obtaining an Elemental Shard Created through a Crystallize Reaction, all party members gain a 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time."
    },
    images: {
        flower: "http://localhost:8080/api/artifacts/archaic_petra/images/flower",
        plume: "http://localhost:8080/api/artifacts/archaic_petra/images/plume",
        sands: "http://localhost:8080/api/artifacts/archaic_petra/images/sands",
        goblet: "http://localhost:8080/api/artifacts/archaic_petra/images/goblet",
        circlet: "http://localhost:8080/api/artifacts/archaic_petra/images/circlet"
    },
});