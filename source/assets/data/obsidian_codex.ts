import { Artifact } from "../../classes/artifact";

export default new Artifact({
    name: "Obsidian Codex",
    domain: "Sanctum of Rainbow Spirits",
    version: "5.0",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "While the equipping character is in Nightsoul's Blessing and is on the field, their DMG dealt is increased by 15%.",
        four: "After the equipping character consumes 1 Nightsoul point while on the field, CRIT Rate increases by 40% for 6s. This effect can trigger once every second."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/obsidian_codex/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/obsidian_codex/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/obsidian_codex/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/obsidian_codex/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/obsidian_codex/images/circlet"
    },
});