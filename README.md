# Genshin Artifacts API

A `completely free` and `open-source` API made in `TypeScript` to access detailed information about Genshin Impact artifacts.

---

## 📜 Description

This API provides JSON-structured data about artifact sets in the video game `Genshin Impact`, including set piece bonuses `(2-piece and 4-piece)`, statistics, and more information.

It is designed to provide game developers with access to information about Genshin Impact artifact sets.

**Note:** All data related to Genshin Impact is the exclusive property of [Hoyoverse](https://www.hoyoverse.com/). This API is an independent project and is not officially affiliated with Hoyoverse.

---

## 📋 Characteristics

- **Easy to use:** Responses in JSON format, ideal for quick integration.
- **Accurate data:** Detailed and up-to-date information on artifact sets.
- **Without any cost:** Completely free and with no limits on requests for the personal user or for personal projects.
- **Commercial Use Prohibited:** The API may not be used for commercial purposes without explicit permission.

---

## 🛠️ Installation and use

### Instalation

For personal and local use without any changes, it is necessary to download the common dependencies. For development and code changes, it is also recommended to download the development dependencies for ease and convenience.

- **No code changes:**
```shell
npm install
```

- **With code changes:**
```shell
npm install -D
```

---

### Usage

#### Request
```javascript
fetch(`https://genshin-artifacts-api.onrender.com/api/artifacts/archaic_petra`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
```

#### Response
```json
{
    "name": "Gladiator's Finale",
    "domain": "Bosses (at World Level 2 and above)",
    "rarity": {
        "minimun": 4,
        "maximum": 5
    },
    "bonusPieces": {
        "two": "ATK +18%.",
        "four": "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%."
    },
    "images": {
        "flower": "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/flower",
        "plume": "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/plume",
        "sands": "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/sands",
        "goblet": "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/goblet",
        "circlet": "https://genshin-artifacts-api.onrender.com/api/artifacts/gladiators_finale/images/circlet"
    }
}
```

---

## 🔗 Endpoints

| ENDPOINT | DESCRIPTION |
|----------|----------|
| `GET /artifacts/all` | Returns a list of all artifact sets. |
| `GET /artifacts/:name` | Returns specific details about a specific artifact. |
| `GET /artifacts/:name/images/:type` | Returns a `PNG` image of a specific artifact, of a specific type. |

---

## 📄 License
This project is licensed under the [MIT License](./LICENSE.md). All data related to Genshin Impact is property of [Hoyoverse](https://www.hoyoverse.com/).

**Commercial Use Prohibited:** The API may not be used for commercial purposes without explicit permission from the author.

---

## 🤝 Contributions
Contributions are welcome! If you find bugs or have suggestions for improving the API, feel free to open an issue or submit a pull request to the repository.

---

## 🌐 Useful Links
- **[GitHub's Repository](https://github.com/byfraxcco/genshin-artifacts-api)**
- **[Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki)**
- **[Hoyoverse Terms of Service](https://www.hoyoverse.com/terms)**