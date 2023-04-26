import { Item } from "./types/types"

const baseItems: Item[] = [
      {
        "id": 1,
        "name": "bf_sword",
        "image_path": "./src/assets/bf_sword.png"
      },
      {
        "id": 2,
        "name": "bow",
        "image_path": "./src/assets/bow.png"
      },
      {
        "id": 3,
        "name": "chain_vest",
        "image_path": "./src/assets/chain_vest.png"
      },
      {
        "id": 4,
        "name": "negatron",
        "image_path": "./src/assets/negatron.png"
      },
      {
        "id": 5,
        "name": "rod",
        "image_path": "./src/assets/rod.png"
      },
      {
        "id": 6,
        "name": "tear",
        "image_path": "./src/assets/tear.png"
      },
      {
        "id": 7,
        "name": "belt",
        "image_path": "./src/assets/belt.png"
      },
      {
        "id": 8,
        "name": "gloves",
        "image_path": "./src/assets/gloves.png"
      },
      {
        "id": 9,
        "name": "spatula",
        "image_path": "./src/assets/spatula.png"
      }
    ]

const fullItems: Item[] = [
      {
        "id": 1,
        "name": "Deathblade",
        "components": [
          1,
          1
        ],
        "image_path": "./src/assets/deathblade.jpg"
      },
      {
        "id": 2,
        "name": "Giant's Slayer",
        "components": [
          1,
          2
        ],
        "image_path": "./src/assets/giant_slayer.jpg"
      },
      {
        "id": 3,
        "name": "Edge of the Night",
        "components": [
          1,
          3
        ],
        "image_path": "./src/assets/edge_night.png"
      },
      {
        "id": 4,
        "name": "Bloodthirster",
        "components": [
          1,
          4
        ],
        "image_path": "./src/assets/bloodthirster.png"
      },
      {
        "id": 5,
        "name": "Hextech Gunblade",
        "components": [
          1,
          5
        ],
        "image_path": "./src/assets/gunblade.png"
      },
      {
        "id": 6,
        "name": "Spear of Shojin",
        "components": [
          1,
          6
        ],
        "image_path": "./src/assets/shojin.png"
      },
      {
        "id": 7,
        "name": "Zeke's Herald",
        "components": [
          1,
          7
        ],
        "image_path": "./src/assets/zeke.png"
      },
      {
        "id": 8,
        "name": "Infinity Edge",
        "components": [
          1,
          8
        ],
        "image_path": "./src/assets/ie.png"
      },
      {
        "id": 9,
        "name": "Rapid Fire Cannon",
        "components": [
          2,
          2
        ],
        "image_path": "./src/assets/rapid_fire_cannon.png"
      },
      {
        "id": 10,
        "name": "Titan's Resolve",
        "components": [
          2,
          3
        ],
        "image_path": "./src/assets/titan_resolve.png"
      },
      {
        "id": 11,
        "name": "Runaan's Hurricane",
        "components": [
          2,
          4
        ],
        "image_path": "./src/assets/runaan.png"
      },
      {
        "id": 12,
        "name": "Guinsoo's Rageblade",
        "components": [
          2,
          5
        ],
        "image_path": "./src/assets/guinsoo.jpg"
      },
      {
        "id": 13,
        "name": "Statikk Shiv",
        "components": [
          2,
          6
        ],
        "image_path": "./src/assets/statikk.png"
      },
      {
        "id": 14,
        "name": "Zz'Rot",
        "components": [
          2,
          7
        ],
        "image_path": "./src/assets/zzrot.jpg"
      },
      {
        "id": 15,
        "name": "Last Whisper",
        "components": [
          2,
          8
        ],
        "image_path": "./src/assets/last_whisper.png"
      },
      {
        "id": 16,
        "name": "Bramble Vest",
        "components": [
          3,
          3
        ],
        "image_path": "./src/assets/bramble_vest.png"
      },
      {
        "id": 17,
        "name": "Gargoyle Stoneplate",
        "components": [
          3,
          4
        ],
        "image_path": "./src/assets/gargoyle.png"
      },
      {
        "id": 18,
        "name": "Locket of the Iron Solari",
        "components": [
          3,
          5
        ],
        "image_path": "./src/assets/solari.png"
      },
      {
        "id": 19,
        "name": "Frozen Heart",
        "components": [
          3,
          6
        ],
        "image_path": "./src/assets/frozen_heart.png"
      },
      {
        "id": 20,
        "name": "Sunfire Cape",
        "components": [
          3,
          7
        ],
        "image_path": "./src/assets/sunfire.png"
      },
      {
        "id": 21,
        "name": "Shroud of Stillness",
        "components": [
          3,
          8
        ],
        "image_path": "./src/assets/shroud_stillness.png"
      },
      {
        "id": 22,
        "name": "Dragon's Claw",
        "components": [
          4,
          4
        ],
        "image_path": "./src/assets/dragons_claw.png"
      },
      {
        "id": 23,
        "name": "Ionic Spark",
        "components": [
          4,
          5
        ],
        "image_path": "./src/assets/ionic_spark.png"
      },
      {
        "id": 24,
        "name": "Chalice of Power",
        "components": [
          4,
          6
        ],
        "image_path": "./src/assets/chalice.png"
      },
      {
        "id": 25,
        "name": "Zephyr",
        "components": [
          4,
          7
        ],
        "image_path": "./src/assets/zephyr.png"
      },
      {
        "id": 26,
        "name": "Quicksilver",
        "components": [
          4,
          8
        ],
        "image_path": "./src/assets/quicksilver.jpg"
      },
      {
        "id": 27,
        "name": "Rabadon",
        "components": [
          5,
          5
        ],
        "image_path": "./src/assets/rabadon.png"
      },
      {
        "id": 28,
        "name": "Archangel's Staff",
        "components": [
          5,
          6
        ],
        "image_path": "./src/assets/archangel.png"
      },
      {
        "id": 29,
        "name": "Morello",
        "components": [
          5,
          7
        ],
        "image_path": "./src/assets/morello.png"
      },
      {
        "id": 30,
        "name": "Jeweled Gauntlet",
        "components": [
          3,
          8
        ],
        "image_path": "./src/assets/arcane_gauntlet.jpg"
      },
      {
        "id": 31,
        "name": "Blue Buff",
        "components": [
          6,
          6
        ],
        "image_path": "./src/assets/blue_buff.png"
      },
      {
        "id": 32,
        "name": "Redemption",
        "components": [
          6,
          7
        ],
        "image_path": "./src/assets/redemption.png"
      },
      {
        "id": 33,
        "name": "Hand of Justice",
        "components": [
          6,
          8
        ],
        "image_path": "./src/assets/hand_justice.jpg"
      },
      {
        "id": 34,
        "name": "Warmog",
        "components": [
          7,
          7
        ],
        "image_path": "./src/assets/warmog.png"
      },
      {
        "id": 35,
        "name": "Banshee's claw",
        "components": [
          7,
          8
        ],
        "image_path": "./src/assets/banshee_claw.jpg"
      }
    ]

const emblems: Item[] = [
  {
    "id": 1,
    "name": "shimmerscale_emblem",
    "components": [
      9,
      1
    ],
    "image_path": "./src/assets/shimmerscale_emblem.png"
  },
  {
    "id": 2,
    "name": "ragewing_emblem",
    "components": [
      9,
      2
    ],
    "image_path": "./src/assets/ragewing_emblem.png"
  },
  {
    "id": 3,
    "name": "cavalier_emblem",
    "components": [
      9,
      3
    ],
    "image_path": "./src/assets/cavalier_emblem.png"
  },
  {
    "id": 4,
    "name": "mirage_emblem",
    "components": [
      9,
      4
    ],
    "image_path": "./src/assets/mirage_emblem.png"
  },
  {
    "id": 5,
    "name": "dragonmancer_emblem",
    "components": [
      9,
      5
    ],
    "image_path": "./src/assets/dragonmancer_emblem.png"
  },
  {
    "id": 6,
    "name": "mage_emblem",
    "components": [
      9,
      6
    ],
    "image_path": "./src/assets/mage_emblem.png"
  },
  {
    "id": 7,
    "name": "guardian_emblem",
    "components": [
      9,
      7
    ],
    "image_path": "./src/assets/guardian_emblem.png"
  },
  {
    "id": 8,
    "name": "assassin_emblem",
    "components": [
      9,
      8
    ],
    "image_path": "./src/assets/assassin_emblem.png"
  },
  {
    "id": 9,
    "name": "tacticians_crown",
    "components": [
      9,
      9
    ],
    "image_path": "./src/assets/tacticians_crown.png"
  }
]

export {baseItems, fullItems, emblems}
