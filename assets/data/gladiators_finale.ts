import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Gladiator's Finale",
    domain: "Bosses (at World Level 2 and above)",
    version: "1.0",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "ATK +18%.",
        four: "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/circlet"
    },
});