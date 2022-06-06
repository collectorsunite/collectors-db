function magicSets() {

  const setNames = [
    "Tenth Edition",
    "Unlimited Edition",
    "Double Masters",
    "Revised Edition",
    "Fourth Edition Foreign Black Border",
    "Fourth Edition",
    "Fifth Dawn",
    "Fifth Edition",
    "Classic Sixth Edition",
    "Seventh Edition",
    "Eighth Edition",
    "Ninth Edition",
    "Masters 25",
    "Adventures in the Forgotten Realms Art Series",
    "Aether Revolt",
    "Forgotten Realms Commander",
    "Adventures in the Forgotten Realms",
    "Jumpstart Arena Exclusives",
    "Amonkhet",
    "Kaldheim Art Series",
    "Amonkhet Remastered",
    "Shards of Alara",
    "Alliances",
    "Modern Horizons Art Series",
    "Modern Horizons 2 Art Series",
    "Midnight Hunt Art Series",
    "Arena New Player Experience",
    "Arena Beginner Set",
    "Neon Dynasty Art Series",
    "Apocalypse",
    "Alara Reborn",
    "Archenemy",
    "Arabian Nights",
    "New Capenna Art Series",
    "Strixhaven Art Series",
    "Anthologies",
    "Antiquities",
    "Crimson Vow Art Series",
    "Avacyn Restored",
    "Zendikar Rising Art Series",
    "Battlebond",
    "Battle for Zendikar",
    "Born of the Gods",
    "Betrayers of Kamigawa",
    "Battle Royale Box Set",
    "Beatdown Box Set",
    "Commander 2013",
    "Commander 2014",
    "Commander 2015",
    "Commander 2016",
    "Commander 2017",
    "Commander 2018",
    "Commander 2019",
    "Commander 2020",
    "Commander 2021",
    "Commander Collection: Green",
    "Commander Collection: Black",
    "Collectors’ Edition",
    "Intl. Collectors’ Edition",
    "Champions of Kamigawa",
    "Chronicles",
    "Commander Legends: Battle for Baldur's Gate",
    "Commander's Arsenal",
    "Commander Anthology Volume II",
    "Commander Anthology",
    "Mystery Booster Playtest Cards 2019",
    "Mystery Booster Playtest Cards 2021",
    "Commander 2011",
    "Commander Legends",
    "Conspiracy: Take the Crown",
    "Conspiracy",
    "Conflux",
    "Magic 2015 Clash Pack",
    "Fate Reforged Clash Pack",
    "Magic Origins Clash Pack",
    "Coldsnap",
    "Coldsnap Theme Decks",
    "Innistrad: Double Feature",
    "Duel Decks: Elves vs. Goblins",
    "Duel Decks: Jace vs. Chandra",
    "Duel Decks: Divine vs. Demonic",
    "Duel Decks: Garruk vs. Liliana",
    "Duel Decks: Phyrexia vs. the Coalition",
    "Duel Decks: Elspeth vs. Tezzeret",
    "Duel Decks: Knights vs. Dragons",
    "Duel Decks: Ajani vs. Nicol Bolas",
    "Duel Decks: Venser vs. Koth",
    "Duel Decks: Izzet vs. Golgari",
    "Duel Decks: Sorin vs. Tibalt",
    "Duel Decks: Heroes vs. Monsters",
    "Duel Decks: Jace vs. Vraska",
    "Duel Decks: Speed vs. Cunning",
    "Duel Decks: Elspeth vs. Kiora",
    "Duel Decks: Zendikar vs. Eldrazi",
    "Duel Decks: Blessed vs. Cursed",
    "Duel Decks: Nissa vs. Ob Nixilis",
    "Duel Decks: Mind vs. Might",
    "Duel Decks: Merfolk vs. Goblins",
    "Duel Decks: Elves vs. Inventors",
    "Dragon's Maze",
    "Dissension",
    "Dark Ascension",
    "Deckmasters",
    "Dominaria",
    "Duels of the Planeswalkers",
    "From the Vault: Dragons",
    "The Dark",
    "Darksteel",
    "Dragons of Tarkir",
    "Duel Decks Anthology: Divine vs. Demonic",
    "Archenemy: Nicol Bolas",
    "Explorers of Ixalan",
    "Throne of Eldraine",
    "Eternal Masters",
    "Eldritch Moon",
    "Eventide",
    "Duel Decks Anthology: Elves vs. Goblins",
    "Exodus",
    "Zendikar Expeditions",
    "Friday Night Magic 2001",
    "Friday Night Magic 2002",
    "Friday Night Magic 2003",
    "Friday Night Magic 2004",
    "Friday Night Magic 2005",
    "Friday Night Magic 2006",
    "Friday Night Magic 2007",
    "Friday Night Magic 2008",
    "Friday Night Magic 2009",
    "Friday Night Magic 2010",
    "Friday Night Magic 2011",
    "Friday Night Magic 2012",
    "Friday Night Magic 2013",
    "Friday Night Magic 2014",
    "Friday Night Magic 2015",
    "Friday Night Magic 2016",
    "Friday Night Magic 2017",
    "Friday Night Magic 2018",
    "Foreign Black Border",
    "Fallen Empires",
    "Jumpstart Front Cards",
    "Mystery Booster Retail Edition Foils",
    "Friday Night Magic 2000",
    "Fate Reforged",
    "Future Sight",
    "Judge Gift Cards 2000",
    "Judge Gift Cards 2001",
    "Judge Gift Cards 2002",
    "Judge Gift Cards 2003",
    "Judge Gift Cards 2004",
    "Judge Gift Cards 2005",
    "Judge Gift Cards 2006",
    "Judge Gift Cards 2007",
    "Judge Gift Cards 2008",
    "Judge Gift Cards 2009",
    "Judge Gift Cards 2010",
    "Judge Gift Cards 2011",
    "2017 Gift Pack",
    "M19 Gift Pack",
    "Judge Gift Cards 1999",
    "Game Day Promos",
    "GRN Guild Kit",
    "RNA Guild Kit",
    "Game Night 2019",
    "Game Night",
    "Guildpact",
    "Guilds of Ravnica",
    "Global Series Jiang Yanggu & Mu Yanling",
    "Gatecrash",
    "Duel Decks Anthology: Garruk vs. Liliana",
    "Premium Deck Series: Slivers",
    "HasCon 2017",
    "Modern Horizons 1 Timeshifts",
    "Historic Anthology 1",
    "Historic Anthology 2",
    "Historic Anthology 3",
    "Historic Anthology 4",
    "Historic Anthology 5",
    "Happy Holidays",
    "Homelands",
    "Planechase",
    "Hour of Devastation",
    "2016 Heroes of the Realm",
    "2017 Heroes of the Realm",
    "2018 Heroes of the Realm",
    "2019 Heroes of the Realm",
    "2020 Heroes of the Realm",
    "Ice Age",
    "Ikoria: Lair of Behemoths",
    "Iconic Masters",
    "Invasion",
    "Innistrad",
    "Introductory Two-Player Set",
    "Judge Gift Cards 2012",
    "Judge Gift Cards 2013",
    "Judge Gift Cards 2014",
    "Judge Gift Cards 2015",
    "Judge Gift Cards 2016",
    "Judge Gift Cards 2017",
    "Judge Gift Cards 2018",
    "Judge Gift Cards 2019",
    "Judge Gift Cards 2020",
    "Jumpstart: Historic Horizons",
    "Judge Gift Cards 1998",
    "Jumpstart",
    "Journey into Nyx",
    "Judgment",
    "Duel Decks Anthology: Jace vs. Chandra",
    "Kaldheim Commander",
    "Kaldheim",
    "Kaladesh",
    "Kaladesh Remastered",
    "Khans of Tarkir",
    "League Tokens 2012",
    "League Tokens 2013",
    "League Tokens 2014",
    "League Tokens 2015",
    "League Tokens 2016",
    "League Tokens 2017",
    "Limited Edition Alpha",
    "Limited Edition Beta",
    "Legends",
    "Legions",
    "Lorwyn",
    "Magic 2010",
    "Magic 2011",
    "Magic 2012",
    "Magic 2013",
    "Magic 2014",
    "Magic 2015",
    "Core Set 2019",
    "Core Set 2020",
    "Core Set 2021",
    "Adventures in the Forgotten Realms Minigames",
    "Mystery Booster",
    "Mirrodin Besieged",
    "Modern Event Deck 2014",
    "Masters Edition",
    "Masters Edition II",
    "Masters Edition III",
    "Masters Edition IV",
    "Mythic Edition",
    "Multiverse Gift Box",
    "Modern Horizons",
    "Modern Horizons 2",
    "Midnight Hunt Commander",
    "Innistrad: Midnight Hunt",
    "Mirage",
    "Kaldheim Minigames",
    "Modern Masters 2015",
    "Modern Masters 2017",
    "Modern Masters",
    "Modern Horizons 2 Minigames",
    "Mercadian Masques",
    "Morningtide",
    "Amonkhet Invocations",
    "Magic Player Rewards 2001",
    "Kaladesh Inventions",
    "Mirrodin",
    "Strixhaven: School of Mages Minigames",
    "Innistrad: Crimson Vow Minigames",
    "Zendikar Rising Minigames",
    "New Capenna Commander",
    "Neon Dynasty Commander",
    "Nemesis",
    "Kamigawa: Neon Dynasty",
    "New Phyrexia",
    "Forgotten Realms Commander Display Commanders",
    "Arena New Player Experience Cards",
    "Archenemy Schemes",
    "Commander 2013 Oversized",
    "Commander 2014 Oversized",
    "Commander 2015 Oversized",
    "Commander 2016 Oversized",
    "Commander 2017 Oversized",
    "Commander 2018 Oversized",
    "Commander 2019 Oversized",
    "Commander 2020 Oversized",
    "Commander 2021 Display Commanders",
    "Commander's Arsenal Oversized",
    "Commander 2011 Oversized",
    "Odyssey",
    "Archenemy: Nicol Bolas Schemes",
    "Oath of the Gatewatch",
    "Planechase Planes",
    "Legacy Championship",
    "Midnight Hunt Commander Display Commanders",
    "Onslaught",
    "Planechase 2012 Planes",
    "Planechase Anthology Planes",
    "Magic Origins",
    "Vintage Championship",
    "Crimson Vow Commander Display Commanders",
    "Portal Second Age",
    "Magic Player Rewards 2003",
    "Magic Player Rewards 2004",
    "Magic Player Rewards 2005",
    "Magic Player Rewards 2006",
    "Magic Player Rewards 2007",
    "Magic Player Rewards 2008",
    "Magic Player Rewards 2009",
    "Magic Player Rewards 2010",
    "Tenth Edition Promos",
    "Magic Player Rewards 2011",
    "15th Anniversary Cards",
    "Judge Gift Cards 2022",
    "Two-Headed Giant Tournament",
    "Fifth Dawn Promos",
    "Eighth Edition Promos",
    "Ninth Edition Promos",
    "Aether Revolt Promos",
    "Adventures in the Forgotten Realms Promos",
    "Amonkhet Promos",
    "Arena League 2000",
    "Arena League 2001",
    "Arena League 2002",
    "Arena League 2003",
    "Arena League 2004",
    "Arena League 2005",
    "Arena League 2006",
    "Arena League 1999",
    "Shards of Alara Promos",
    "Asia Pacific Land Program",
    "MTG Arena Promos",
    "Apocalypse Promos",
    "Alara Reborn Promos",
    "Promotional Schemes",
    "Arena League 1996",
    "Astral Cards",
    "Avacyn Restored Promos",
    "Battlebond Promos",
    "Battle for Zendikar Promos",
    "Born of the Gods Promos",
    "Betrayers of Kamigawa Promos",
    "Miscellaneous Book Promos",
    "Planechase 2012",
    "Commander 2020 Promos",
    "Planechase Anthology",
    "Celebration Cards",
    "Champions of Kamigawa Promos",
    "Commander 2011 Launch Party",
    "Champs and States",
    "Conspiracy Promos",
    "Conflux Promos",
    "Coldsnap Promos",
    "Prophecy",
    "Premium Deck Series: Fire and Lightning",
    "Premium Deck Series: Graveborn",
    "Dragon's Maze Promos",
    "Dissension Promos",
    "Dark Ascension Promos",
    "Dominaria Promos",
    "Duels of the Planeswalkers 2010 Promos",
    "Duels of the Planeswalkers 2012 Promos",
    "Duels of the Planeswalkers 2013 Promos",
    "Duels of the Planeswalkers 2014 Promos",
    "Duels of the Planeswalkers 2015 Promos",
    "Dragon Con",
    "Darksteel Promos",
    "Dragons of Tarkir Promos",
    "Duels of the Planeswalkers 2009 Promos",
    "Throne of Eldraine Promos",
    "European Land Program",
    "Eldritch Moon Promos",
    "Eventide Promos",
    "Exodus Promos",
    "MagicFest 2019",
    "MagicFest 2020",
    "MagicFest 2021",
    "Fate Reforged Promos",
    "Future Sight Promos",
    "Gateway 2007",
    "Gateway 2008",
    "Guildpact Promos",
    "Grand Prix Promos",
    "Guilds of Ravnica Promos",
    "Guru",
    "Gatecrash Promos",
    "Gateway 2006",
    "Heads I Win, Tails You Lose",
    "Open the Helvault",
    "Hobby Japan Promos",
    "Promotional Planes",
    "Hour of Devastation Promos",
    "HarperPrism Book Promos",
    "Hachette UK",
    "IDW Comics 2013",
    "IDW Comics 2014",
    "IDW Comics 2012",
    "Ikoria: Lair of Behemoths Promos",
    "Invasion Promos",
    "Innistrad Promos",
    "Judge Gift Cards 2021",
    "Junior APAC Series",
    "Japan Junior Tournament",
    "Journey into Nyx Promos",
    "Junior Series Europe",
    "Judgment Promos",
    "Kaldheim Promos",
    "Kaladesh Promos",
    "Khans of Tarkir Promos",
    "Year of the Ox 2021",
    "Year of the Tiger 2022",
    "Planar Chaos",
    "Love Your LGS 2020",
    "Love Your LGS 2021",
    "DCI Legend Membership",
    "Legions Promos",
    "The List",
    "Lunar New Year 2018",
    "Lorwyn Promos",
    "Planeshift",
    "Magic 2010 Promos",
    "Magic 2011 Promos",
    "Magic 2012 Promos",
    "Magic 2013 Promos",
    "Magic 2014 Promos",
    "Magic 2015 Promos",
    "Core Set 2019 Promos",
    "Core Set 2020 Promos",
    "Core Set 2021 Promos",
    "Mirrodin Besieged Promos",
    "Media Inserts",
    "Modern Horizons Promos",
    "Modern Horizons 2 Promos",
    "MicroProse Promos",
    "Innistrad: Midnight Hunt Promos",
    "Mercadian Masques Promos",
    "Magic Online Avatars",
    "Morningtide Promos",
    "Magic Premiere Shop 2005",
    "Magic Premiere Shop 2006",
    "Magic Premiere Shop 2007",
    "Magic Premiere Shop 2008",
    "Magic Premiere Shop 2009",
    "Magic Premiere Shop 2010",
    "Magic Premiere Shop 2011",
    "Mirrodin Promos",
    "Nationals Promos",
    "Nemesis Promos",
    "Kamigawa: Neon Dynasty Promos",
    "New Phyrexia Promos",
    "Odyssey Promos",
    "Oath of the Gatewatch Promos",
    "Onslaught Promos",
    "Portal",
    "Magic Origins Promos",
    "M15 Prerelease Challenge",
    "Prophecy Promos",
    "Planar Chaos Promos",
    "Planeshift Promos",
    "Portal Demo Game",
    "M20 Promo Packs",
    "Pro Tour Promos",
    "Portal: Three Kingdoms Promos",
    "Magic Player Rewards 2002",
    "Ravnica: City of Guilds Promos",
    "Redemption Program",
    "Resale Promos",
    "Rivals of Ixalan Promos",
    "Magic Online Promos",
    "Ravnica Allegiance Promos",
    "Rise of the Eldrazi Promos",
    "Return to Ravnica Promos",
    "RNA Ravnica Weekend",
    "GRN Ravnica Weekend",
    "Salvat 2011",
    "San Diego Comic-Con 2014",
    "San Diego Comic-Con 2015",
    "San Diego Comic-Con 2016",
    "San Diego Comic-Con 2017",
    "San Diego Comic-Con 2018",
    "San Diego Comic-Con 2019",
    "Salvat 2005",
    "Scourge Promos",
    "San Diego Comic-Con 2013",
    "Sega Dreamcast Cards",
    "Shadowmoor Promos",
    "Shadows over Innistrad Promos",
    "Saviors of Kamigawa Promos",
    "Scars of Mirrodin Promos",
    "BFZ Standard Series",
    "XLN Standard Showdown",
    "M19 Standard Showdown",
    "Stronghold Promos",
    "Strixhaven: School of Mages Promos",
    "Summer of Magic",
    "Junior Super Series",
    "Pro Tour Collector Set",
    "Ponies: The Galloping",
    "Theros Beyond Death Promos",
    "Theros Promos",
    "Portal Three Kingdoms",
    "Tarkir Dragonfury",
    "Tempest Promos",
    "Torment Promos",
    "Time Spiral Promos",
    "Urza's Destiny Promos",
    "Urza's Legacy Promos",
    "Ultimate Box Topper",
    "Unhinged Promos"
]

  const sets = [
        {
            "code": "10E",
            "name": "Tenth Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2007-07-13",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "2ED",
            "name": "Unlimited Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1993-12-01",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "2XM",
            "name": "Double Masters",
            "type": "masters",
            "booster": [
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2020-08-07",
            "onlineOnly": false
        },
        {
            "code": "3ED",
            "name": "Revised Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1994-04-01",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "4BB",
            "name": "Fourth Edition Foreign Black Border",
            "type": "core",
            "releaseDate": "1995-04-01",
            "onlineOnly": false
        },
        {
            "code": "4ED",
            "name": "Fourth Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1995-04-01",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "5DN",
            "name": "Fifth Dawn",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2004-06-04",
            "block": "Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "5ED",
            "name": "Fifth Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1997-03-24",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "6ED",
            "name": "Classic Sixth Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1999-04-21",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "7ED",
            "name": "Seventh Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2001-04-11",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "8ED",
            "name": "Eighth Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2003-07-28",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "9ED",
            "name": "Ninth Edition",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2005-07-29",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "A25",
            "name": "Masters 25",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2018-03-16",
            "onlineOnly": false
        },
        {
            "code": "AAFR",
            "name": "Adventures in the Forgotten Realms Art Series",
            "type": "memorabilia",
            "releaseDate": "2021-07-23",
            "onlineOnly": false
        },
        {
            "code": "AER",
            "name": "Aether Revolt",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2017-01-20",
            "block": "Kaladesh",
            "onlineOnly": false
        },
        {
            "code": "AFC",
            "name": "Forgotten Realms Commander",
            "type": "commander",
            "releaseDate": "2021-07-23",
            "onlineOnly": false
        },
        {
            "code": "AFR",
            "name": "Adventures in the Forgotten Realms",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2021-07-23",
            "onlineOnly": false
        },
        {
            "code": "AJMP",
            "name": "Jumpstart Arena Exclusives",
            "type": "starter",
            "releaseDate": "2020-07-17",
            "onlineOnly": true
        },
        {
            "code": "AKH",
            "name": "Amonkhet",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2017-04-28",
            "block": "Amonkhet",
            "onlineOnly": false
        },
        {
            "code": "AKHM",
            "name": "Kaldheim Art Series",
            "type": "memorabilia",
            "releaseDate": "2021-02-05",
            "onlineOnly": false
        },
        {
            "code": "AKR",
            "name": "Amonkhet Remastered",
            "type": "masters",
            "releaseDate": "2020-08-13",
            "onlineOnly": true
        },
        {
            "code": "ALA",
            "name": "Shards of Alara",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2008-10-03",
            "block": "Alara",
            "onlineOnly": false
        },
        {
            "code": "ALL",
            "name": "Alliances",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1996-06-10",
            "block": "Ice Age",
            "onlineOnly": false
        },
        {
            "code": "AMH1",
            "name": "Modern Horizons Art Series",
            "type": "memorabilia",
            "releaseDate": "2019-06-05",
            "onlineOnly": false
        },
        {
            "code": "AMH2",
            "name": "Modern Horizons 2 Art Series",
            "type": "memorabilia",
            "releaseDate": "2021-06-18",
            "onlineOnly": false
        },
        {
            "code": "AMID",
            "name": "Midnight Hunt Art Series",
            "type": "memorabilia",
            "releaseDate": "2021-09-24",
            "block": "Innistrad: Double Feature",
            "onlineOnly": false
        },
        {
            "code": "ANA",
            "name": "Arena New Player Experience",
            "type": "starter",
            "releaseDate": "2018-07-14",
            "onlineOnly": true
        },
        {
            "code": "ANB",
            "name": "Arena Beginner Set",
            "type": "starter",
            "releaseDate": "2020-08-13",
            "onlineOnly": true
        },
        {
            "code": "ANEO",
            "name": "Neon Dynasty Art Series",
            "type": "memorabilia",
            "releaseDate": "2022-02-18",
            "onlineOnly": false
        },
        {
            "code": "APC",
            "name": "Apocalypse",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2001-06-04",
            "block": "Invasion",
            "onlineOnly": false
        },
        {
            "code": "ARB",
            "name": "Alara Reborn",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2009-04-30",
            "block": "Alara",
            "onlineOnly": false
        },
        {
            "code": "ARC",
            "name": "Archenemy",
            "type": "archenemy",
            "releaseDate": "2010-06-18",
            "onlineOnly": false
        },
        {
            "code": "ARN",
            "name": "Arabian Nights",
            "type": "expansion",
            "booster": [
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1993-12-17",
            "onlineOnly": false
        },
        {
            "code": "ASNC",
            "name": "New Capenna Art Series",
            "type": "memorabilia",
            "releaseDate": "2022-04-29",
            "onlineOnly": false
        },
        {
            "code": "ASTX",
            "name": "Strixhaven Art Series",
            "type": "memorabilia",
            "releaseDate": "2021-04-23",
            "onlineOnly": false
        },
        {
            "code": "ATH",
            "name": "Anthologies",
            "type": "box",
            "releaseDate": "1998-11-01",
            "onlineOnly": false
        },
        {
            "code": "ATQ",
            "name": "Antiquities",
            "type": "expansion",
            "booster": [
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1994-03-04",
            "onlineOnly": false
        },
        {
            "code": "AVOW",
            "name": "Crimson Vow Art Series",
            "type": "memorabilia",
            "releaseDate": "2021-11-19",
            "block": "Innistrad: Double Feature",
            "onlineOnly": false
        },
        {
            "code": "AVR",
            "name": "Avacyn Restored",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2012-05-04",
            "block": "Innistrad",
            "onlineOnly": false
        },
        {
            "code": "AZNR",
            "name": "Zendikar Rising Art Series",
            "type": "memorabilia",
            "releaseDate": "2020-09-25",
            "onlineOnly": false
        },
        {
            "code": "BBD",
            "name": "Battlebond",
            "type": "draft_innovation",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2018-06-08",
            "onlineOnly": false
        },
        {
            "code": "BFZ",
            "name": "Battle for Zendikar",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2015-10-02",
            "block": "Battle for Zendikar",
            "onlineOnly": false
        },
        {
            "code": "BNG",
            "name": "Born of the Gods",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2014-02-07",
            "block": "Theros",
            "onlineOnly": false
        },
        {
            "code": "BOK",
            "name": "Betrayers of Kamigawa",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2005-02-04",
            "block": "Kamigawa",
            "onlineOnly": false
        },
        {
            "code": "BRB",
            "name": "Battle Royale Box Set",
            "type": "box",
            "releaseDate": "1999-11-12",
            "onlineOnly": false
        },
        {
            "code": "BTD",
            "name": "Beatdown Box Set",
            "type": "box",
            "releaseDate": "2000-10-01",
            "onlineOnly": false
        },
        {
            "code": "C13",
            "name": "Commander 2013",
            "type": "commander",
            "releaseDate": "2013-11-01",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C14",
            "name": "Commander 2014",
            "type": "commander",
            "releaseDate": "2014-11-07",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C15",
            "name": "Commander 2015",
            "type": "commander",
            "releaseDate": "2015-11-13",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C16",
            "name": "Commander 2016",
            "type": "commander",
            "releaseDate": "2016-11-11",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C17",
            "name": "Commander 2017",
            "type": "commander",
            "releaseDate": "2017-08-25",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C18",
            "name": "Commander 2018",
            "type": "commander",
            "releaseDate": "2018-08-09",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C19",
            "name": "Commander 2019",
            "type": "commander",
            "releaseDate": "2019-08-23",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C20",
            "name": "Commander 2020",
            "type": "commander",
            "releaseDate": "2020-04-17",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "C21",
            "name": "Commander 2021",
            "type": "commander",
            "releaseDate": "2021-04-23",
            "onlineOnly": false
        },
        {
            "code": "CC1",
            "name": "Commander Collection: Green",
            "type": "arsenal",
            "releaseDate": "2020-12-04",
            "onlineOnly": false
        },
        {
            "code": "CC2",
            "name": "Commander Collection: Black",
            "type": "arsenal",
            "releaseDate": "2022-01-28",
            "onlineOnly": false
        },
        {
            "code": "CED",
            "name": "Collectors’ Edition",
            "type": "memorabilia",
            "releaseDate": "1993-12-10",
            "onlineOnly": false
        },
        {
            "code": "CEI",
            "name": "Intl. Collectors’ Edition",
            "type": "memorabilia",
            "releaseDate": "1993-12-10",
            "onlineOnly": false
        },
        {
            "code": "CHK",
            "name": "Champions of Kamigawa",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2004-10-01",
            "block": "Kamigawa",
            "onlineOnly": false
        },
        {
            "code": "CHR",
            "name": "Chronicles",
            "type": "masters",
            "booster": [
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1995-07-01",
            "onlineOnly": false
        },
        {
            "code": "CLB",
            "name": "Commander Legends: Battle for Baldur's Gate",
            "type": "draft_innovation",
            "releaseDate": "2022-06-10",
            "onlineOnly": false
        },
        {
            "code": "CM1",
            "name": "Commander's Arsenal",
            "type": "arsenal",
            "releaseDate": "2012-11-02",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "CM2",
            "name": "Commander Anthology Volume II",
            "type": "commander",
            "releaseDate": "2018-06-08",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "CMA",
            "name": "Commander Anthology",
            "type": "commander",
            "releaseDate": "2017-06-09",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "CMB1",
            "name": "Mystery Booster Playtest Cards 2019",
            "type": "funny",
            "booster": [
                "rare"
            ],
            "releaseDate": "2019-11-07",
            "onlineOnly": false
        },
        {
            "code": "CMB2",
            "name": "Mystery Booster Playtest Cards 2021",
            "type": "funny",
            "booster": [
                "rare"
            ],
            "releaseDate": "2021-08-20",
            "onlineOnly": false
        },
        {
            "code": "CMD",
            "name": "Commander 2011",
            "type": "commander",
            "releaseDate": "2011-06-17",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "CMR",
            "name": "Commander Legends",
            "type": "draft_innovation",
            "booster": [
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2020-11-20",
            "onlineOnly": false
        },
        {
            "code": "CN2",
            "name": "Conspiracy: Take the Crown",
            "type": "draft_innovation",
            "releaseDate": "2016-08-26",
            "block": "Conspiracy",
            "onlineOnly": false
        },
        {
            "code": "CNS",
            "name": "Conspiracy",
            "type": "draft_innovation",
            "releaseDate": "2014-06-06",
            "block": "Conspiracy",
            "onlineOnly": false
        },
        {
            "code": "CON",
            "name": "Conflux",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2009-02-06",
            "block": "Alara",
            "onlineOnly": false
        },
        {
            "code": "CP1",
            "name": "Magic 2015 Clash Pack",
            "type": "starter",
            "releaseDate": "2014-07-18",
            "onlineOnly": false
        },
        {
            "code": "CP2",
            "name": "Fate Reforged Clash Pack",
            "type": "starter",
            "releaseDate": "2015-01-23",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "CP3",
            "name": "Magic Origins Clash Pack",
            "type": "starter",
            "releaseDate": "2015-07-17",
            "onlineOnly": false
        },
        {
            "code": "CSP",
            "name": "Coldsnap",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon"
            ],
            "releaseDate": "2006-07-21",
            "block": "Ice Age",
            "onlineOnly": false
        },
        {
            "code": "CST",
            "name": "Coldsnap Theme Decks",
            "type": "box",
            "releaseDate": "2006-07-21",
            "block": "Ice Age",
            "onlineOnly": false
        },
        {
            "code": "DBL",
            "name": "Innistrad: Double Feature",
            "type": "draft_innovation",
            "releaseDate": "2022-01-28",
            "onlineOnly": false
        },
        {
            "code": "DD1",
            "name": "Duel Decks: Elves vs. Goblins",
            "type": "duel_deck",
            "releaseDate": "2007-11-16",
            "onlineOnly": false
        },
        {
            "code": "DD2",
            "name": "Duel Decks: Jace vs. Chandra",
            "type": "duel_deck",
            "releaseDate": "2008-11-07",
            "onlineOnly": false
        },
        {
            "code": "DDC",
            "name": "Duel Decks: Divine vs. Demonic",
            "type": "duel_deck",
            "releaseDate": "2009-04-10",
            "onlineOnly": false
        },
        {
            "code": "DDD",
            "name": "Duel Decks: Garruk vs. Liliana",
            "type": "duel_deck",
            "releaseDate": "2009-10-30",
            "onlineOnly": false
        },
        {
            "code": "DDE",
            "name": "Duel Decks: Phyrexia vs. the Coalition",
            "type": "duel_deck",
            "releaseDate": "2010-03-19",
            "onlineOnly": false
        },
        {
            "code": "DDF",
            "name": "Duel Decks: Elspeth vs. Tezzeret",
            "type": "duel_deck",
            "releaseDate": "2010-09-03",
            "onlineOnly": false
        },
        {
            "code": "DDG",
            "name": "Duel Decks: Knights vs. Dragons",
            "type": "duel_deck",
            "releaseDate": "2011-04-01",
            "onlineOnly": false
        },
        {
            "code": "DDH",
            "name": "Duel Decks: Ajani vs. Nicol Bolas",
            "type": "duel_deck",
            "releaseDate": "2011-09-02",
            "onlineOnly": false
        },
        {
            "code": "DDI",
            "name": "Duel Decks: Venser vs. Koth",
            "type": "duel_deck",
            "releaseDate": "2012-03-30",
            "onlineOnly": false
        },
        {
            "code": "DDJ",
            "name": "Duel Decks: Izzet vs. Golgari",
            "type": "duel_deck",
            "releaseDate": "2012-09-07",
            "onlineOnly": false
        },
        {
            "code": "DDK",
            "name": "Duel Decks: Sorin vs. Tibalt",
            "type": "duel_deck",
            "releaseDate": "2013-03-15",
            "onlineOnly": false
        },
        {
            "code": "DDL",
            "name": "Duel Decks: Heroes vs. Monsters",
            "type": "duel_deck",
            "releaseDate": "2013-09-06",
            "onlineOnly": false
        },
        {
            "code": "DDM",
            "name": "Duel Decks: Jace vs. Vraska",
            "type": "duel_deck",
            "releaseDate": "2014-03-14",
            "onlineOnly": false
        },
        {
            "code": "DDN",
            "name": "Duel Decks: Speed vs. Cunning",
            "type": "duel_deck",
            "releaseDate": "2014-09-05",
            "onlineOnly": false
        },
        {
            "code": "DDO",
            "name": "Duel Decks: Elspeth vs. Kiora",
            "type": "duel_deck",
            "releaseDate": "2015-02-27",
            "onlineOnly": false
        },
        {
            "code": "DDP",
            "name": "Duel Decks: Zendikar vs. Eldrazi",
            "type": "duel_deck",
            "releaseDate": "2015-08-28",
            "onlineOnly": false
        },
        {
            "code": "DDQ",
            "name": "Duel Decks: Blessed vs. Cursed",
            "type": "duel_deck",
            "releaseDate": "2016-02-26",
            "onlineOnly": false
        },
        {
            "code": "DDR",
            "name": "Duel Decks: Nissa vs. Ob Nixilis",
            "type": "duel_deck",
            "releaseDate": "2016-09-02",
            "onlineOnly": false
        },
        {
            "code": "DDS",
            "name": "Duel Decks: Mind vs. Might",
            "type": "duel_deck",
            "releaseDate": "2017-03-31",
            "onlineOnly": false
        },
        {
            "code": "DDT",
            "name": "Duel Decks: Merfolk vs. Goblins",
            "type": "duel_deck",
            "releaseDate": "2017-10-24",
            "onlineOnly": false
        },
        {
            "code": "DDU",
            "name": "Duel Decks: Elves vs. Inventors",
            "type": "duel_deck",
            "releaseDate": "2018-04-06",
            "onlineOnly": false
        },
        {
            "code": "DGM",
            "name": "Dragon's Maze",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2013-05-03",
            "block": "Return to Ravnica",
            "onlineOnly": false
        },
        {
            "code": "DIS",
            "name": "Dissension",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2006-05-05",
            "block": "Ravnica",
            "onlineOnly": false
        },
        {
            "code": "DKA",
            "name": "Dark Ascension",
            "type": "expansion",
            "releaseDate": "2012-02-03",
            "block": "Innistrad",
            "onlineOnly": false
        },
        {
            "code": "DKM",
            "name": "Deckmasters",
            "type": "box",
            "releaseDate": "2001-12-01",
            "onlineOnly": false
        },
        {
            "code": "DOM",
            "name": "Dominaria",
            "type": "expansion",
            "booster": [
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2018-04-27",
            "onlineOnly": false
        },
        {
            "code": "DPA",
            "name": "Duels of the Planeswalkers",
            "type": "box",
            "releaseDate": "2010-06-04",
            "onlineOnly": false
        },
        {
            "code": "DRB",
            "name": "From the Vault: Dragons",
            "type": "from_the_vault",
            "releaseDate": "2008-08-29",
            "onlineOnly": false
        },
        {
            "code": "DRK",
            "name": "The Dark",
            "type": "expansion",
            "booster": [
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1994-08-01",
            "onlineOnly": false
        },
        {
            "code": "DST",
            "name": "Darksteel",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2004-02-06",
            "block": "Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "DTK",
            "name": "Dragons of Tarkir",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2015-03-27",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "DVD",
            "name": "Duel Decks Anthology: Divine vs. Demonic",
            "type": "duel_deck",
            "releaseDate": "2014-12-05",
            "onlineOnly": false
        },
        {
            "code": "E01",
            "name": "Archenemy: Nicol Bolas",
            "type": "archenemy",
            "releaseDate": "2017-06-16",
            "onlineOnly": false
        },
        {
            "code": "E02",
            "name": "Explorers of Ixalan",
            "type": "box",
            "releaseDate": "2017-11-24",
            "onlineOnly": false
        },
        {
            "code": "ELD",
            "name": "Throne of Eldraine",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2019-10-04",
            "onlineOnly": false
        },
        {
            "code": "EMA",
            "name": "Eternal Masters",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2016-06-10",
            "onlineOnly": false
        },
        {
            "code": "EMN",
            "name": "Eldritch Moon",
            "type": "expansion",
            "releaseDate": "2016-07-22",
            "block": "Shadows over Innistrad",
            "onlineOnly": false
        },
        {
            "code": "EVE",
            "name": "Eventide",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2008-07-25",
            "block": "Shadowmoor",
            "onlineOnly": false
        },
        {
            "code": "EVG",
            "name": "Duel Decks Anthology: Elves vs. Goblins",
            "type": "duel_deck",
            "releaseDate": "2014-12-05",
            "onlineOnly": false
        },
        {
            "code": "EXO",
            "name": "Exodus",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1998-06-15",
            "block": "Tempest",
            "onlineOnly": false
        },
        {
            "code": "EXP",
            "name": "Zendikar Expeditions",
            "type": "masterpiece",
            "releaseDate": "2015-10-02",
            "block": "Battle for Zendikar",
            "onlineOnly": false
        },
        {
            "code": "F01",
            "name": "Friday Night Magic 2001",
            "type": "promo",
            "releaseDate": "2001-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F02",
            "name": "Friday Night Magic 2002",
            "type": "promo",
            "releaseDate": "2002-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F03",
            "name": "Friday Night Magic 2003",
            "type": "promo",
            "releaseDate": "2003-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F04",
            "name": "Friday Night Magic 2004",
            "type": "promo",
            "releaseDate": "2004-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F05",
            "name": "Friday Night Magic 2005",
            "type": "promo",
            "releaseDate": "2005-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F06",
            "name": "Friday Night Magic 2006",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F07",
            "name": "Friday Night Magic 2007",
            "type": "promo",
            "releaseDate": "2007-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F08",
            "name": "Friday Night Magic 2008",
            "type": "promo",
            "releaseDate": "2008-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F09",
            "name": "Friday Night Magic 2009",
            "type": "promo",
            "releaseDate": "2009-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F10",
            "name": "Friday Night Magic 2010",
            "type": "promo",
            "releaseDate": "2010-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F11",
            "name": "Friday Night Magic 2011",
            "type": "promo",
            "releaseDate": "2011-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F12",
            "name": "Friday Night Magic 2012",
            "type": "promo",
            "releaseDate": "2012-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F13",
            "name": "Friday Night Magic 2013",
            "type": "promo",
            "releaseDate": "2013-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F14",
            "name": "Friday Night Magic 2014",
            "type": "promo",
            "releaseDate": "2014-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F15",
            "name": "Friday Night Magic 2015",
            "type": "promo",
            "releaseDate": "2015-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F16",
            "name": "Friday Night Magic 2016",
            "type": "promo",
            "releaseDate": "2016-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F17",
            "name": "Friday Night Magic 2017",
            "type": "promo",
            "releaseDate": "2017-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "F18",
            "name": "Friday Night Magic 2018",
            "type": "promo",
            "releaseDate": "2017-12-27",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "FBB",
            "name": "Foreign Black Border",
            "type": "core",
            "releaseDate": "1994-04-01",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "FEM",
            "name": "Fallen Empires",
            "type": "expansion",
            "booster": [
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1994-11-01",
            "onlineOnly": false
        },
        {
            "code": "FJMP",
            "name": "Jumpstart Front Cards",
            "type": "memorabilia",
            "releaseDate": "2020-06-18",
            "onlineOnly": false
        },
        {
            "code": "FMB1",
            "name": "Mystery Booster Retail Edition Foils",
            "type": "masters",
            "releaseDate": "2020-03-08",
            "onlineOnly": false
        },
        {
            "code": "FNM",
            "name": "Friday Night Magic 2000",
            "type": "promo",
            "releaseDate": "2000-01-01",
            "block": "Friday Night Magic",
            "onlineOnly": false
        },
        {
            "code": "FRF",
            "name": "Fate Reforged",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2015-01-23",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "FUT",
            "name": "Future Sight",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2007-05-04",
            "block": "Time Spiral",
            "onlineOnly": false
        },
        {
            "code": "G00",
            "name": "Judge Gift Cards 2000",
            "type": "promo",
            "releaseDate": "2000-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G01",
            "name": "Judge Gift Cards 2001",
            "type": "promo",
            "releaseDate": "2001-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G02",
            "name": "Judge Gift Cards 2002",
            "type": "promo",
            "releaseDate": "2002-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G03",
            "name": "Judge Gift Cards 2003",
            "type": "promo",
            "releaseDate": "2003-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G04",
            "name": "Judge Gift Cards 2004",
            "type": "promo",
            "releaseDate": "2004-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G05",
            "name": "Judge Gift Cards 2005",
            "type": "promo",
            "releaseDate": "2005-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G06",
            "name": "Judge Gift Cards 2006",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G07",
            "name": "Judge Gift Cards 2007",
            "type": "promo",
            "releaseDate": "2007-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G08",
            "name": "Judge Gift Cards 2008",
            "type": "promo",
            "releaseDate": "2008-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G09",
            "name": "Judge Gift Cards 2009",
            "type": "promo",
            "releaseDate": "2009-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G10",
            "name": "Judge Gift Cards 2010",
            "type": "promo",
            "releaseDate": "2010-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G11",
            "name": "Judge Gift Cards 2011",
            "type": "promo",
            "releaseDate": "2011-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "G17",
            "name": "2017 Gift Pack",
            "type": "box",
            "releaseDate": "2017-10-20",
            "onlineOnly": false
        },
        {
            "code": "G18",
            "name": "M19 Gift Pack",
            "type": "box",
            "releaseDate": "2018-11-16",
            "onlineOnly": false
        },
        {
            "code": "G99",
            "name": "Judge Gift Cards 1999",
            "type": "promo",
            "releaseDate": "1999-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "GDY",
            "name": "Game Day Promos",
            "type": "promo",
            "releaseDate": "2022-04-08",
            "onlineOnly": false
        },
        {
            "code": "GK1",
            "name": "GRN Guild Kit",
            "type": "box",
            "releaseDate": "2018-11-02",
            "onlineOnly": false
        },
        {
            "code": "GK2",
            "name": "RNA Guild Kit",
            "type": "box",
            "releaseDate": "2019-02-15",
            "onlineOnly": false
        },
        {
            "code": "GN2",
            "name": "Game Night 2019",
            "type": "box",
            "releaseDate": "2019-11-15",
            "onlineOnly": false
        },
        {
            "code": "GNT",
            "name": "Game Night",
            "type": "box",
            "releaseDate": "2018-11-16",
            "onlineOnly": false
        },
        {
            "code": "GPT",
            "name": "Guildpact",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2006-02-03",
            "block": "Ravnica",
            "onlineOnly": false
        },
        {
            "code": "GRN",
            "name": "Guilds of Ravnica",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2018-10-05",
            "block": "Guilds of Ravnica",
            "onlineOnly": false
        },
        {
            "code": "GS1",
            "name": "Global Series Jiang Yanggu & Mu Yanling",
            "type": "duel_deck",
            "releaseDate": "2018-06-22",
            "onlineOnly": false
        },
        {
            "code": "GTC",
            "name": "Gatecrash",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2013-02-01",
            "block": "Return to Ravnica",
            "onlineOnly": false
        },
        {
            "code": "GVL",
            "name": "Duel Decks Anthology: Garruk vs. Liliana",
            "type": "duel_deck",
            "releaseDate": "2014-12-05",
            "onlineOnly": false
        },
        {
            "code": "H09",
            "name": "Premium Deck Series: Slivers",
            "type": "premium_deck",
            "releaseDate": "2009-11-20",
            "onlineOnly": false
        },
        {
            "code": "H17",
            "name": "HasCon 2017",
            "type": "funny",
            "releaseDate": "2017-09-20",
            "onlineOnly": false
        },
        {
            "code": "H1R",
            "name": "Modern Horizons 1 Timeshifts",
            "type": "draft_innovation",
            "releaseDate": "2021-06-18",
            "onlineOnly": false
        },
        {
            "code": "HA1",
            "name": "Historic Anthology 1",
            "type": "box",
            "releaseDate": "2019-11-21",
            "onlineOnly": true
        },
        {
            "code": "HA2",
            "name": "Historic Anthology 2",
            "type": "box",
            "releaseDate": "2020-03-12",
            "onlineOnly": true
        },
        {
            "code": "HA3",
            "name": "Historic Anthology 3",
            "type": "box",
            "releaseDate": "2020-05-21",
            "onlineOnly": true
        },
        {
            "code": "HA4",
            "name": "Historic Anthology 4",
            "type": "box",
            "releaseDate": "2021-03-11",
            "onlineOnly": true
        },
        {
            "code": "HA5",
            "name": "Historic Anthology 5",
            "type": "box",
            "releaseDate": "2021-05-27",
            "onlineOnly": true
        },
        {
            "code": "HHO",
            "name": "Happy Holidays",
            "type": "funny",
            "releaseDate": "2006-12-31",
            "onlineOnly": false
        },
        {
            "code": "HML",
            "name": "Homelands",
            "type": "expansion",
            "booster": [
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1995-10-01",
            "onlineOnly": false
        },
        {
            "code": "HOP",
            "name": "Planechase",
            "type": "planechase",
            "releaseDate": "2009-09-04",
            "onlineOnly": false
        },
        {
            "code": "HOU",
            "name": "Hour of Devastation",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2017-07-14",
            "block": "Amonkhet",
            "onlineOnly": false
        },
        {
            "code": "HTR16",
            "name": "2016 Heroes of the Realm",
            "type": "funny",
            "releaseDate": "2017-09-20",
            "block": "Heroes of the Realm",
            "onlineOnly": false
        },
        {
            "code": "HTR17",
            "name": "2017 Heroes of the Realm",
            "type": "funny",
            "releaseDate": "2018-08-01",
            "block": "Heroes of the Realm",
            "onlineOnly": false
        },
        {
            "code": "HTR18",
            "name": "2018 Heroes of the Realm",
            "type": "funny",
            "releaseDate": "2019-08-01",
            "block": "Heroes of the Realm",
            "onlineOnly": false
        },
        {
            "code": "HTR19",
            "name": "2019 Heroes of the Realm",
            "type": "funny",
            "releaseDate": "2020-08-01",
            "block": "Heroes of the Realm",
            "onlineOnly": false
        },
        {
            "code": "HTR20",
            "name": "2020 Heroes of the Realm",
            "type": "funny",
            "releaseDate": "2021-08-01",
            "block": "Heroes of the Realm",
            "onlineOnly": false
        },
        {
            "code": "ICE",
            "name": "Ice Age",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1995-06-03",
            "block": "Ice Age",
            "onlineOnly": false
        },
        {
            "code": "IKO",
            "name": "Ikoria: Lair of Behemoths",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2020-04-24",
            "onlineOnly": false
        },
        {
            "code": "IMA",
            "name": "Iconic Masters",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2017-11-17",
            "onlineOnly": false
        },
        {
            "code": "INV",
            "name": "Invasion",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2000-10-02",
            "block": "Invasion",
            "onlineOnly": false
        },
        {
            "code": "ISD",
            "name": "Innistrad",
            "type": "expansion",
            "releaseDate": "2011-09-30",
            "block": "Innistrad",
            "onlineOnly": false
        },
        {
            "code": "ITP",
            "name": "Introductory Two-Player Set",
            "type": "starter",
            "releaseDate": "1996-12-31",
            "onlineOnly": false
        },
        {
            "code": "J12",
            "name": "Judge Gift Cards 2012",
            "type": "promo",
            "releaseDate": "2012-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J13",
            "name": "Judge Gift Cards 2013",
            "type": "promo",
            "releaseDate": "2013-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J14",
            "name": "Judge Gift Cards 2014",
            "type": "promo",
            "releaseDate": "2014-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J15",
            "name": "Judge Gift Cards 2015",
            "type": "promo",
            "releaseDate": "2015-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J16",
            "name": "Judge Gift Cards 2016",
            "type": "promo",
            "releaseDate": "2016-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J17",
            "name": "Judge Gift Cards 2017",
            "type": "promo",
            "releaseDate": "2017-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J18",
            "name": "Judge Gift Cards 2018",
            "type": "promo",
            "releaseDate": "2018-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J19",
            "name": "Judge Gift Cards 2019",
            "type": "promo",
            "releaseDate": "2019-04-10",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J20",
            "name": "Judge Gift Cards 2020",
            "type": "promo",
            "releaseDate": "2020-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "J21",
            "name": "Jumpstart: Historic Horizons",
            "type": "draft_innovation",
            "releaseDate": "2021-08-26",
            "onlineOnly": true
        },
        {
            "code": "JGP",
            "name": "Judge Gift Cards 1998",
            "type": "promo",
            "releaseDate": "1998-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "JMP",
            "name": "Jumpstart",
            "type": "draft_innovation",
            "releaseDate": "2020-07-17",
            "onlineOnly": false
        },
        {
            "code": "JOU",
            "name": "Journey into Nyx",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2014-05-02",
            "block": "Theros",
            "onlineOnly": false
        },
        {
            "code": "JUD",
            "name": "Judgment",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2002-05-27",
            "block": "Odyssey",
            "onlineOnly": false
        },
        {
            "code": "JVC",
            "name": "Duel Decks Anthology: Jace vs. Chandra",
            "type": "duel_deck",
            "releaseDate": "2014-12-05",
            "onlineOnly": false
        },
        {
            "code": "KHC",
            "name": "Kaldheim Commander",
            "type": "commander",
            "releaseDate": "2021-02-05",
            "onlineOnly": false
        },
        {
            "code": "KHM",
            "name": "Kaldheim",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2021-02-05",
            "onlineOnly": false
        },
        {
            "code": "KLD",
            "name": "Kaladesh",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2016-09-30",
            "block": "Kaladesh",
            "onlineOnly": false
        },
        {
            "code": "KLR",
            "name": "Kaladesh Remastered",
            "type": "masters",
            "releaseDate": "2020-11-12",
            "onlineOnly": true
        },
        {
            "code": "KTK",
            "name": "Khans of Tarkir",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2014-09-26",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "L12",
            "name": "League Tokens 2012",
            "type": "token",
            "releaseDate": "2012-01-01",
            "onlineOnly": false
        },
        {
            "code": "L13",
            "name": "League Tokens 2013",
            "type": "token",
            "releaseDate": "2013-01-01",
            "onlineOnly": false
        },
        {
            "code": "L14",
            "name": "League Tokens 2014",
            "type": "token",
            "releaseDate": "2014-01-01",
            "onlineOnly": false
        },
        {
            "code": "L15",
            "name": "League Tokens 2015",
            "type": "token",
            "releaseDate": "2015-01-01",
            "onlineOnly": false
        },
        {
            "code": "L16",
            "name": "League Tokens 2016",
            "type": "token",
            "releaseDate": "2016-01-01",
            "onlineOnly": false
        },
        {
            "code": "L17",
            "name": "League Tokens 2017",
            "type": "token",
            "releaseDate": "2017-01-01",
            "onlineOnly": false
        },
        {
            "code": "LEA",
            "name": "Limited Edition Alpha",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1993-08-05",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "LEB",
            "name": "Limited Edition Beta",
            "type": "core",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1993-10-04",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "LEG",
            "name": "Legends",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1994-06-01",
            "onlineOnly": false
        },
        {
            "code": "LGN",
            "name": "Legions",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2003-02-03",
            "block": "Onslaught",
            "onlineOnly": false
        },
        {
            "code": "LRW",
            "name": "Lorwyn",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2007-10-12",
            "block": "Lorwyn",
            "onlineOnly": false
        },
        {
            "code": "M10",
            "name": "Magic 2010",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2009-07-17",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M11",
            "name": "Magic 2011",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2010-07-16",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M12",
            "name": "Magic 2012",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2011-07-15",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M13",
            "name": "Magic 2013",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2012-07-13",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M14",
            "name": "Magic 2014",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2013-07-19",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M15",
            "name": "Magic 2015",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2014-07-18",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M19",
            "name": "Core Set 2019",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon"
            ],
            "releaseDate": "2018-07-13",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M20",
            "name": "Core Set 2020",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon"
            ],
            "releaseDate": "2019-07-12",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "M21",
            "name": "Core Set 2021",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon"
            ],
            "releaseDate": "2020-07-03",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "MAFR",
            "name": "Adventures in the Forgotten Realms Minigames",
            "type": "funny",
            "releaseDate": "2021-07-23",
            "onlineOnly": false
        },
        {
            "code": "MB1",
            "name": "Mystery Booster",
            "type": "masters",
            "booster": [
                "rare"
            ],
            "releaseDate": "2019-11-07",
            "onlineOnly": false
        },
        {
            "code": "MBS",
            "name": "Mirrodin Besieged",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2011-02-04",
            "block": "Scars of Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "MD1",
            "name": "Modern Event Deck 2014",
            "type": "box",
            "releaseDate": "2014-05-30",
            "onlineOnly": false
        },
        {
            "code": "ME1",
            "name": "Masters Edition",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2007-09-10",
            "onlineOnly": true
        },
        {
            "code": "ME2",
            "name": "Masters Edition II",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2008-09-22",
            "onlineOnly": true
        },
        {
            "code": "ME3",
            "name": "Masters Edition III",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2009-09-07",
            "onlineOnly": true
        },
        {
            "code": "ME4",
            "name": "Masters Edition IV",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2011-01-10",
            "onlineOnly": true
        },
        {
            "code": "MED",
            "name": "Mythic Edition",
            "type": "masterpiece",
            "releaseDate": "2018-10-05",
            "onlineOnly": false
        },
        {
            "code": "MGB",
            "name": "Multiverse Gift Box",
            "type": "box",
            "releaseDate": "1996-11-01",
            "onlineOnly": false
        },
        {
            "code": "MH1",
            "name": "Modern Horizons",
            "type": "draft_innovation",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2019-06-14",
            "onlineOnly": false
        },
        {
            "code": "MH2",
            "name": "Modern Horizons 2",
            "type": "draft_innovation",
            "booster": [
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2021-06-18",
            "onlineOnly": false
        },
        {
            "code": "MIC",
            "name": "Midnight Hunt Commander",
            "type": "commander",
            "releaseDate": "2021-09-24",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "MID",
            "name": "Innistrad: Midnight Hunt",
            "type": "expansion",
            "releaseDate": "2021-09-24",
            "block": "Innistrad: Double Feature",
            "onlineOnly": false
        },
        {
            "code": "MIR",
            "name": "Mirage",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1996-10-08",
            "block": "Mirage",
            "onlineOnly": false
        },
        {
            "code": "MKHM",
            "name": "Kaldheim Minigames",
            "type": "funny",
            "releaseDate": "2021-02-05",
            "onlineOnly": false
        },
        {
            "code": "MM2",
            "name": "Modern Masters 2015",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2015-05-22",
            "onlineOnly": false
        },
        {
            "code": "MM3",
            "name": "Modern Masters 2017",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2017-03-17",
            "onlineOnly": false
        },
        {
            "code": "MMA",
            "name": "Modern Masters",
            "type": "masters",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2013-06-07",
            "onlineOnly": false
        },
        {
            "code": "MMH2",
            "name": "Modern Horizons 2 Minigames",
            "type": "funny",
            "releaseDate": "2021-06-18",
            "onlineOnly": false
        },
        {
            "code": "MMQ",
            "name": "Mercadian Masques",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1999-10-04",
            "block": "Masques",
            "onlineOnly": false
        },
        {
            "code": "MOR",
            "name": "Morningtide",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2008-02-01",
            "block": "Lorwyn",
            "onlineOnly": false
        },
        {
            "code": "MP2",
            "name": "Amonkhet Invocations",
            "type": "masterpiece",
            "releaseDate": "2017-04-28",
            "block": "Amonkhet",
            "onlineOnly": false
        },
        {
            "code": "MPR",
            "name": "Magic Player Rewards 2001",
            "type": "promo",
            "releaseDate": "2001-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "MPS",
            "name": "Kaladesh Inventions",
            "type": "masterpiece",
            "releaseDate": "2016-09-30",
            "block": "Kaladesh",
            "onlineOnly": false
        },
        {
            "code": "MRD",
            "name": "Mirrodin",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2003-10-02",
            "block": "Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "MSTX",
            "name": "Strixhaven: School of Mages Minigames",
            "type": "funny",
            "releaseDate": "2021-04-23",
            "onlineOnly": false
        },
        {
            "code": "MVOW",
            "name": "Innistrad: Crimson Vow Minigames",
            "type": "funny",
            "releaseDate": "2021-11-19",
            "onlineOnly": false
        },
        {
            "code": "MZNR",
            "name": "Zendikar Rising Minigames",
            "type": "funny",
            "releaseDate": "2020-09-25",
            "onlineOnly": false
        },
        {
            "code": "NCC",
            "name": "New Capenna Commander",
            "type": "commander",
            "releaseDate": "2022-04-29",
            "onlineOnly": false
        },
        {
            "code": "NEC",
            "name": "Neon Dynasty Commander",
            "type": "commander",
            "releaseDate": "2022-02-18",
            "onlineOnly": false
        },
        {
            "code": "NEM",
            "name": "Nemesis",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2000-02-14",
            "block": "Masques",
            "onlineOnly": false
        },
        {
            "code": "NEO",
            "name": "Kamigawa: Neon Dynasty",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ]
            ],
            "releaseDate": "2022-02-18",
            "onlineOnly": false
        },
        {
            "code": "NPH",
            "name": "New Phyrexia",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2011-05-13",
            "block": "Scars of Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "OAFC",
            "name": "Forgotten Realms Commander Display Commanders",
            "type": "memorabilia",
            "releaseDate": "2021-07-23",
            "onlineOnly": false
        },
        {
            "code": "OANA",
            "name": "Arena New Player Experience Cards",
            "type": "starter",
            "releaseDate": "2018-07-14",
            "onlineOnly": true
        },
        {
            "code": "OARC",
            "name": "Archenemy Schemes",
            "type": "archenemy",
            "releaseDate": "2010-06-18",
            "onlineOnly": false
        },
        {
            "code": "OC13",
            "name": "Commander 2013 Oversized",
            "type": "memorabilia",
            "releaseDate": "2013-11-01",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC14",
            "name": "Commander 2014 Oversized",
            "type": "memorabilia",
            "releaseDate": "2014-11-07",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC15",
            "name": "Commander 2015 Oversized",
            "type": "memorabilia",
            "releaseDate": "2015-11-13",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC16",
            "name": "Commander 2016 Oversized",
            "type": "memorabilia",
            "releaseDate": "2016-11-11",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC17",
            "name": "Commander 2017 Oversized",
            "type": "memorabilia",
            "releaseDate": "2017-08-25",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC18",
            "name": "Commander 2018 Oversized",
            "type": "memorabilia",
            "releaseDate": "2018-08-09",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC19",
            "name": "Commander 2019 Oversized",
            "type": "memorabilia",
            "releaseDate": "2019-08-31",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OC20",
            "name": "Commander 2020 Oversized",
            "type": "memorabilia",
            "releaseDate": "2020-04-17",
            "onlineOnly": false
        },
        {
            "code": "OC21",
            "name": "Commander 2021 Display Commanders",
            "type": "memorabilia",
            "releaseDate": "2021-04-23",
            "onlineOnly": false
        },
        {
            "code": "OCM1",
            "name": "Commander's Arsenal Oversized",
            "type": "memorabilia",
            "releaseDate": "2012-11-02",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "OCMD",
            "name": "Commander 2011 Oversized",
            "type": "memorabilia",
            "releaseDate": "2011-06-17",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "ODY",
            "name": "Odyssey",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2001-10-01",
            "block": "Odyssey",
            "onlineOnly": false
        },
        {
            "code": "OE01",
            "name": "Archenemy: Nicol Bolas Schemes",
            "type": "archenemy",
            "releaseDate": "2017-06-16",
            "onlineOnly": false
        },
        {
            "code": "OGW",
            "name": "Oath of the Gatewatch",
            "type": "expansion",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2016-01-22",
            "block": "Battle for Zendikar",
            "onlineOnly": false
        },
        {
            "code": "OHOP",
            "name": "Planechase Planes",
            "type": "planechase",
            "releaseDate": "2009-09-04",
            "onlineOnly": false
        },
        {
            "code": "OLGC",
            "name": "Legacy Championship",
            "type": "memorabilia",
            "releaseDate": "2011-01-01",
            "onlineOnly": false
        },
        {
            "code": "OMIC",
            "name": "Midnight Hunt Commander Display Commanders",
            "type": "memorabilia",
            "releaseDate": "2021-09-24",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "ONS",
            "name": "Onslaught",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2002-10-07",
            "block": "Onslaught",
            "onlineOnly": false
        },
        {
            "code": "OPC2",
            "name": "Planechase 2012 Planes",
            "type": "planechase",
            "releaseDate": "2012-06-01",
            "onlineOnly": false
        },
        {
            "code": "OPCA",
            "name": "Planechase Anthology Planes",
            "type": "planechase",
            "releaseDate": "2018-12-25",
            "onlineOnly": false
        },
        {
            "code": "ORI",
            "name": "Magic Origins",
            "type": "core",
            "booster": [
                [
                    "rare",
                    "mythic rare"
                ],
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2015-07-17",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "OVNT",
            "name": "Vintage Championship",
            "type": "memorabilia",
            "releaseDate": "2003-01-01",
            "onlineOnly": false
        },
        {
            "code": "OVOC",
            "name": "Crimson Vow Commander Display Commanders",
            "type": "memorabilia",
            "releaseDate": "2021-11-19",
            "block": "Innistrad: Double Feature",
            "onlineOnly": false
        },
        {
            "code": "P02",
            "name": "Portal Second Age",
            "type": "starter",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1998-06-24",
            "onlineOnly": false
        },
        {
            "code": "P03",
            "name": "Magic Player Rewards 2003",
            "type": "promo",
            "releaseDate": "2003-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P04",
            "name": "Magic Player Rewards 2004",
            "type": "promo",
            "releaseDate": "2004-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P05",
            "name": "Magic Player Rewards 2005",
            "type": "promo",
            "releaseDate": "2005-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P06",
            "name": "Magic Player Rewards 2006",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P07",
            "name": "Magic Player Rewards 2007",
            "type": "promo",
            "releaseDate": "2007-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P08",
            "name": "Magic Player Rewards 2008",
            "type": "promo",
            "releaseDate": "2008-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P09",
            "name": "Magic Player Rewards 2009",
            "type": "promo",
            "releaseDate": "2009-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P10",
            "name": "Magic Player Rewards 2010",
            "type": "promo",
            "releaseDate": "2010-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P10E",
            "name": "Tenth Edition Promos",
            "type": "promo",
            "releaseDate": "2007-07-13",
            "onlineOnly": false
        },
        {
            "code": "P11",
            "name": "Magic Player Rewards 2011",
            "type": "promo",
            "releaseDate": "2011-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "P15A",
            "name": "15th Anniversary Cards",
            "type": "promo",
            "releaseDate": "2008-04-01",
            "onlineOnly": false
        },
        {
            "code": "P22",
            "name": "Judge Gift Cards 2022",
            "type": "promo",
            "releaseDate": "2022-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "P2HG",
            "name": "Two-Headed Giant Tournament",
            "type": "promo",
            "releaseDate": "2005-12-09",
            "onlineOnly": false
        },
        {
            "code": "P5DN",
            "name": "Fifth Dawn Promos",
            "type": "promo",
            "releaseDate": "2004-06-04",
            "block": "Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "P8ED",
            "name": "Eighth Edition Promos",
            "type": "promo",
            "releaseDate": "2003-07-28",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "P9ED",
            "name": "Ninth Edition Promos",
            "type": "promo",
            "releaseDate": "2005-07-29",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "PAER",
            "name": "Aether Revolt Promos",
            "type": "promo",
            "releaseDate": "2017-01-20",
            "block": "Kaladesh",
            "onlineOnly": false
        },
        {
            "code": "PAFR",
            "name": "Adventures in the Forgotten Realms Promos",
            "type": "promo",
            "releaseDate": "2021-07-23",
            "onlineOnly": false
        },
        {
            "code": "PAKH",
            "name": "Amonkhet Promos",
            "type": "promo",
            "releaseDate": "2017-04-28",
            "block": "Amonkhet",
            "onlineOnly": false
        },
        {
            "code": "PAL00",
            "name": "Arena League 2000",
            "type": "promo",
            "releaseDate": "2000-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL01",
            "name": "Arena League 2001",
            "type": "promo",
            "releaseDate": "2001-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL02",
            "name": "Arena League 2002",
            "type": "promo",
            "releaseDate": "2002-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL03",
            "name": "Arena League 2003",
            "type": "promo",
            "releaseDate": "2003-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL04",
            "name": "Arena League 2004",
            "type": "promo",
            "releaseDate": "2004-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL05",
            "name": "Arena League 2005",
            "type": "promo",
            "releaseDate": "2005-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL06",
            "name": "Arena League 2006",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAL99",
            "name": "Arena League 1999",
            "type": "promo",
            "releaseDate": "1999-01-01",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PALA",
            "name": "Shards of Alara Promos",
            "type": "promo",
            "releaseDate": "2008-10-03",
            "block": "Alara",
            "onlineOnly": false
        },
        {
            "code": "PALP",
            "name": "Asia Pacific Land Program",
            "type": "promo",
            "releaseDate": "1998-09-01",
            "onlineOnly": false
        },
        {
            "code": "PANA",
            "name": "MTG Arena Promos",
            "type": "promo",
            "releaseDate": "2018-07-14",
            "onlineOnly": true
        },
        {
            "code": "PAPC",
            "name": "Apocalypse Promos",
            "type": "promo",
            "releaseDate": "2001-06-04",
            "block": "Invasion",
            "onlineOnly": false
        },
        {
            "code": "PARB",
            "name": "Alara Reborn Promos",
            "type": "promo",
            "releaseDate": "2009-04-30",
            "block": "Alara",
            "onlineOnly": false
        },
        {
            "code": "PARC",
            "name": "Promotional Schemes",
            "type": "archenemy",
            "releaseDate": "2010-06-18",
            "onlineOnly": false
        },
        {
            "code": "PARL",
            "name": "Arena League 1996",
            "type": "promo",
            "releaseDate": "1996-08-02",
            "block": "Arena League",
            "onlineOnly": false
        },
        {
            "code": "PAST",
            "name": "Astral Cards",
            "type": "box",
            "releaseDate": "1997-04-01",
            "onlineOnly": true
        },
        {
            "code": "PAVR",
            "name": "Avacyn Restored Promos",
            "type": "promo",
            "releaseDate": "2012-04-28",
            "block": "Innistrad",
            "onlineOnly": false
        },
        {
            "code": "PBBD",
            "name": "Battlebond Promos",
            "type": "promo",
            "releaseDate": "2018-06-08",
            "onlineOnly": false
        },
        {
            "code": "PBFZ",
            "name": "Battle for Zendikar Promos",
            "type": "promo",
            "releaseDate": "2015-10-02",
            "block": "Battle for Zendikar",
            "onlineOnly": false
        },
        {
            "code": "PBNG",
            "name": "Born of the Gods Promos",
            "type": "promo",
            "releaseDate": "2014-02-01",
            "block": "Theros",
            "onlineOnly": false
        },
        {
            "code": "PBOK",
            "name": "Betrayers of Kamigawa Promos",
            "type": "promo",
            "releaseDate": "2005-02-04",
            "block": "Kamigawa",
            "onlineOnly": false
        },
        {
            "code": "PBOOK",
            "name": "Miscellaneous Book Promos",
            "type": "promo",
            "releaseDate": "2009-01-27",
            "onlineOnly": false
        },
        {
            "code": "PC2",
            "name": "Planechase 2012",
            "type": "planechase",
            "releaseDate": "2012-06-01",
            "onlineOnly": false
        },
        {
            "code": "PC20",
            "name": "Commander 2020 Promos",
            "type": "promo",
            "releaseDate": "2020-04-17",
            "onlineOnly": false
        },
        {
            "code": "PCA",
            "name": "Planechase Anthology",
            "type": "planechase",
            "releaseDate": "2016-11-25",
            "onlineOnly": false
        },
        {
            "code": "PCEL",
            "name": "Celebration Cards",
            "type": "memorabilia",
            "releaseDate": "1996-08-14",
            "onlineOnly": false
        },
        {
            "code": "PCHK",
            "name": "Champions of Kamigawa Promos",
            "type": "promo",
            "releaseDate": "2004-10-01",
            "block": "Kamigawa",
            "onlineOnly": false
        },
        {
            "code": "PCMD",
            "name": "Commander 2011 Launch Party",
            "type": "memorabilia",
            "releaseDate": "2011-06-17",
            "block": "Commander",
            "onlineOnly": false
        },
        {
            "code": "PCMP",
            "name": "Champs and States",
            "type": "promo",
            "releaseDate": "2006-03-18",
            "onlineOnly": false
        },
        {
            "code": "PCNS",
            "name": "Conspiracy Promos",
            "type": "promo",
            "releaseDate": "2014-06-06",
            "block": "Conspiracy",
            "onlineOnly": false
        },
        {
            "code": "PCON",
            "name": "Conflux Promos",
            "type": "promo",
            "releaseDate": "2009-02-06",
            "block": "Alara",
            "onlineOnly": false
        },
        {
            "code": "PCSP",
            "name": "Coldsnap Promos",
            "type": "promo",
            "releaseDate": "2006-07-21",
            "block": "Ice Age",
            "onlineOnly": false
        },
        {
            "code": "PCY",
            "name": "Prophecy",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2000-06-05",
            "block": "Masques",
            "onlineOnly": false
        },
        {
            "code": "PD2",
            "name": "Premium Deck Series: Fire and Lightning",
            "type": "premium_deck",
            "releaseDate": "2010-11-19",
            "onlineOnly": false
        },
        {
            "code": "PD3",
            "name": "Premium Deck Series: Graveborn",
            "type": "premium_deck",
            "releaseDate": "2011-11-18",
            "onlineOnly": false
        },
        {
            "code": "PDGM",
            "name": "Dragon's Maze Promos",
            "type": "promo",
            "releaseDate": "2013-04-27",
            "block": "Return to Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PDIS",
            "name": "Dissension Promos",
            "type": "promo",
            "releaseDate": "2006-05-05",
            "block": "Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PDKA",
            "name": "Dark Ascension Promos",
            "type": "promo",
            "releaseDate": "2012-01-28",
            "block": "Innistrad",
            "onlineOnly": false
        },
        {
            "code": "PDOM",
            "name": "Dominaria Promos",
            "type": "promo",
            "releaseDate": "2018-04-27",
            "onlineOnly": false
        },
        {
            "code": "PDP10",
            "name": "Duels of the Planeswalkers 2010 Promos",
            "type": "promo",
            "releaseDate": "2010-01-01",
            "onlineOnly": false
        },
        {
            "code": "PDP12",
            "name": "Duels of the Planeswalkers 2012 Promos",
            "type": "promo",
            "releaseDate": "2011-01-01",
            "onlineOnly": false
        },
        {
            "code": "PDP13",
            "name": "Duels of the Planeswalkers 2013 Promos",
            "type": "promo",
            "releaseDate": "2012-01-01",
            "onlineOnly": false
        },
        {
            "code": "PDP14",
            "name": "Duels of the Planeswalkers 2014 Promos",
            "type": "promo",
            "releaseDate": "2013-01-01",
            "onlineOnly": false
        },
        {
            "code": "PDP15",
            "name": "Duels of the Planeswalkers 2015 Promos",
            "type": "promo",
            "releaseDate": "2014-01-01",
            "onlineOnly": false
        },
        {
            "code": "PDRC",
            "name": "Dragon Con",
            "type": "promo",
            "releaseDate": "1994-07-15",
            "onlineOnly": false
        },
        {
            "code": "PDST",
            "name": "Darksteel Promos",
            "type": "promo",
            "releaseDate": "2004-06-04",
            "block": "Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "PDTK",
            "name": "Dragons of Tarkir Promos",
            "type": "promo",
            "releaseDate": "2015-03-27",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "PDTP",
            "name": "Duels of the Planeswalkers 2009 Promos",
            "type": "promo",
            "releaseDate": "2009-01-01",
            "onlineOnly": false
        },
        {
            "code": "PELD",
            "name": "Throne of Eldraine Promos",
            "type": "promo",
            "releaseDate": "2019-10-04",
            "onlineOnly": false
        },
        {
            "code": "PELP",
            "name": "European Land Program",
            "type": "promo",
            "releaseDate": "2000-02-05",
            "onlineOnly": false
        },
        {
            "code": "PEMN",
            "name": "Eldritch Moon Promos",
            "type": "promo",
            "releaseDate": "2016-07-22",
            "block": "Shadows over Innistrad",
            "onlineOnly": false
        },
        {
            "code": "PEVE",
            "name": "Eventide Promos",
            "type": "promo",
            "releaseDate": "2008-07-25",
            "block": "Shadowmoor",
            "onlineOnly": false
        },
        {
            "code": "PEXO",
            "name": "Exodus Promos",
            "type": "promo",
            "releaseDate": "1998-06-15",
            "block": "Tempest",
            "onlineOnly": false
        },
        {
            "code": "PF19",
            "name": "MagicFest 2019",
            "type": "promo",
            "releaseDate": "2019-01-01",
            "onlineOnly": false
        },
        {
            "code": "PF20",
            "name": "MagicFest 2020",
            "type": "promo",
            "releaseDate": "2020-01-01",
            "onlineOnly": false
        },
        {
            "code": "PF21",
            "name": "MagicFest 2021",
            "type": "promo",
            "releaseDate": "2021-01-01",
            "onlineOnly": false
        },
        {
            "code": "PFRF",
            "name": "Fate Reforged Promos",
            "type": "promo",
            "releaseDate": "2015-01-23",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "PFUT",
            "name": "Future Sight Promos",
            "type": "promo",
            "releaseDate": "2007-05-04",
            "block": "Time Spiral",
            "onlineOnly": false
        },
        {
            "code": "PG07",
            "name": "Gateway 2007",
            "type": "promo",
            "releaseDate": "2007-01-01",
            "onlineOnly": false
        },
        {
            "code": "PG08",
            "name": "Gateway 2008",
            "type": "promo",
            "releaseDate": "2008-01-01",
            "onlineOnly": false
        },
        {
            "code": "PGPT",
            "name": "Guildpact Promos",
            "type": "promo",
            "releaseDate": "2006-02-03",
            "block": "Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PGPX",
            "name": "Grand Prix Promos",
            "type": "promo",
            "releaseDate": "2007-02-24",
            "onlineOnly": false
        },
        {
            "code": "PGRN",
            "name": "Guilds of Ravnica Promos",
            "type": "promo",
            "releaseDate": "2018-10-05",
            "block": "Guilds of Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PGRU",
            "name": "Guru",
            "type": "promo",
            "releaseDate": "1999-07-12",
            "onlineOnly": false
        },
        {
            "code": "PGTC",
            "name": "Gatecrash Promos",
            "type": "promo",
            "releaseDate": "2013-01-26",
            "block": "Return to Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PGTW",
            "name": "Gateway 2006",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "onlineOnly": false
        },
        {
            "code": "PHED",
            "name": "Heads I Win, Tails You Lose",
            "type": "commander",
            "releaseDate": "2022-04-22",
            "onlineOnly": false
        },
        {
            "code": "PHEL",
            "name": "Open the Helvault",
            "type": "promo",
            "releaseDate": "2012-04-28",
            "onlineOnly": false
        },
        {
            "code": "PHJ",
            "name": "Hobby Japan Promos",
            "type": "promo",
            "releaseDate": "2002-07-01",
            "onlineOnly": false
        },
        {
            "code": "PHOP",
            "name": "Promotional Planes",
            "type": "promo",
            "releaseDate": "2009-09-04",
            "onlineOnly": false
        },
        {
            "code": "PHOU",
            "name": "Hour of Devastation Promos",
            "type": "promo",
            "releaseDate": "2017-07-14",
            "block": "Amonkhet",
            "onlineOnly": false
        },
        {
            "code": "PHPR",
            "name": "HarperPrism Book Promos",
            "type": "promo",
            "releaseDate": "1994-09-01",
            "onlineOnly": false
        },
        {
            "code": "PHUK",
            "name": "Hachette UK",
            "type": "box",
            "releaseDate": "2006-01-01",
            "onlineOnly": false
        },
        {
            "code": "PI13",
            "name": "IDW Comics 2013",
            "type": "promo",
            "releaseDate": "2013-01-01",
            "onlineOnly": false
        },
        {
            "code": "PI14",
            "name": "IDW Comics 2014",
            "type": "promo",
            "releaseDate": "2014-01-01",
            "onlineOnly": false
        },
        {
            "code": "PIDW",
            "name": "IDW Comics 2012",
            "type": "promo",
            "releaseDate": "2012-01-01",
            "onlineOnly": false
        },
        {
            "code": "PIKO",
            "name": "Ikoria: Lair of Behemoths Promos",
            "type": "promo",
            "releaseDate": "2020-04-24",
            "onlineOnly": false
        },
        {
            "code": "PINV",
            "name": "Invasion Promos",
            "type": "promo",
            "releaseDate": "2000-10-02",
            "block": "Invasion",
            "onlineOnly": false
        },
        {
            "code": "PISD",
            "name": "Innistrad Promos",
            "type": "promo",
            "releaseDate": "2011-09-24",
            "block": "Innistrad",
            "onlineOnly": false
        },
        {
            "code": "PJ21",
            "name": "Judge Gift Cards 2021",
            "type": "promo",
            "releaseDate": "2021-01-01",
            "block": "Judge Gift Cards",
            "onlineOnly": false
        },
        {
            "code": "PJAS",
            "name": "Junior APAC Series",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "onlineOnly": false
        },
        {
            "code": "PJJT",
            "name": "Japan Junior Tournament",
            "type": "promo",
            "releaseDate": "2003-01-01",
            "onlineOnly": false
        },
        {
            "code": "PJOU",
            "name": "Journey into Nyx Promos",
            "type": "promo",
            "releaseDate": "2014-04-26",
            "block": "Theros",
            "onlineOnly": false
        },
        {
            "code": "PJSE",
            "name": "Junior Series Europe",
            "type": "promo",
            "releaseDate": "2005-01-01",
            "onlineOnly": false
        },
        {
            "code": "PJUD",
            "name": "Judgment Promos",
            "type": "promo",
            "releaseDate": "2002-05-27",
            "block": "Odyssey",
            "onlineOnly": false
        },
        {
            "code": "PKHM",
            "name": "Kaldheim Promos",
            "type": "promo",
            "releaseDate": "2021-02-05",
            "onlineOnly": false
        },
        {
            "code": "PKLD",
            "name": "Kaladesh Promos",
            "type": "promo",
            "releaseDate": "2016-09-30",
            "block": "Kaladesh",
            "onlineOnly": false
        },
        {
            "code": "PKTK",
            "name": "Khans of Tarkir Promos",
            "type": "promo",
            "releaseDate": "2014-09-26",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "PL21",
            "name": "Year of the Ox 2021",
            "type": "promo",
            "releaseDate": "2021-01-25",
            "onlineOnly": false
        },
        {
            "code": "PL22",
            "name": "Year of the Tiger 2022",
            "type": "promo",
            "releaseDate": "2022-02-25",
            "onlineOnly": false
        },
        {
            "code": "PLC",
            "name": "Planar Chaos",
            "type": "expansion",
            "releaseDate": "2007-02-02",
            "block": "Time Spiral",
            "onlineOnly": false
        },
        {
            "code": "PLG20",
            "name": "Love Your LGS 2020",
            "type": "promo",
            "releaseDate": "2020-05-18",
            "onlineOnly": false
        },
        {
            "code": "PLG21",
            "name": "Love Your LGS 2021",
            "type": "promo",
            "releaseDate": "2021-06-22",
            "onlineOnly": false
        },
        {
            "code": "PLGM",
            "name": "DCI Legend Membership",
            "type": "promo",
            "releaseDate": "1995-01-01",
            "onlineOnly": false
        },
        {
            "code": "PLGN",
            "name": "Legions Promos",
            "type": "promo",
            "releaseDate": "2003-02-03",
            "block": "Onslaught",
            "onlineOnly": false
        },
        {
            "code": "PLIST",
            "name": "The List",
            "type": "masters",
            "releaseDate": "2020-09-26",
            "onlineOnly": false
        },
        {
            "code": "PLNY",
            "name": "Lunar New Year 2018",
            "type": "promo",
            "releaseDate": "2018-02-16",
            "onlineOnly": false
        },
        {
            "code": "PLRW",
            "name": "Lorwyn Promos",
            "type": "promo",
            "releaseDate": "2007-10-12",
            "block": "Lorwyn",
            "onlineOnly": false
        },
        {
            "code": "PLS",
            "name": "Planeshift",
            "type": "expansion",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "2001-02-05",
            "block": "Invasion",
            "onlineOnly": false
        },
        {
            "code": "PM10",
            "name": "Magic 2010 Promos",
            "type": "promo",
            "releaseDate": "2009-07-16",
            "onlineOnly": false
        },
        {
            "code": "PM11",
            "name": "Magic 2011 Promos",
            "type": "promo",
            "releaseDate": "2010-07-15",
            "onlineOnly": false
        },
        {
            "code": "PM12",
            "name": "Magic 2012 Promos",
            "type": "promo",
            "releaseDate": "2011-07-14",
            "onlineOnly": false
        },
        {
            "code": "PM13",
            "name": "Magic 2013 Promos",
            "type": "promo",
            "releaseDate": "2012-07-12",
            "onlineOnly": false
        },
        {
            "code": "PM14",
            "name": "Magic 2014 Promos",
            "type": "promo",
            "releaseDate": "2013-07-18",
            "onlineOnly": false
        },
        {
            "code": "PM15",
            "name": "Magic 2015 Promos",
            "type": "promo",
            "releaseDate": "2014-07-17",
            "onlineOnly": false
        },
        {
            "code": "PM19",
            "name": "Core Set 2019 Promos",
            "type": "promo",
            "releaseDate": "2018-07-13",
            "onlineOnly": false
        },
        {
            "code": "PM20",
            "name": "Core Set 2020 Promos",
            "type": "promo",
            "releaseDate": "2019-07-12",
            "onlineOnly": false
        },
        {
            "code": "PM21",
            "name": "Core Set 2021 Promos",
            "type": "promo",
            "releaseDate": "2020-07-03",
            "onlineOnly": false
        },
        {
            "code": "PMBS",
            "name": "Mirrodin Besieged Promos",
            "type": "promo",
            "releaseDate": "2011-02-03",
            "block": "Scars of Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "PMEI",
            "name": "Media Inserts",
            "type": "promo",
            "releaseDate": "1995-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMH1",
            "name": "Modern Horizons Promos",
            "type": "promo",
            "releaseDate": "2019-06-14",
            "onlineOnly": false
        },
        {
            "code": "PMH2",
            "name": "Modern Horizons 2 Promos",
            "type": "promo",
            "releaseDate": "2021-06-18",
            "onlineOnly": false
        },
        {
            "code": "PMIC",
            "name": "MicroProse Promos",
            "type": "memorabilia",
            "releaseDate": "1997-04-01",
            "onlineOnly": true
        },
        {
            "code": "PMID",
            "name": "Innistrad: Midnight Hunt Promos",
            "type": "promo",
            "releaseDate": "2021-09-24",
            "block": "Innistrad: Double Feature",
            "onlineOnly": false
        },
        {
            "code": "PMMQ",
            "name": "Mercadian Masques Promos",
            "type": "promo",
            "releaseDate": "1999-10-04",
            "block": "Masques",
            "onlineOnly": false
        },
        {
            "code": "PMOA",
            "name": "Magic Online Avatars",
            "type": "vanguard",
            "releaseDate": "2003-01-01",
            "onlineOnly": true
        },
        {
            "code": "PMOR",
            "name": "Morningtide Promos",
            "type": "promo",
            "releaseDate": "2008-02-01",
            "block": "Lorwyn",
            "onlineOnly": false
        },
        {
            "code": "PMPS",
            "name": "Magic Premiere Shop 2005",
            "type": "promo",
            "releaseDate": "2005-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMPS06",
            "name": "Magic Premiere Shop 2006",
            "type": "promo",
            "releaseDate": "2006-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMPS07",
            "name": "Magic Premiere Shop 2007",
            "type": "promo",
            "releaseDate": "2007-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMPS08",
            "name": "Magic Premiere Shop 2008",
            "type": "promo",
            "releaseDate": "2008-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMPS09",
            "name": "Magic Premiere Shop 2009",
            "type": "promo",
            "releaseDate": "2009-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMPS10",
            "name": "Magic Premiere Shop 2010",
            "type": "promo",
            "releaseDate": "2010-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMPS11",
            "name": "Magic Premiere Shop 2011",
            "type": "promo",
            "releaseDate": "2011-01-01",
            "onlineOnly": false
        },
        {
            "code": "PMRD",
            "name": "Mirrodin Promos",
            "type": "promo",
            "releaseDate": "2004-06-04",
            "block": "Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "PNAT",
            "name": "Nationals Promos",
            "type": "promo",
            "releaseDate": "2018-01-25",
            "onlineOnly": false
        },
        {
            "code": "PNEM",
            "name": "Nemesis Promos",
            "type": "promo",
            "releaseDate": "2000-02-14",
            "block": "Masques",
            "onlineOnly": false
        },
        {
            "code": "PNEO",
            "name": "Kamigawa: Neon Dynasty Promos",
            "type": "promo",
            "releaseDate": "2022-02-18",
            "onlineOnly": false
        },
        {
            "code": "PNPH",
            "name": "New Phyrexia Promos",
            "type": "promo",
            "releaseDate": "2011-05-12",
            "block": "Scars of Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "PODY",
            "name": "Odyssey Promos",
            "type": "promo",
            "releaseDate": "2001-10-01",
            "block": "Odyssey",
            "onlineOnly": false
        },
        {
            "code": "POGW",
            "name": "Oath of the Gatewatch Promos",
            "type": "promo",
            "releaseDate": "2016-01-22",
            "block": "Battle for Zendikar",
            "onlineOnly": false
        },
        {
            "code": "PONS",
            "name": "Onslaught Promos",
            "type": "promo",
            "releaseDate": "2003-02-03",
            "block": "Onslaught",
            "onlineOnly": false
        },
        {
            "code": "POR",
            "name": "Portal",
            "type": "starter",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1997-05-01",
            "onlineOnly": false
        },
        {
            "code": "PORI",
            "name": "Magic Origins Promos",
            "type": "promo",
            "releaseDate": "2015-07-17",
            "onlineOnly": false
        },
        {
            "code": "PPC1",
            "name": "M15 Prerelease Challenge",
            "type": "memorabilia",
            "releaseDate": "2014-07-12",
            "onlineOnly": false
        },
        {
            "code": "PPCY",
            "name": "Prophecy Promos",
            "type": "promo",
            "releaseDate": "2000-06-05",
            "block": "Masques",
            "onlineOnly": false
        },
        {
            "code": "PPLC",
            "name": "Planar Chaos Promos",
            "type": "promo",
            "releaseDate": "2007-02-02",
            "block": "Time Spiral",
            "onlineOnly": false
        },
        {
            "code": "PPLS",
            "name": "Planeshift Promos",
            "type": "promo",
            "releaseDate": "2001-02-05",
            "block": "Invasion",
            "onlineOnly": false
        },
        {
            "code": "PPOD",
            "name": "Portal Demo Game",
            "type": "starter",
            "releaseDate": "1997-05-01",
            "onlineOnly": false
        },
        {
            "code": "PPP1",
            "name": "M20 Promo Packs",
            "type": "promo",
            "releaseDate": "2019-07-12",
            "block": "Core Set",
            "onlineOnly": false
        },
        {
            "code": "PPRO",
            "name": "Pro Tour Promos",
            "type": "promo",
            "releaseDate": "2007-02-09",
            "onlineOnly": false
        },
        {
            "code": "PPTK",
            "name": "Portal: Three Kingdoms Promos",
            "type": "promo",
            "releaseDate": "1999-07-01",
            "onlineOnly": false
        },
        {
            "code": "PR2",
            "name": "Magic Player Rewards 2002",
            "type": "promo",
            "releaseDate": "2002-01-01",
            "block": "Magic Player Rewards",
            "onlineOnly": false
        },
        {
            "code": "PRAV",
            "name": "Ravnica: City of Guilds Promos",
            "type": "promo",
            "releaseDate": "2005-10-07",
            "block": "Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PRED",
            "name": "Redemption Program",
            "type": "promo",
            "releaseDate": "1996-10-01",
            "onlineOnly": false
        },
        {
            "code": "PRES",
            "name": "Resale Promos",
            "type": "promo",
            "releaseDate": "2007-01-01",
            "onlineOnly": false
        },
        {
            "code": "PRIX",
            "name": "Rivals of Ixalan Promos",
            "type": "promo",
            "releaseDate": "2018-01-19",
            "block": "Ixalan",
            "onlineOnly": false
        },
        {
            "code": "PRM",
            "name": "Magic Online Promos",
            "type": "promo",
            "releaseDate": "2002-06-24",
            "onlineOnly": true
        },
        {
            "code": "PRNA",
            "name": "Ravnica Allegiance Promos",
            "type": "promo",
            "releaseDate": "2019-01-25",
            "block": "Guilds of Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PROE",
            "name": "Rise of the Eldrazi Promos",
            "type": "promo",
            "releaseDate": "2010-04-23",
            "block": "Zendikar",
            "onlineOnly": false
        },
        {
            "code": "PRTR",
            "name": "Return to Ravnica Promos",
            "type": "promo",
            "releaseDate": "2012-10-05",
            "block": "Return to Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PRW2",
            "name": "RNA Ravnica Weekend",
            "type": "promo",
            "releaseDate": "2019-02-16",
            "block": "Guilds of Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PRWK",
            "name": "GRN Ravnica Weekend",
            "type": "promo",
            "releaseDate": "2018-11-09",
            "block": "Guilds of Ravnica",
            "onlineOnly": false
        },
        {
            "code": "PS11",
            "name": "Salvat 2011",
            "type": "box",
            "releaseDate": "2011-01-01",
            "onlineOnly": false
        },
        {
            "code": "PS14",
            "name": "San Diego Comic-Con 2014",
            "type": "promo",
            "releaseDate": "2014-07-08",
            "onlineOnly": false
        },
        {
            "code": "PS15",
            "name": "San Diego Comic-Con 2015",
            "type": "promo",
            "releaseDate": "2015-07-09",
            "onlineOnly": false
        },
        {
            "code": "PS16",
            "name": "San Diego Comic-Con 2016",
            "type": "promo",
            "releaseDate": "2016-10-01",
            "onlineOnly": false
        },
        {
            "code": "PS17",
            "name": "San Diego Comic-Con 2017",
            "type": "promo",
            "releaseDate": "2017-07-20",
            "onlineOnly": false
        },
        {
            "code": "PS18",
            "name": "San Diego Comic-Con 2018",
            "type": "promo",
            "releaseDate": "2018-07-19",
            "onlineOnly": false
        },
        {
            "code": "PS19",
            "name": "San Diego Comic-Con 2019",
            "type": "promo",
            "releaseDate": "2019-07-18",
            "onlineOnly": false
        },
        {
            "code": "PSAL",
            "name": "Salvat 2005",
            "type": "box",
            "releaseDate": "2005-08-22",
            "onlineOnly": false
        },
        {
            "code": "PSCG",
            "name": "Scourge Promos",
            "type": "promo",
            "releaseDate": "2003-05-26",
            "block": "Onslaught",
            "onlineOnly": false
        },
        {
            "code": "PSDC",
            "name": "San Diego Comic-Con 2013",
            "type": "promo",
            "releaseDate": "2013-07-18",
            "onlineOnly": false
        },
        {
            "code": "PSDG",
            "name": "Sega Dreamcast Cards",
            "type": "box",
            "releaseDate": "2001-06-28",
            "onlineOnly": true
        },
        {
            "code": "PSHM",
            "name": "Shadowmoor Promos",
            "type": "promo",
            "releaseDate": "2008-05-02",
            "block": "Shadowmoor",
            "onlineOnly": false
        },
        {
            "code": "PSOI",
            "name": "Shadows over Innistrad Promos",
            "type": "promo",
            "releaseDate": "2016-04-08",
            "block": "Shadows over Innistrad",
            "onlineOnly": false
        },
        {
            "code": "PSOK",
            "name": "Saviors of Kamigawa Promos",
            "type": "promo",
            "releaseDate": "2005-06-03",
            "block": "Kamigawa",
            "onlineOnly": false
        },
        {
            "code": "PSOM",
            "name": "Scars of Mirrodin Promos",
            "type": "promo",
            "releaseDate": "2010-09-30",
            "block": "Scars of Mirrodin",
            "onlineOnly": false
        },
        {
            "code": "PSS1",
            "name": "BFZ Standard Series",
            "type": "promo",
            "releaseDate": "2015-10-02",
            "block": "Battle for Zendikar",
            "onlineOnly": false
        },
        {
            "code": "PSS2",
            "name": "XLN Standard Showdown",
            "type": "promo",
            "releaseDate": "2017-09-29",
            "block": "Ixalan",
            "onlineOnly": false
        },
        {
            "code": "PSS3",
            "name": "M19 Standard Showdown",
            "type": "promo",
            "releaseDate": "2018-07-13",
            "onlineOnly": false
        },
        {
            "code": "PSTH",
            "name": "Stronghold Promos",
            "type": "promo",
            "releaseDate": "1998-03-02",
            "block": "Tempest",
            "onlineOnly": false
        },
        {
            "code": "PSTX",
            "name": "Strixhaven: School of Mages Promos",
            "type": "promo",
            "releaseDate": "2021-04-23",
            "onlineOnly": false
        },
        {
            "code": "PSUM",
            "name": "Summer of Magic",
            "type": "promo",
            "releaseDate": "2007-07-21",
            "onlineOnly": false
        },
        {
            "code": "PSUS",
            "name": "Junior Super Series",
            "type": "promo",
            "releaseDate": "1999-12-01",
            "onlineOnly": false
        },
        {
            "code": "PTC",
            "name": "Pro Tour Collector Set",
            "type": "memorabilia",
            "releaseDate": "1996-05-01",
            "onlineOnly": false
        },
        {
            "code": "PTG",
            "name": "Ponies: The Galloping",
            "type": "funny",
            "releaseDate": "2019-10-22",
            "onlineOnly": false
        },
        {
            "code": "PTHB",
            "name": "Theros Beyond Death Promos",
            "type": "promo",
            "releaseDate": "2020-01-24",
            "onlineOnly": false
        },
        {
            "code": "PTHS",
            "name": "Theros Promos",
            "type": "promo",
            "releaseDate": "2013-09-21",
            "block": "Theros",
            "onlineOnly": false
        },
        {
            "code": "PTK",
            "name": "Portal Three Kingdoms",
            "type": "starter",
            "booster": [
                "rare",
                "uncommon",
                "uncommon",
                "common",
                "common",
                "common",
                "common",
                "common"
            ],
            "releaseDate": "1999-07-06",
            "onlineOnly": false
        },
        {
            "code": "PTKDF",
            "name": "Tarkir Dragonfury",
            "type": "promo",
            "releaseDate": "2015-04-03",
            "block": "Khans of Tarkir",
            "onlineOnly": false
        },
        {
            "code": "PTMP",
            "name": "Tempest Promos",
            "type": "promo",
            "releaseDate": "1997-10-14",
            "block": "Tempest",
            "onlineOnly": false
        },
        {
            "code": "PTOR",
            "name": "Torment Promos",
            "type": "promo",
            "releaseDate": "2002-02-04",
            "block": "Odyssey",
            "onlineOnly": false
        },
        {
            "code": "PTSP",
            "name": "Time Spiral Promos",
            "type": "promo",
            "releaseDate": "2006-10-06",
            "block": "Time Spiral",
            "onlineOnly": false
        },
        {
            "code": "PUDS",
            "name": "Urza's Destiny Promos",
            "type": "promo",
            "releaseDate": "1999-06-07",
            "block": "Urza",
            "onlineOnly": false
        },
        {
            "code": "PULG",
            "name": "Urza's Legacy Promos",
            "type": "promo",
            "releaseDate": "1999-02-15",
            "block": "Urza",
            "onlineOnly": false
        },
        {
            "code": "PUMA",
            "name": "Ultimate Box Topper",
            "type": "masterpiece",
            "releaseDate": "2018-12-07",
            "onlineOnly": false
        },
        {
            "code": "PUNH",
            "name": "Unhinged Promos",
            "type": "promo",
            "releaseDate": "2004-11-19",
            "onlineOnly": false
        }
    ]  

  // var nameArray =[]
  // sets.map((obj) => (
  //   nameArray.push(obj.name)
  // ))

  // console.log(nameArray)

  return setNames;
}

export default magicSets;
