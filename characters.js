const CHARACTERS=[
  {
    "name": "Monkey D. Luffy",
    "image": "luffy_v45.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "East Blue",
    "fruit": "Zoan",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 3000000000,
    "height": 1.74,
    "arc": "Romance Dawn"
  },
  {
    "name": "Roronoa Zoro",
    "image": "zoro.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 1111000000,
    "height": 1.81,
    "arc": "Romance Dawn"
  },
  {
    "name": "Nami",
    "image": "nami_v45.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 366000000,
    "height": 1.7,
    "arc": "Orange Town"
  },
  {
    "name": "Usopp",
    "image": "usopp.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 500000000,
    "height": 1.76,
    "arc": "Syrup Village"
  },
  {
    "name": "Sanji",
    "image": "sanji_v45.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1032000000,
    "height": 1.8,
    "arc": "Baratie"
  },
  {
    "name": "Tony Tony Chopper",
    "image": "chopper.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 1000,
    "height": 0.9,
    "arc": "Drum Island"
  },
  {
    "name": "Nico Robin",
    "image": "robin.png",
    "gender": "Feminino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 930000000,
    "height": 1.88,
    "arc": "Whisky Peak"
  },
  {
    "name": "Franky",
    "image": "franky_v45.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "South Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 394000000,
    "height": 2.4,
    "arc": "Water 7"
  },
  {
    "name": "Brook",
    "image": "brook.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 383000000,
    "height": 2.77,
    "arc": "Thriller Bark"
  },
  {
    "name": "Jinbe",
    "image": "jinbe_v45.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1100000000,
    "height": 3.01,
    "arc": "Impel Down"
  },
  {
    "name": "Trafalgar D. Water Law",
    "image": "law_v44.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Heart",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 3000000000,
    "height": 1.91,
    "arc": "Sabaody"
  },
  {
    "name": "Eustass Kid",
    "image": "kid.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Kid",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 3000000000,
    "height": 2.05,
    "arc": "Sabaody"
  },
  {
    "name": "Shanks",
    "image": "shanks.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Ruivo",
    "origin": "West Blue",
    "fruit": "Sem fruta",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 4048900000,
    "height": 1.99,
    "arc": "Romance Dawn"
  },
  {
    "name": "Marshall D. Teach",
    "image": "teach_v44.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "Grand Line",
    "fruit": "Logia / Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 3996000000,
    "height": 3.44,
    "arc": "Jaya"
  },
  {
    "name": "Marco",
    "image": "marco.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Branca",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1374000000,
    "height": 2.03,
    "arc": "Jaya"
  },
  {
    "name": "Kaido",
    "image": "kaido.png",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 4611100000,
    "height": 7.1,
    "arc": "Dressrosa"
  },
  {
    "name": "Charlotte Linlin",
    "image": "bigmom.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 4388000000,
    "height": 8.8,
    "arc": "Fish-Man Island",
    "aliases": [
      "Big Mom"
    ]
  },
  {
    "name": "Sakazuki",
    "image": "sakazuki_v46.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "North Blue",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 5000000000,
    "height": 3.06,
    "arc": "Enies Lobby",
    "aliases": [
      "Akainu"
    ]
  },
  {
    "name": "Borsalino",
    "image": "kizaru.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "North Blue",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 3000000000,
    "height": 3.02,
    "arc": "Sabaody",
    "aliases": [
      "Kizaru"
    ]
  },
  {
    "name": "Kuzan",
    "image": "kuzan_v44.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "South Blue",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.98,
    "arc": "Long Ring Long Land",
    "aliases": [
      "Aokiji"
    ]
  },
  {
    "name": "Boa Hancock",
    "image": "hancock_v412.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Kuja",
    "origin": "Calm Belt",
    "fruit": "Paramecia",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 1659000000,
    "height": 1.91,
    "arc": "Amazon Lily"
  },
  {
    "name": "Buggy",
    "image": "buggy.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 3189000000,
    "height": 1.92,
    "arc": "Orange Town"
  },
  {
    "name": "Donquixote Doflamingo",
    "image": "doflamingo.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "Red Line",
    "fruit": "Paramecia",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 340000000,
    "height": 3.05,
    "arc": "Jaya"
  },
  {
    "name": "Dracule Mihawk",
    "image": "mihawk.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "Desconhecido",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 3590000000,
    "height": 1.98,
    "arc": "Baratie"
  },
  {
    "name": "Gol D. Roger",
    "image": "roger.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Roger",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 5564800000,
    "height": 2.74,
    "arc": "Romance Dawn"
  },
  {
    "name": "Dorry",
    "image": "dorry.png",
    "gender": "Masculino",
    "affiliation": "Piratas Guerreiros Gigantes",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 1800000000,
    "height": 22.6,
    "arc": "Little Garden"
  },
  {
    "name": "Brogy",
    "image": "brogy.png",
    "gender": "Masculino",
    "affiliation": "Piratas Guerreiros Gigantes",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 1800000000,
    "height": 21.3,
    "arc": "Little Garden"
  },
  {
    "name": "Spandam",
    "image": "spandam.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.92,
    "arc": "Water 7"
  },
  {
    "name": "Rob Lucci",
    "image": "lucci.jpg",
    "gender": "Masculino",
    "affiliation": "CP0",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.12,
    "arc": "Water 7"
  },
  {
    "name": "Kaku",
    "image": "kaku.jpg",
    "gender": "Masculino",
    "affiliation": "CP0",
    "origin": "East Blue",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.93,
    "arc": "Water 7"
  },
  {
    "name": "Jabra",
    "image": "jabra.jpg",
    "gender": "Masculino",
    "affiliation": "CP0",
    "origin": "North Blue",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.12,
    "arc": "Enies Lobby"
  },
  {
    "name": "Blueno",
    "image": "blueno.jpg",
    "gender": "Masculino",
    "affiliation": "CP0",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.58,
    "arc": "Water 7"
  },
  {
    "name": "Kumadori",
    "image": "kumadori.jpg",
    "gender": "Masculino",
    "affiliation": "CP0",
    "origin": "South Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.18,
    "arc": "Enies Lobby"
  },
  {
    "name": "Fukuro",
    "image": "fukuro.jpg",
    "gender": "Masculino",
    "affiliation": "CP0",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.31,
    "arc": "Enies Lobby"
  },
  {
    "name": "Kalifa",
    "image": "kalifa.jpg",
    "gender": "Feminino",
    "affiliation": "CP0",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.85,
    "arc": "Water 7"
  },
  {
    "name": "Nero",
    "image": "nero.jpg",
    "gender": "Masculino",
    "affiliation": "CP9",
    "origin": "West Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.02,
    "arc": "Water 7"
  },
  {
    "name": "Trebol",
    "image": "trebol.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 99000000,
    "height": 3.49,
    "arc": "Dressrosa"
  },
  {
    "name": "Diamante",
    "image": "diamante.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 99000000,
    "height": 5.25,
    "arc": "Dressrosa"
  },
  {
    "name": "Pica",
    "image": "pica.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 99000000,
    "height": 4.7,
    "arc": "Dressrosa"
  },
  {
    "name": "Vergo",
    "image": "vergo_v47.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.47,
    "arc": "Punk Hazard"
  },
  {
    "name": "Donquixote Rosinante",
    "image": "corazon.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Red Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.93,
    "arc": "Dressrosa"
  },
  {
    "name": "Sugar",
    "image": "sugar.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.1,
    "arc": "Dressrosa"
  },
  {
    "name": "Giolla",
    "image": "giolla.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.21,
    "arc": "Dressrosa"
  },
  {
    "name": "Viola",
    "image": "viola.jpg",
    "gender": "Feminino",
    "affiliation": "Reino de Dressrosa",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 1.78,
    "arc": "Dressrosa"
  },
  {
    "name": "Lao G",
    "image": "laog.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 61000000,
    "height": 1.57,
    "arc": "Dressrosa"
  },
  {
    "name": "Senor Pink",
    "image": "senorpink.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 58000000,
    "height": 2.44,
    "arc": "Dressrosa"
  },
  {
    "name": "Machvise",
    "image": "machvise.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 11000000,
    "height": 4.4,
    "arc": "Dressrosa"
  },
  {
    "name": "Dellinger",
    "image": "dellinger.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 15000000,
    "height": 1.45,
    "arc": "Dressrosa"
  },
  {
    "name": "Gladius",
    "image": "gladius.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 31000000,
    "height": 2.6,
    "arc": "Dressrosa"
  },
  {
    "name": "Buffalo",
    "image": "buffalo.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 6.96,
    "arc": "Punk Hazard"
  },
  {
    "name": "Baby 5",
    "image": "baby5.jpg",
    "gender": "Feminino",
    "affiliation": "Família Happo",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.81,
    "arc": "Punk Hazard"
  },
  {
    "name": "Monet",
    "image": "monet.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Donquixote",
    "origin": "North Blue",
    "fruit": "Logia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.27,
    "arc": "Punk Hazard"
  },
  {
    "name": "Bellamy",
    "image": "bellamy.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 195000000,
    "height": 2.4,
    "arc": "Jaya"
  },
  {
    "name": "Kyuin",
    "image": "kyuin.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Donquixote",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.25,
    "arc": "Dressrosa"
  },
  {
    "name": "Bepo",
    "image": "bepo.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Heart",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 500,
    "height": 2.4,
    "arc": "Sabaody"
  },
  {
    "name": "Penguin",
    "image": "penguin.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Heart",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.0,
    "arc": "Sabaody"
  },
  {
    "name": "Shachi",
    "image": "shachi.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Heart",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.01,
    "arc": "Sabaody"
  },
  {
    "name": "Jean Bart",
    "image": "jeanbart.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Heart",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.2,
    "arc": "Sabaody"
  },
  {
    "name": "Jesus Burgess",
    "image": "burgess.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 20000000,
    "height": 3.55,
    "arc": "Jaya"
  },
  {
    "name": "Shiryu",
    "image": "shiryu.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.4,
    "arc": "Impel Down"
  },
  {
    "name": "Van Augur",
    "image": "vanaugur.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "East Blue",
    "fruit": "Paramecia",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 64000000,
    "height": 3.4,
    "arc": "Jaya"
  },
  {
    "name": "Avalo Pizarro",
    "image": "avalopizarro.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 5.05,
    "arc": "Impel Down"
  },
  {
    "name": "Laffitte",
    "image": "laffitte.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "West Blue",
    "fruit": "Zoan",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 42200000,
    "height": 3.4,
    "arc": "Jaya"
  },
  {
    "name": "Catarina Devon",
    "image": "catarinadevon.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "South Blue",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.61,
    "arc": "Impel Down"
  },
  {
    "name": "Sanjuan Wolf",
    "image": "sanjuanwolf.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 180.0,
    "arc": "Impel Down"
  },
  {
    "name": "Vasco Shot",
    "image": "vascoshot.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 5.73,
    "arc": "Impel Down"
  },
  {
    "name": "Doc Q",
    "image": "docq.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Negra",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 72000000,
    "height": 3.42,
    "arc": "Jaya"
  },
  {
    "name": "Cavendish",
    "image": "cavendish.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 330000000,
    "height": 2.08,
    "arc": "Dressrosa"
  },
  {
    "name": "Bartolomeo",
    "image": "bartolomeo.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "East Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 200000000,
    "height": 2.2,
    "arc": "Dressrosa"
  },
  {
    "name": "Sai",
    "image": "sai.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "West Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 210000000,
    "height": 2.42,
    "arc": "Dressrosa"
  },
  {
    "name": "Ideo",
    "image": "ideo.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.25,
    "arc": "Dressrosa"
  },
  {
    "name": "Leo",
    "image": "leo.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 0.23,
    "arc": "Dressrosa"
  },
  {
    "name": "Hajrudin",
    "image": "hajrudin.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 22.0,
    "arc": "Dressrosa"
  },
  {
    "name": "Orlumbus",
    "image": "orlumbus.jpg",
    "gender": "Masculino",
    "affiliation": "Grande Frota do Chapéu de Palha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 148000000,
    "height": 4.8,
    "arc": "Dressrosa"
  },
  {
    "name": "Crocodile",
    "image": "crocodile_v45.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "Grand Line",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1965000000,
    "height": 2.53,
    "arc": "Whisky Peak"
  },
  {
    "name": "Daz Bonez",
    "image": "dazbonez.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 75000000,
    "height": 2.12,
    "arc": "Whisky Peak"
  },
  {
    "name": "Galdino",
    "image": "galdino.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 24000000,
    "height": 1.79,
    "arc": "Little Garden"
  },
  {
    "name": "Alvida",
    "image": "alvida.jpg",
    "gender": "Feminino",
    "affiliation": "Cross Guild",
    "origin": "East Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 5000000,
    "height": 1.98,
    "arc": "Romance Dawn"
  },
  {
    "name": "Mohji",
    "image": "mohji.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.97,
    "arc": "Orange Town"
  },
  {
    "name": "Richie",
    "image": "richie.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.0,
    "arc": "Orange Town"
  },
  {
    "name": "Cabaji",
    "image": "cabaji.jpg",
    "gender": "Masculino",
    "affiliation": "Cross Guild",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.08,
    "arc": "Orange Town"
  },
  {
    "name": "Issho",
    "image": "fujitora.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.7,
    "arc": "Dressrosa"
  },
  {
    "name": "Aramaki",
    "image": "ryokugyu.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.08,
    "arc": "Reverie",
    "aliases": [
      "Ryokugyu",
      "Green Bull"
    ]
  },
  {
    "name": "Monkey D. Garp",
    "image": "garp.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 0,
    "height": 2.87,
    "arc": "Water 7"
  },
  {
    "name": "Tsuru",
    "image": "tsuru.jpg",
    "gender": "Feminino",
    "affiliation": "Marinha",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.04,
    "arc": "Jaya"
  },
  {
    "name": "Momonga",
    "image": "momonga.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.51,
    "arc": "Enies Lobby"
  },
  {
    "name": "Dalmatian",
    "image": "dalmatian.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.0,
    "arc": "Marineford"
  },
  {
    "name": "T Bone",
    "image": "tbone.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.0,
    "arc": "Water 7"
  },
  {
    "name": "Hina",
    "image": "hina.jpg",
    "gender": "Feminino",
    "affiliation": "Marinha",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.81,
    "arc": "Alabasta"
  },
  {
    "name": "Shu",
    "image": "shu.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.0,
    "arc": "Enies Lobby"
  },
  {
    "name": "Tashigi",
    "image": "tashigi.jpg",
    "gender": "Feminino",
    "affiliation": "Marinha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.7,
    "arc": "Loguetown"
  },
  {
    "name": "Nezumi",
    "image": "nezumi.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.82,
    "arc": "Arlong Park"
  },
  {
    "name": "Helmeppo",
    "image": "helmeppo.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.79,
    "arc": "Romance Dawn"
  },
  {
    "name": "Jango",
    "image": "jango.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 9000000,
    "height": 2.07,
    "arc": "Syrup Village"
  },
  {
    "name": "Sengoku",
    "image": "sengoku.jpg",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "South Blue",
    "fruit": "Zoan",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 0,
    "height": 2.78,
    "arc": "Jaya"
  },
  {
    "name": "X Drake",
    "image": "xdrake.jpg",
    "gender": "Masculino",
    "affiliation": "SWORD",
    "origin": "North Blue",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 222000000,
    "height": 2.33,
    "arc": "Sabaody"
  },
  {
    "name": "Jaguar D. Saul",
    "image": "saul.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "South Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 19.5,
    "arc": "Enies Lobby"
  },
  {
    "name": "Morgan",
    "image": "morgan.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.85,
    "arc": "Romance Dawn"
  },
  {
    "name": "Bell-mère",
    "image": "bellmere.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.86,
    "arc": "Arlong Park"
  },
  {
    "name": "Vegapunk",
    "image": "vegapunk.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.14,
    "arc": "Egghead"
  },
  {
    "name": "Sentomaru",
    "image": "sentomaru.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.79,
    "arc": "Sabaody"
  },
  {
    "name": "Caesar Clown",
    "image": "caesar.jpg",
    "gender": "Masculino",
    "affiliation": "NEO MADS",
    "origin": "Grand Line",
    "fruit": "Logia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 300000000,
    "height": 3.09,
    "arc": "Punk Hazard"
  },
  {
    "name": "Wapol",
    "image": "wapol.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Black Drum",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 100000000,
    "height": 2.07,
    "arc": "Drum Island"
  },
  {
    "name": "Arlong",
    "image": "arlong.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Arlong",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 20000000,
    "height": 2.63,
    "arc": "Arlong Park"
  },
  {
    "name": "Chew",
    "image": "chew.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Arlong",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 5500000,
    "height": 2.57,
    "arc": "Arlong Park"
  },
  {
    "name": "Kuroobi",
    "image": "kuroobi.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Arlong",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 9000000,
    "height": 2.52,
    "arc": "Arlong Park"
  },
  {
    "name": "Wadatsumi",
    "image": "wadatsumi.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Sol",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 80.0,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Vander Decken IX",
    "image": "vanderdecken.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Voadores",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.52,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Hody Jones",
    "image": "hodyjones.jpg",
    "gender": "Masculino",
    "affiliation": "Novos Piratas Homens-Peixe",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.31,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Hack",
    "image": "hack_v413.jpg",
    "gender": "Masculino",
    "affiliation": "Exército Revolucionário",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.8,
    "arc": "Dressrosa"
  },
  {
    "name": "Kawamatsu",
    "image": "kawamatsu.jpg",
    "gender": "Masculino",
    "affiliation": "Samurais de Wano",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.71,
    "arc": "Wano"
  },
  {
    "name": "Hatchan",
    "image": "hatchan.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 8000000,
    "height": 2.2,
    "arc": "Arlong Park"
  },
  {
    "name": "Jack",
    "image": "jack.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1000000000,
    "height": 8.3,
    "arc": "Zou"
  },
  {
    "name": "Sasaki",
    "image": "sasakifish.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 472000000,
    "height": 3.18,
    "arc": "Wano"
  },
  {
    "name": "Fisher Tiger",
    "image": "fishertiger.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Sol",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 230000000,
    "height": 5.2,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Neptune",
    "image": "neptune.jpg",
    "gender": "Masculino",
    "affiliation": "Reino Ryugu",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 12.2,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Shirahoshi",
    "image": "shirahoshi.jpg",
    "gender": "Feminino",
    "affiliation": "Reino Ryugu",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 11.87,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Kokoro",
    "image": "kokoro.jpg",
    "gender": "Feminino",
    "affiliation": "Water 7",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.68,
    "arc": "Water 7"
  },
  {
    "name": "Shyarly",
    "image": "shyarly.jpg",
    "gender": "Feminino",
    "affiliation": "Ilha dos Homens-Peixe",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 5.2,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Camie",
    "image": "camie.jpg",
    "gender": "Feminino",
    "affiliation": "Ilha dos Homens-Peixe",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.97,
    "arc": "Sabaody"
  },
  {
    "name": "Igaram",
    "image": "igaram.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Alabasta",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.18,
    "arc": "Whisky Peak"
  },
  {
    "name": "Miss Monday",
    "image": "missmonday.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.13,
    "arc": "Whisky Peak"
  },
  {
    "name": "Zala",
    "image": "missdoublefinger.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 35000000,
    "height": 1.87,
    "arc": "Alabasta"
  },
  {
    "name": "Bentham",
    "image": "mr2bonkurei.jpg",
    "gender": "Masculino",
    "affiliation": "Newkama Land",
    "origin": "East Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 32000000,
    "height": 2.38,
    "arc": "Alabasta"
  },
  {
    "name": "Miss Goldenweek",
    "image": "missgoldenweek.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 29000000,
    "height": 1.45,
    "arc": "Little Garden"
  },
  {
    "name": "Mr. 4",
    "image": "mr4.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 3200000,
    "height": 2.18,
    "arc": "Alabasta"
  },
  {
    "name": "Drophy",
    "image": "missmerrychristmas.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 14000000,
    "height": 1.56,
    "arc": "Alabasta"
  },
  {
    "name": "Gem",
    "image": "mr5.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 10000000,
    "height": 1.97,
    "arc": "Little Garden"
  },
  {
    "name": "Mikita",
    "image": "missvalentine.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 7500000,
    "height": 1.77,
    "arc": "Whisky Peak"
  },
  {
    "name": "Gecko Moria",
    "image": "geckomoria.jpg",
    "gender": "Masculino",
    "affiliation": "Thriller Bark Pirates",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 320000000,
    "height": 6.92,
    "arc": "Thriller Bark"
  },
  {
    "name": "Hogback",
    "image": "hogback.jpg",
    "gender": "Masculino",
    "affiliation": "Thriller Bark Pirates",
    "origin": "West Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.23,
    "arc": "Thriller Bark"
  },
  {
    "name": "Absalom",
    "image": "absalom.jpg",
    "gender": "Masculino",
    "affiliation": "Thriller Bark Pirates",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.95,
    "arc": "Thriller Bark"
  },
  {
    "name": "Perona",
    "image": "perona.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.6,
    "arc": "Thriller Bark"
  },
  {
    "name": "Ryuma",
    "image": "ryuma.jpg",
    "gender": "Masculino",
    "affiliation": "Thriller Bark Pirates",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.79,
    "arc": "Thriller Bark"
  },
  {
    "name": "Oars",
    "image": "oars.jpg",
    "gender": "Masculino",
    "affiliation": "Thriller Bark Pirates",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 67.0,
    "arc": "Thriller Bark"
  },
  {
    "name": "Charlotte Lola",
    "image": "charlottelola.jpg",
    "gender": "Feminino",
    "affiliation": "Rolling Pirates",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 24000000,
    "height": 2.15,
    "arc": "Thriller Bark"
  },
  {
    "name": "Bartholomew Kuma",
    "image": "kuma.jpg",
    "gender": "Masculino",
    "affiliation": "Exército Revolucionário",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 296000000,
    "height": 6.89,
    "arc": "Thriller Bark"
  },
  {
    "name": "Edward Weevil",
    "image": "weevil.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 480000000,
    "height": 6.8,
    "arc": "Dressrosa"
  },
  {
    "name": "Makino",
    "image": "makino.jpg",
    "gender": "Feminino",
    "affiliation": "Reino de Goa",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.66,
    "arc": "Romance Dawn"
  },
  {
    "name": "Zeff",
    "image": "zeff.jpg",
    "gender": "Masculino",
    "affiliation": "Baratie",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.89,
    "arc": "Baratie"
  },
  {
    "name": "Nojiko",
    "image": "nojiko.jpg",
    "gender": "Feminino",
    "affiliation": "Cocoyasi",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.7,
    "arc": "Arlong Park"
  },
  {
    "name": "Genzo",
    "image": "genzo.jpg",
    "gender": "Masculino",
    "affiliation": "Cocoyasi",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.73,
    "arc": "Arlong Park"
  },
  {
    "name": "Kuro",
    "image": "kuro.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Gato Preto",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 16000000,
    "height": 2.07,
    "arc": "Syrup Village"
  },
  {
    "name": "Don Krieg",
    "image": "krieg.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Krieg",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 17000000,
    "height": 2.43,
    "arc": "Baratie"
  },
  {
    "name": "Gin",
    "image": "gin.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Krieg",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 12000000,
    "height": 1.86,
    "arc": "Baratie"
  },
  {
    "name": "Monkey D. Dragon",
    "image": "dragon.jpg",
    "gender": "Masculino",
    "affiliation": "Exército Revolucionário",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.56,
    "arc": "Loguetown"
  },
  {
    "name": "Emporio Ivankov",
    "image": "ivankov.jpg",
    "gender": "Masculino",
    "affiliation": "Exército Revolucionário",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 4.49,
    "arc": "Impel Down"
  },
  {
    "name": "Koala",
    "image": "koala.jpg",
    "gender": "Feminino",
    "affiliation": "Exército Revolucionário",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.6,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Inazuma",
    "image": "inazuma.jpg",
    "gender": "Masculino",
    "affiliation": "Exército Revolucionário",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.28,
    "arc": "Impel Down"
  },
  {
    "name": "Dr. Kureha",
    "image": "kureha.jpg",
    "gender": "Feminino",
    "affiliation": "Reino de Sakura",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.88,
    "arc": "Drum Island"
  },
  {
    "name": "Dalton",
    "image": "dalton.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Sakura",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.18,
    "arc": "Drum Island"
  },
  {
    "name": "Dr. Hiriluk",
    "image": "hiriluk.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Drum",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.13,
    "arc": "Drum Island"
  },
  {
    "name": "Nefertari Vivi",
    "image": "vivi.jpg",
    "gender": "Feminino",
    "affiliation": "Reino de Alabasta",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.69,
    "arc": "Whisky Peak"
  },
  {
    "name": "Nefertari Cobra",
    "image": "cobra.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Alabasta",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.82,
    "arc": "Alabasta"
  },
  {
    "name": "Chaka",
    "image": "chaka.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Alabasta",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.13,
    "arc": "Alabasta"
  },
  {
    "name": "Pell",
    "image": "pell.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Alabasta",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.89,
    "arc": "Alabasta"
  },
  {
    "name": "Mont Blanc Cricket",
    "image": "cricket.jpg",
    "gender": "Masculino",
    "affiliation": "Aliança Saruyama",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 25000000,
    "height": 2.42,
    "arc": "Jaya"
  },
  {
    "name": "Kalgara",
    "image": "kalgara.jpg",
    "gender": "Masculino",
    "affiliation": "Shandia",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.22,
    "arc": "Skypiea"
  },
  {
    "name": "Gan Fall",
    "image": "ganfall.jpg",
    "gender": "Masculino",
    "affiliation": "Skypiea",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.8,
    "arc": "Skypiea"
  },
  {
    "name": "Enel",
    "image": "enel.jpg",
    "gender": "Masculino",
    "affiliation": "Sem afiliação",
    "origin": "Sky Island",
    "fruit": "Logia",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 2.66,
    "arc": "Skypiea"
  },
  {
    "name": "Ohm",
    "image": "ohm.png",
    "gender": "Masculino",
    "affiliation": "Sacerdotes de Enel",
    "origin": "Sky Island",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 1.89,
    "arc": "Skypiea"
  },
  {
    "name": "Satori",
    "image": "satori.png",
    "gender": "Masculino",
    "affiliation": "Sacerdotes de Enel",
    "origin": "Sky Island",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 1.79,
    "arc": "Skypiea"
  },
  {
    "name": "Shura",
    "image": "shura.jpg",
    "gender": "Masculino",
    "affiliation": "Sacerdotes de Enel",
    "origin": "Sky Island",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 1.91,
    "arc": "Skypiea"
  },
  {
    "name": "Gedatsu",
    "image": "gedatsu.jpg",
    "gender": "Masculino",
    "affiliation": "Sacerdotes de Enel",
    "origin": "Sky Island",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 2.2,
    "arc": "Skypiea"
  },
  {
    "name": "Wyper",
    "image": "wyper.jpg",
    "gender": "Masculino",
    "affiliation": "Shandia",
    "origin": "Sky Island",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.83,
    "arc": "Skypiea"
  },
  {
    "name": "Foxy",
    "image": "foxy.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Foxy",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 24000000,
    "height": 1.8,
    "arc": "Long Ring Long Land"
  },
  {
    "name": "Iceburg",
    "image": "iceburg.jpg",
    "gender": "Masculino",
    "affiliation": "Galley-La Company",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.99,
    "arc": "Water 7"
  },
  {
    "name": "Paulie",
    "image": "paulie.jpg",
    "gender": "Masculino",
    "affiliation": "Galley-La Company",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.95,
    "arc": "Water 7"
  },
  {
    "name": "Tom",
    "image": "tom.jpg",
    "gender": "Masculino",
    "affiliation": "Tom's Workers",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.96,
    "arc": "Water 7"
  },
  {
    "name": "Oimo",
    "image": "oimo.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Guerreiros Gigantes",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 16.0,
    "arc": "Enies Lobby"
  },
  {
    "name": "Kashii",
    "image": "kashii.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Guerreiros Gigantes",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 17.0,
    "arc": "Enies Lobby"
  },
  {
    "name": "Silvers Rayleigh",
    "image": "rayleigh.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Roger",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 0,
    "height": 1.88,
    "arc": "Sabaody"
  },
  {
    "name": "Kozuki Oden",
    "image": "oden.jpg",
    "gender": "Masculino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 0,
    "height": 3.82,
    "arc": "Wano"
  },
  {
    "name": "Kozuki Toki",
    "image": "toki.jpg",
    "gender": "Feminino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.9,
    "arc": "Wano"
  },
  {
    "name": "Kozuki Momonosuke",
    "image": "momonosuke.png",
    "gender": "Masculino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 2.95,
    "arc": "Punk Hazard"
  },
  {
    "name": "Capone Bege",
    "image": "bege.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Fire Tank",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 350000000,
    "height": 1.66,
    "arc": "Sabaody"
  },
  {
    "name": "Jewelry Bonney",
    "image": "bonney.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Bonney",
    "origin": "South Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 320000000,
    "height": 1.74,
    "arc": "Sabaody"
  },
  {
    "name": "Basil Hawkins",
    "image": "hawkins.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Hawkins",
    "origin": "North Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 320000000,
    "height": 2.1,
    "arc": "Sabaody"
  },
  {
    "name": "Scratchmen Apoo",
    "image": "apoo.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas On Air",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 350000000,
    "height": 2.56,
    "arc": "Sabaody"
  },
  {
    "name": "Killer",
    "image": "killer.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Kid",
    "origin": "South Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 200000000,
    "height": 1.95,
    "arc": "Sabaody"
  },
  {
    "name": "Urouge",
    "image": "urouge.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Monge Caído",
    "origin": "Sky Island",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 108000000,
    "height": 3.88,
    "arc": "Sabaody"
  },
  {
    "name": "Hannyabal",
    "image": "hannyabal.jpg",
    "gender": "Masculino",
    "affiliation": "Impel Down",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.09,
    "arc": "Impel Down"
  },
  {
    "name": "Magellan",
    "image": "magellan.jpg",
    "gender": "Masculino",
    "affiliation": "Impel Down",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 4.91,
    "arc": "Impel Down"
  },
  {
    "name": "Edward Newgate",
    "image": "whitebeard.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Branca",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 5046000000,
    "height": 6.66,
    "arc": "Marineford"
  },
  {
    "name": "Portgas D. Ace",
    "image": "ace.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Branca",
    "origin": "South Blue",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Armamento",
      "Rei"
    ],
    "bounty": 550000000,
    "height": 1.85,
    "arc": "Marineford"
  },
  {
    "name": "Jozu",
    "image": "jozu.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Branca",
    "origin": "West Blue",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 5.03,
    "arc": "Marineford"
  },
  {
    "name": "Vista",
    "image": "vista.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Branca",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.28,
    "arc": "Marineford"
  },
  {
    "name": "Izo",
    "image": "izo.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas do Barba Branca",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 510000000,
    "height": 1.92,
    "arc": "Marineford"
  },
  {
    "name": "Little Oars Jr.",
    "image": "littleoarsjr.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Little",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 550000000,
    "height": 60.0,
    "arc": "Marineford"
  },
  {
    "name": "Caribou",
    "image": "caribou.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Caribou",
    "origin": "North Blue",
    "fruit": "Logia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 210000000,
    "height": 2.28,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Kyros",
    "image": "kyros.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Dressrosa",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.98,
    "arc": "Dressrosa"
  },
  {
    "name": "Denjiro",
    "image": "denjiro.jpg",
    "gender": "Masculino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.06,
    "arc": "Wano"
  },
  {
    "name": "Kikunojo",
    "image": "kikunojo.jpg",
    "gender": "Feminino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.87,
    "arc": "Wano"
  },
  {
    "name": "Raizo",
    "image": "raizo.jpg",
    "gender": "Masculino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.11,
    "arc": "Zou"
  },
  {
    "name": "Inuarashi",
    "image": "inuarashi.png",
    "gender": "Masculino",
    "affiliation": "Mokomo Dukedom",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 5.11,
    "arc": "Zou"
  },
  {
    "name": "Nekomamushi",
    "image": "nekomamushi.png",
    "gender": "Masculino",
    "affiliation": "Mokomo Dukedom",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 5.22,
    "arc": "Zou"
  },
  {
    "name": "Ashura Doji",
    "image": "ashuradoji.png",
    "gender": "Masculino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 5.44,
    "arc": "Wano"
  },
  {
    "name": "Kanjuro",
    "image": "kanjuro.png",
    "gender": "Masculino",
    "affiliation": "Família Kurozumi",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 3.47,
    "arc": "Dressrosa"
  },
  {
    "name": "Yamato",
    "image": "yamato.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 0,
    "height": 2.63,
    "arc": "Wano"
  },
  {
    "name": "Sabo",
    "image": "sabo.jpg",
    "gender": "Masculino",
    "affiliation": "Exército Revolucionário",
    "origin": "East Blue",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 602000000,
    "height": 1.87,
    "arc": "Dressrosa"
  },
  {
    "name": "Carrot",
    "image": "carrot.jpg",
    "gender": "Feminino",
    "affiliation": "Mokomo Dukedom",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.61,
    "arc": "Zou"
  },
  {
    "name": "Wanda",
    "image": "wanda.jpg",
    "gender": "Feminino",
    "affiliation": "Mokomo Dukedom",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.81,
    "arc": "Zou"
  },
  {
    "name": "Pekoms",
    "image": "pekoms.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 330000000,
    "height": 2.32,
    "arc": "Fish-Man Island"
  },
  {
    "name": "Pedro",
    "image": "pedro.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas Nox",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 382000000,
    "height": 2.33,
    "arc": "Zou"
  },
  {
    "name": "Rebecca",
    "image": "rebecca.jpg",
    "gender": "Feminino",
    "affiliation": "Reino de Dressrosa",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 1.71,
    "arc": "Dressrosa"
  },
  {
    "name": "Mont Blanc Noland",
    "image": "noland.jpg",
    "gender": "Masculino",
    "affiliation": "Reino de Lvneel",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.2,
    "arc": "Skypiea"
  },
  {
    "name": "Duval",
    "image": "duval.jpg",
    "gender": "Masculino",
    "affiliation": "Rosy Life Riders",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 4.7,
    "arc": "Sabaody"
  },
  {
    "name": "Pappag",
    "image": "pappag.jpg",
    "gender": "Masculino",
    "affiliation": "Criminal",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 0.5,
    "arc": "Sabaody"
  },
  {
    "name": "Saint Marcus Mars",
    "image": "mars.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Rei"
    ],
    "bounty": 0,
    "height": 0,
    "arc": "Egghead"
  },
  {
    "name": "Saint Topman Warcury",
    "image": "warcury.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Rei"
    ],
    "bounty": 0,
    "height": 0,
    "arc": "Egghead"
  },
  {
    "name": "Saint Ethanbaron V. Nusjuro",
    "image": "nusjuro.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 0,
    "height": 0,
    "arc": "Egghead"
  },
  {
    "name": "Saint Shepherd Ju Peter",
    "image": "jupeter.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 0,
    "arc": "Egghead"
  },
  {
    "name": "Saint Jaygarcia Saturn",
    "image": "saturn.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Rei"
    ],
    "bounty": 0,
    "height": 0,
    "arc": "Egghead"
  },
  {
    "name": "Figarland Garling",
    "image": "garling.jpg",
    "gender": "Masculino",
    "affiliation": "Governo Mundial",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 0,
    "arc": "Egghead"
  },
  {
    "name": "Kurozumi Orochi",
    "image": "orochi.jpg",
    "gender": "Masculino",
    "affiliation": "Família Kurozumi",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.5,
    "arc": "Wano"
  },
  {
    "name": "Kurozumi Tama",
    "image": "otama.jpg",
    "gender": "Feminino",
    "affiliation": "País de Wano",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.08,
    "arc": "Wano"
  },
  {
    "name": "Hyogoro",
    "image": "hyogoro.png",
    "gender": "Masculino",
    "affiliation": "Yakuza de Wano",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.0,
    "arc": "Wano"
  },
  {
    "name": "King",
    "image": "king.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1390000000,
    "height": 6.13,
    "arc": "Wano"
  },
  {
    "name": "Queen",
    "image": "queen.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 1320000000,
    "height": 6.12,
    "arc": "Wano"
  },
  {
    "name": "Who's-Who",
    "image": "whoswho.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "North Blue",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 546000000,
    "height": 3.36,
    "arc": "Wano"
  },
  {
    "name": "Black Maria",
    "image": "blackmaria.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 480000000,
    "height": 8.2,
    "arc": "Wano"
  },
  {
    "name": "Page One",
    "image": "pageone.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 290000000,
    "height": 1.71,
    "arc": "Wano"
  },
  {
    "name": "Ulti",
    "image": "ulti.png",
    "gender": "Feminino",
    "affiliation": "Piratas das Feras",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 400000000,
    "height": 1.73,
    "arc": "Wano"
  },
  {
    "name": "Kozuki Hiyori",
    "image": "hiyori.png",
    "gender": "Feminino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.7,
    "arc": "Wano"
  },
  {
    "name": "Charlotte Perospero",
    "image": "perospero.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 700000000,
    "height": 3.33,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Katakuri",
    "image": "katakuri.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "3 tipos",
    "haki_types": [
      "Observação",
      "Armamento",
      "Rei"
    ],
    "bounty": 1057000000,
    "height": 5.09,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Daifuku",
    "image": "daifuku.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 300000000,
    "height": 4.89,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Oven",
    "image": "oven.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 300000000,
    "height": 4.92,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Cracker",
    "image": "cracker.png",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 860000000,
    "height": 3.07,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Brûlée",
    "image": "brulee.png",
    "gender": "Feminino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.5,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Smoothie",
    "image": "smoothie.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 932000000,
    "height": 4.64,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Chiffon",
    "image": "chiffon.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas Fire Tank",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.15,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Charlotte Pudding",
    "image": "pudding.jpg",
    "gender": "Feminino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.66,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Vinsmoke Judge",
    "image": "judge.jpg",
    "gender": "Masculino",
    "affiliation": "Germa 66",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 2.72,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Vinsmoke Reiju",
    "image": "reiju.jpg",
    "gender": "Feminino",
    "affiliation": "Germa 66",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.73,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Vinsmoke Ichiji",
    "image": "ichiji.jpg",
    "gender": "Masculino",
    "affiliation": "Germa 66",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.86,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Vinsmoke Niji",
    "image": "niji.jpg",
    "gender": "Masculino",
    "affiliation": "Germa 66",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.85,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Vinsmoke Yonji",
    "image": "yonji.jpg",
    "gender": "Masculino",
    "affiliation": "Germa 66",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.94,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Barão Tamago",
    "image": "tamago.jpg",
    "gender": "Masculino",
    "affiliation": "Piratas da Big Mom",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 429000000,
    "height": 3.01,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Stussy",
    "image": "stussy.jpg",
    "gender": "Feminino",
    "affiliation": "Sem afiliação",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 1.79,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Big News Morgans",
    "image": "morgans.jpg",
    "gender": "Masculino",
    "affiliation": "World Economy News Paper",
    "origin": "Grand Line",
    "fruit": "Zoan",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 3.05,
    "arc": "Whole Cake Island"
  },
  {
    "name": "Pandaman",
    "image": "pandaman.webp",
    "gender": "Masculino",
    "affiliation": "Desconhecida",
    "origin": "Desconhecida",
    "fruit": "Sem fruta",
    "haki": "Desconhecido",
    "haki_types": [],
    "bounty": 0,
    "height": 0,
    "arc": "Desconhecido",
    "daily": false
  },
  {
    "name": "Smoker",
    "image": "smoker.png",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "Grand Line",
    "fruit": "Logia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 500000000,
    "height": 2.09,
    "arc": "Loguetown"
  },
  {
    "name": "Koby",
    "image": "koby.png",
    "gender": "Masculino",
    "affiliation": "Marinha",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 500000000,
    "height": 1.67,
    "arc": "Romance Dawn"
  },
  {
    "name": "Kin'emon",
    "image": "kinemon.png",
    "gender": "Masculino",
    "affiliation": "Clã Kozuki",
    "origin": "Grand Line",
    "fruit": "Paramecia",
    "haki": "2 tipos",
    "haki_types": [
      "Observação",
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.95,
    "arc": "Punk Hazard"
  },
  {
    "name": "Crocus",
    "image": "crocus.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Roger",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 2.03,
    "arc": "Reverse Mountain"
  },
  {
    "name": "Karoo",
    "image": "karoo.png",
    "gender": "Masculino",
    "affiliation": "Reino de Alabasta",
    "origin": "Grand Line",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.5,
    "arc": "Whisky Peak"
  },
  {
    "name": "Benn Beckman",
    "image": "bennbeckman.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Ruivo",
    "origin": "North Blue",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.06,
    "arc": "Romance Dawn"
  },
  {
    "name": "Yasopp",
    "image": "yasopp.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Ruivo",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Observação"
    ],
    "bounty": 0,
    "height": 1.83,
    "arc": "Romance Dawn"
  },
  {
    "name": "Lucky Roux",
    "image": "luckyroux.png",
    "gender": "Masculino",
    "affiliation": "Piratas do Ruivo",
    "origin": "South Blue",
    "fruit": "Sem fruta",
    "haki": "1 tipo",
    "haki_types": [
      "Armamento"
    ],
    "bounty": 0,
    "height": 2.41,
    "arc": "Romance Dawn"
  },
  {
    "name": "Kuina",
    "image": "kuina.png",
    "gender": "Feminino",
    "affiliation": "Dojo Isshin",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.5,
    "arc": "Romance Dawn"
  },
  {
    "name": "Kaya",
    "image": "kaya.png",
    "gender": "Feminino",
    "affiliation": "Vila Syrup",
    "origin": "East Blue",
    "fruit": "Sem fruta",
    "haki": "Nenhum",
    "haki_types": [],
    "bounty": 0,
    "height": 1.69,
    "arc": "Syrup Village"
  }
];
const ARC_ORDER=["Romance Dawn", "Orange Town", "Syrup Village", "Baratie", "Arlong Park", "Loguetown", "Reverse Mountain", "Whisky Peak", "Little Garden", "Drum Island", "Alabasta", "Jaya", "Skypiea", "Long Ring Long Land", "Water 7", "Enies Lobby", "Thriller Bark", "Sabaody", "Amazon Lily", "Impel Down", "Marineford", "Fish-Man Island", "Punk Hazard", "Dressrosa", "Zou", "Whole Cake Island", "Reverie", "Wano", "Egghead"];