import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Song of Days Past",
    domain: "Waterfall Wen",
    version: "4.3",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "Healing Bonus +15%",
        four: "When the equipping character heals a party member, the Yearning effect will be created for 6s, which records the total amount of healing provided (including overflow healing). When the duration expires, the Yearning effect will be transformed into the \"Waves of Days Past\" effect: When your active party member hits an opponent with a Normal Attack, Charged Attack, Plunging Attack, Elemental Skill, or Elemental Burst, the DMG dealt will be increased by 8% of the total healing amount recorded by the Yearning effect. The \"Waves of Days Past\" effect is removed after it has taken effect 5 times or after 10s. A single instance of the Yearning effect can record up to 15,000 healing, and only a single instance can exist at once, but it can record the healing from multiple equipping characters. Equipping characters on standby can still trigger this effect."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/song_of_days_past/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/song_of_days_past/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/song_of_days_past/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/song_of_days_past/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/song_of_days_past/images/circlet"
    },
});