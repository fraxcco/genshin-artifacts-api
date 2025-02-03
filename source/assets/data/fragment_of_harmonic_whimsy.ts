import { Artifact } from "../../classes/artifact";

export default new Artifact({
    name: "Fragment of Harmonic Whimsy",
    domain: "Faded Theater",
    version: "4.6",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "ATK +18%",
        four: "When the value of a Bond of Life increases or decreases, this character deals 18% increased DMG for 6s. Max 3 stacks."
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/fragment_of_harmonic_whimsy/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/fragment_of_harmonic_whimsy/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/fragment_of_harmonic_whimsy/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/fragment_of_harmonic_whimsy/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/fragment_of_harmonic_whimsy/images/circlet"
    },
});