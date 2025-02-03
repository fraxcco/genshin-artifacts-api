import { Artifact } from "../../classes/artifact";

export default new Artifact({
    name: "Gladiator's Finale",
    domain: "Bosses (at World Level 2 and above)",
    rarity: {
        minimun: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "ATK +18%.",
        four: "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%."
    },
    images: {
        flower: "http://localhost:8080/api/artifacts/gladiators_finale/images/flower",
        plume: "http://localhost:8080/api/artifacts/gladiators_finale/images/plume",
        sands: "http://localhost:8080/api/artifacts/gladiators_finale/images/sands",
        goblet: "http://localhost:8080/api/artifacts/gladiators_finale/images/goblet",
        circlet: "http://localhost:8080/api/artifacts/gladiators_finale/images/circlet"
    },
});