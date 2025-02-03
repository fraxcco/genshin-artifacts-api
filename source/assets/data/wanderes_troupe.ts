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
        flower: "http://localhost:8080/api/artifacts/wanderes_troupe/images/flower",
        plume: "http://localhost:8080/api/artifacts/wanderes_troupe/images/plume",
        sands: "http://localhost:8080/api/artifacts/wanderes_troupe/images/sands",
        goblet: "http://localhost:8080/api/artifacts/wanderes_troupe/images/goblet",
        circlet: "http://localhost:8080/api/artifacts/wanderes_troupe/images/circlet"
    },
});