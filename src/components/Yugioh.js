import React, { Component } from 'react'
import getUrl from './GetFunction'
import { Row, Col, Card, Container } from 'react-bootstrap'
import CardContainer from './CardContainer'
import AllCards from './CardContainer'
import RenderCard from './CardContainer'
import CardRender from './CardContainer'

export default class Yugioh extends Component {
  render() { 
      const cardData = [
            {
                "id": 1508649,
                "name": "Altergeist Hexstia",
                "type": "Link Monster",
                "desc": "2 \"Altergeist\" monsters\r\nGains ATK equal to the original ATK of each \"Altergeist\" monster it points to. When a Spell/Trap Card or effect is activated (Quick Effect): You can Tribute 1 \"Altergeist\" monster this card points to; negate the activation, and if you do, destroy that card. If this card is sent from the field to the GY: You can add 1 \"Altergeist\" card from your Deck to your hand. You can only use this effect of \"Altergeist Hexstia\" once per turn.",
                "atk": 1500,
                "race": "Spellcaster",
                "attribute": "FIRE",
                "archetype": "Altergeist",
                "linkval": 2,
                "linkmarkers": [
                    "Bottom",
                    "Right"
                ],
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN200",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.76"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN066",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.55"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN046",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "2.45"
                    }
                ],
                "card_images": [
                    {
                        "id": 1508649,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/1508649.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/1508649.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.26",
                        "tcgplayer_price": "0.43",
                        "ebay_price": "1.19",
                        "amazon_price": "0.65",
                        "coolstuffinc_price": "0.99"
                    }
                ]
            },
            {
                "id": 35146019,
                "name": "Altergeist Manifestation9",
                "type": "Trap Card",
                "desc": "Target 1 \"Altergeist\" monster in your GY; Special Summon it in Attack Position, and if you do, equip it with this card. When this card leaves the field, destroy that monster. You can banish this card from your GY, then target 1 \"Altergeist\" Trap in your GY; add it to your hand. You can only use this effect of \"Altergeist Manifestation\" once per turn.",
                "race": "Normal",
                "archetype": "Altergeist",
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN216",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.52"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN067",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.49"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN070",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.47"
                    }
                ],
                "card_images": [
                    {
                        "id": 35146019,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/35146019.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/35146019.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.24",
                        "tcgplayer_price": "0.27",
                        "ebay_price": "0.99",
                        "amazon_price": "0.64",
                        "coolstuffinc_price": "0.49"
                    }
                ]
            },
            {
                "id": 35146019,
                "name": "Altergeist Manifestation8",
                "type": "Trap Card",
                "desc": "Target 1 \"Altergeist\" monster in your GY; Special Summon it in Attack Position, and if you do, equip it with this card. When this card leaves the field, destroy that monster. You can banish this card from your GY, then target 1 \"Altergeist\" Trap in your GY; add it to your hand. You can only use this effect of \"Altergeist Manifestation\" once per turn.",
                "race": "Normal",
                "archetype": "Altergeist",
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN216",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.52"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN067",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.49"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN070",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.47"
                    }
                ],
                "card_images": [
                    {
                        "id": 35146019,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/35146019.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/35146019.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.24",
                        "tcgplayer_price": "0.27",
                        "ebay_price": "0.99",
                        "amazon_price": "0.64",
                        "coolstuffinc_price": "0.49"
                    }
                ]
            },
            {
                "id": 35146019,
                "name": "Altergeist Manifestation7",
                "type": "Trap Card",
                "desc": "Target 1 \"Altergeist\" monster in your GY; Special Summon it in Attack Position, and if you do, equip it with this card. When this card leaves the field, destroy that monster. You can banish this card from your GY, then target 1 \"Altergeist\" Trap in your GY; add it to your hand. You can only use this effect of \"Altergeist Manifestation\" once per turn.",
                "race": "Normal",
                "archetype": "Altergeist",
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN216",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.52"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN067",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.49"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN070",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.47"
                    }
                ],
                "card_images": [
                    {
                        "id": 35146019,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/35146019.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/35146019.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.24",
                        "tcgplayer_price": "0.27",
                        "ebay_price": "0.99",
                        "amazon_price": "0.64",
                        "coolstuffinc_price": "0.49"
                    }
                ]
            },
            {
                "id": 35146019,
                "name": "Altergeist Manifestation6",
                "type": "Trap Card",
                "desc": "Target 1 \"Altergeist\" monster in your GY; Special Summon it in Attack Position, and if you do, equip it with this card. When this card leaves the field, destroy that monster. You can banish this card from your GY, then target 1 \"Altergeist\" Trap in your GY; add it to your hand. You can only use this effect of \"Altergeist Manifestation\" once per turn.",
                "race": "Normal",
                "archetype": "Altergeist",
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN216",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.52"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN067",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.49"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN070",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.47"
                    }
                ],
                "card_images": [
                    {
                        "id": 35146019,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/35146019.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/35146019.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.24",
                        "tcgplayer_price": "0.27",
                        "ebay_price": "0.99",
                        "amazon_price": "0.64",
                        "coolstuffinc_price": "0.49"
                    }
                ]
            },
            {
                "id": 35146019,
                "name": "Altergeist Manifestation5",
                "type": "Trap Card",
                "desc": "Target 1 \"Altergeist\" monster in your GY; Special Summon it in Attack Position, and if you do, equip it with this card. When this card leaves the field, destroy that monster. You can banish this card from your GY, then target 1 \"Altergeist\" Trap in your GY; add it to your hand. You can only use this effect of \"Altergeist Manifestation\" once per turn.",
                "race": "Normal",
                "archetype": "Altergeist",
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN216",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.52"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN067",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.49"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN070",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.47"
                    }
                ],
                "card_images": [
                    {
                        "id": 35146019,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/35146019.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/35146019.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.24",
                        "tcgplayer_price": "0.27",
                        "ebay_price": "0.99",
                        "amazon_price": "0.64",
                        "coolstuffinc_price": "0.49"
                    }
                ]
            },
            {
                "id": 35146019,
                "name": "Altergeist Manifestation4",
                "type": "Trap Card",
                "desc": "Target 1 \"Altergeist\" monster in your GY; Special Summon it in Attack Position, and if you do, equip it with this card. When this card leaves the field, destroy that monster. You can banish this card from your GY, then target 1 \"Altergeist\" Trap in your GY; add it to your hand. You can only use this effect of \"Altergeist Manifestation\" once per turn.",
                "race": "Normal",
                "archetype": "Altergeist",
                "card_sets": [
                    {
                        "set_name": "2018 Mega-Tin Mega Pack",
                        "set_code": "MP18-EN216",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.52"
                    },
                    {
                        "set_name": "Battles of Legend: Relentless Revenge",
                        "set_code": "BLRR-EN067",
                        "set_rarity": "Ultra Rare",
                        "set_rarity_code": "(UR)",
                        "set_price": "1.49"
                    },
                    {
                        "set_name": "Extreme Force",
                        "set_code": "EXFO-EN070",
                        "set_rarity": "Super Rare",
                        "set_rarity_code": "(SR)",
                        "set_price": "1.47"
                    }
                ],
                "card_images": [
                    {
                        "id": 35146019,
                        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/35146019.jpg",
                        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/35146019.jpg"
                    }
                ],
                "card_prices": [
                    {
                        "cardmarket_price": "0.24",
                        "tcgplayer_price": "0.27",
                        "ebay_price": "0.99",
                        "amazon_price": "0.64",
                        "coolstuffinc_price": "0.49"
                    }
                ]
            }
        ]

    return (
        <div>
          <h1>Yugioh</h1>
          <button onClick={getUrl({url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon'})}>click me</button> 
          <Container>
          <Row className="g-4">      
          <Col>1</Col>        
          <Col xs={7}> {CardRender(cardData)} </Col>
          <Col>3</Col>
          </Row>
          </Container>
        </div>
    )
  }
}