import { Artifact } from "../../classes/artifact";

export default new Artifact({
    name: "Wandere's Troupe",
    domain: "Bosses (at World Level 2 and above)",
    rarity: {
        minimun: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "Increases Elemental Mastery by 80.",
        four: "Increases Charged Attack DMG by 35% if the character uses a Catalyst or a Bow."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/wanderes_troupe/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/wanderes_troupe/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/wanderes_troupe/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/wanderes_troupe/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/wanderes_troupe/images/circlet"
    },
});