import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Unfinished Reverie",
    domain: "Faded Theater",
    version: "4.6",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "ATK +18%",
        four: "After leaving combat for 3s, DMG dealt increased by 50%. In combat, if no Burning opponents are nearby for more than 6s, this DMG Bonus will decrease by 10% per second until it reaches 0%. When a Burning opponent exists, it will increase by 10% instead until it reaches 50%. This effect still triggers if the equipping character is off-field."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/unfinished_reverie/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/unfinished_reverie/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/unfinished_reverie/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/unfinished_reverie/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/unfinished_reverie/images/circlet"
    },
});