import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Nighttime Whispers in the Echoing Woods",
    domain: "Waterfall Wen",
    version: "4.3",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "ATK +18%",
        four: "After using an Elemental Skill, gain a 20% Geo DMG Bonus for 10s. While under a shield granted by the Crystallize reaction, the above effect will be increased by 150%, and this additional increase disappears 1s after that shield is lost."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/nighttime_whispers_in_the_echoing_woods/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/nighttime_whispers_in_the_echoing_woods/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/nighttime_whispers_in_the_echoing_woods/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/nighttime_whispers_in_the_echoing_woods/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/nighttime_whispers_in_the_echoing_woods/images/circlet"
    },
});