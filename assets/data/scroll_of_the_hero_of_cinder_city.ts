import { Artifact } from "../../source/classes/artifact";

export default new Artifact({
    name: "Scroll of the Hero of Cinder City",
    domain: "Sanctum of Rainbow Spirits",
    version: "5.0",
    rarity: {
        minimum: 4,
        maximum: 5,
    },
    bonusPieces: {
        two: "When a nearby party member triggers a Nightsoul Burst, the equipping character regenerates 6 Elemental Energy.",
        four: "After the equipping character triggers a reaction related to their Elemental Type, all nearby party members gain a 12% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 15s. If the equipping character is in the Nightsoul's Blessing state when triggering this effect, all nearby party members gain an additional 28% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 20s. The equipping character can trigger this effect while off-field, and the DMG bonus from Artifact Sets with the same name do not stack"
    },
    images: {
        flower: "https://genshin-artifacts-api.onrender.com/api/artifacts/scroll_of_the_hero_of_cinder_city/images/flower",
        plume: "https://genshin-artifacts-api.onrender.com/api/artifacts/scroll_of_the_hero_of_cinder_city/images/plume",
        sands: "https://genshin-artifacts-api.onrender.com/api/artifacts/scroll_of_the_hero_of_cinder_city/images/sands",
        goblet: "https://genshin-artifacts-api.onrender.com/api/artifacts/scroll_of_the_hero_of_cinder_city/images/goblet",
        circlet: "https://genshin-artifacts-api.onrender.com/api/artifacts/scroll_of_the_hero_of_cinder_city/images/circlet"
    },
});