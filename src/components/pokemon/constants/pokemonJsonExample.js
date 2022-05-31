
function pokiJson() {
    const pokeJson = [
        {
          "id": "g1-1",
          "name": "Venusaur-EX",
          "supertype": "Pokémon",
          "subtypes": [
            "Basic",
            "EX"
          ],
          "hp": "180",
          "types": [
            "Grass"
          ],
          "evolvesTo": [
            "M Venusaur-EX"
          ],
          "rules": [
            "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
          ],
          "attacks": [
            {
              "name": "Frog Hop",
              "cost": [
                "Grass",
                "Colorless",
                "Colorless"
              ],
              "convertedEnergyCost": 3,
              "damage": "40+",
              "text": "Flip a coin. If heads, this attack does 40 more damage."
            },
            {
              "name": "Poison Impact",
              "cost": [
                "Grass",
                "Grass",
                "Colorless",
                "Colorless"
              ],
              "convertedEnergyCost": 4,
              "damage": "80",
              "text": "Your opponent's Active Pokémon is now Asleep and Poisoned."
            }
          ],
          "weaknesses": [
            {
              "type": "Fire",
              "value": "×2"
            }
          ],
          "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedRetreatCost": 4,
          "set": {
            "id": "g1",
            "name": "Generations",
            "series": "XY",
            "printedTotal": 115,
            "total": 115,
            "legalities": {
              "unlimited": "Legal",
              "expanded": "Legal"
            },
            "ptcgoCode": "GEN",
            "releaseDate": "2016/02/22",
            "updatedAt": "2020/08/14 09:35:00",
            "images": {
              "symbol": "https://images.pokemontcg.io/g1/symbol.png",
              "logo": "https://images.pokemontcg.io/g1/logo.png"
            }
          },
          "number": "1",
          "artist": "Eske Yoshinob",
          "rarity": "Rare Holo EX",
          "nationalPokedexNumbers": [
            3
          ],
          "legalities": {
            "unlimited": "Legal",
            "expanded": "Legal"
          },
          "images": {
            "small": "https://images.pokemontcg.io/g1/1.png",
            "large": "https://images.pokemontcg.io/g1/1_hires.png"
          },
          "tcgplayer": {
            "url": "https://prices.pokemontcg.io/tcgplayer/g1-1",
            "updatedAt": "2021/07/15",
            "prices": {
                "normal": {
                    "low": 0.04,
                    "mid": 0.25,
                    "high": 0.99,
                    "market": 0.14,
                    "directLow": 0.1
                },
                "reverseHolofoil": {
                    "low": 0.19,
                    "mid": 0.4,
                    "high": 1.09,
                    "market": 0.31,
                    "directLow": 0.26
                },
              "holofoil": {
                "low": 2.44,
                "mid": 5.4,
                "high": 16.99,
                "market": 5.38,
                "directLow": 6.1
              }
            }
          },
        "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base4-3",
        "updatedAt": "2022/05/29",
        "prices": {
            "averageSellPrice": 9.06,
            "lowPrice": 2.99,
            "trendPrice": 10.64,
            "reverseHoloTrend": 9.69,
            "lowPriceExPlus": 8.5,
            "avg1": 13.9,
            "avg7": 16.11,
            "avg30": 8.39,
            "reverseHoloAvg1": 15.0,
            "reverseHoloAvg7": 10.73,
            "reverseHoloAvg30": 10.31
        }
    }

        }]

    return pokeJson
}

export default pokiJson
