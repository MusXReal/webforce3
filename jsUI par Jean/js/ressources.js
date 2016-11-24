 var villes = [
	"Agen",
	"Ajaccio",
	"Albenga",
	"Albert",
	"Amsterdam",
	"Andora",
	"Angers",
	"Angoulême",
	"Annecy",
	"Anvers",
	"Arnhem",
	"Aurigny",
	"Aurillac",
	"Avignon",
	"Avord",
	"Baden-Baden",
	"Bâle-Mulhouse",
	"Barcelone",
	"Barkston Heath",
	"Bastia",
	"Beauvais",
	"Beauvechain",
	"Benson",
	"Bergame",
	"Bergerac",
	"Berne",
	"Béziers",
	"Biarritz",
	"Bilbao",
	"Birmingham",
	"Bordeaux",
	"Bornemouth",
	"Boscombe Down",
	"Brest",
	"Brighton",
	"Bristol",
	"Brive-la-Gaillarde",
	"Brize Norton",
	"Bruxelles",
	"Büchel",
	"Bückeburg",
	"Burgos",
	"Butgenbach",
	"Caen",
	"Calvi",
	"Cambridge",
	"Cannes",
	"Carcassonne",
	"Cardiff",
	"Cassel",
	"Cazaux",
	"Châlons-en-Champagne",
	"Chambery / Aix-Les-Bains",
	"Charleroi",
	"Châteaudun",
	"Châteauroux",
	"Cherbourg",
	"Chièvres",
	"Clermont-Ferrand",
	"Cognac",
	"Colerne",
	"Colmar",
	"Cologne",
	"Coni",
	"Coventry",
	"Coxyde",
	"Cranfield",
	"Creil",
	"Dax",
	"Deauville",
	"Deux-Ponts",
	"Diepholz",
	"Diest",
	"Dijon",
	"Dinard",
	"Dole",
	"Dornbirn",
	"Dortmund",
	"Düsseldorf",
	"Eindhoven",
	"Évreux",
	"Exeter",
	"Fairford",
	"Farnborough",
	"Figari",
	"Florennes",
	"Francfort-sur-le-Main",
	"Friedrichshafen",
	"Fritzlar",
	"Geilenkirchen",
	"Gênes",
	"Genève",
	"Gérone",
	"Gilze-Rijen",
	"Gloucester",
	"Granges",
	"Grenoble",
	"Guernesey",
	"Hahn",
	"Hanovre",
	"Holbeach",
	"Huesca",
	"Istres",
	"Jersey",
	"La Chaux-de-Fonds",
	"Lahr",
	"Lakenheath",
	"Landivisiau",
	"Lannion",
	"Lanvéoc",
	"La Rochelle",
	"La Roche-sur-Yon",
	"Laupheim",
	"Laval",
	"Le Havre",
	"Le Helder",
	"Le Luc",
	"Le Mans",
	"Le Touquet",
	"Liège",
	"Lille",
	"Limoges",
	"Lleida",
	"Logroño",
	"Londres",
	"Londres Biggin Hill",
	"Londres-Gatwick",
	"Londres-Heathrow",
	"Londres-Luton",
	"Londres-Southend",
	"Londres-Stansted",
	"Lorient",
	"Lugano",
	"Luxembourg",
	"Luxeuil-les-Bains",
	"Lydd",
	"Lyon",
	"Lyon / Saint Exupéry",
	"Maastricht Aix-la-Chapelle",
	"Mannheim",
	"Marham",
	"Marseille",
	"Melun",
	"Meppen",
	"Metz-Nancy-Lorraine",
	"Middle Wallop",
	"Milan",
	"Milan",
	"Mildenhall",
	"Mönchengladbach",
	"Mont-De-Marsan",
	"Montpellier",
	"Morlaix",
	"Münster-Osnabrück",
	"Nancy",
	"Nancy",
	"Nantes",
	"Nevers",
	"Newquay Cornwall",
	"Nice",
	"Niederstetten",
	"Nîmes",
	"Northolt",
	"Nörvenich",
	"Norwich",
	"Nottingham Leicester Derby",
	"Novare",
	"Odiham",
	"Orange",
	"Orléans",
	"Ostende",
	"Paderborn-Lippstadt",
	"Pampelune",
	"Paris",
	"Paris-Charles De Gaulle",
	"Paris-Orly",
	"Passo dei Giovi",
	"Passo della Cisa",
	"Pau",
	"Payerne",
	"Peer",
	"Pembrey",
	"Perpignan",
	"Pian Rosa",
	"Plaisance",
	"Poitiers",
	"Pontoise",
	"Prato Nevoso",
	"Quimper",
	"Ramstein",
	"Reims",
	"Rennes",
	"Reus",
	"Rheine",
	"Rodez",
	"Romorantin",
	"Rotterdam",
	"Rouen",
	"Sabadell",
	"Saint-Brieuc",
	"Saint-Dizier",
	"Saint-Etienne",
	"Saint-Gall",
	"Saint-Moritz",
	"Saint-Nazaire",
	"Saint-Sébastien",
	"Saint-Yan",
	"Salon-de-Provence",
	"Santander",
	"Saragosse",
	"Sarrebruck",
	"Sarzana",
	"Shawbury",
	"Siegen",
	"Sion",
	"Solenzara",
	"Southampton",
	"Spangdahlem",
	"St Athan",
	"Strasbourg",
	"Stuttgart",
	"Tarbes Lourdes",
	"Toulon",
	"Toulouse",
	"Tours",
	"Toussus-le-Noble",
	"Troyes",
	"Turin",
	"Turin",
	"Uden",
	"Valladolid",
	"Vannes",
	"Villacoublay",
	"Vitoria",
	"Wattisham",
	"Weeze",
	"Wiesbaden",
	"Wittering",
	"Woensdrecht",
	"Wunstorf",
	"Wyton",
	"Yeovilton",
	"Zurich",
	"Akeno",
	"Akita",
	"Aomori",
	"Asahikawa",
	"Asahikawa Air Base",
	"Chitose",
	"Chofu",
	"Fukuoka",
	"Fukushima",
	"Gifu",
	"Hachinohe",
	"Hagi",
	"Hakodate",
	"Hanamaki",
	"Hiroshima",
	"Hofu",
	"Hyakuri",
	"Iwakuni",
	"Izumo",
	"Kagoshima",
	"Kanoya",
	"Kansai",
	"Kasumigaura",
	"Kasuminome",
	"Kisarazu",
	"Kitakyushu",
	"Kochi",
	"Komatsu",
	"Komatsujima",
	"Kumamoto",
	"Kushiro",
	"Matsumoto",
	"Matsuyama",
	"Memanbetsu",
	"Metabaru",
	"Miho-Yonago",
	"Miyazaki",
	"Monbetsu",
	"Mutsu",
	"Nagasaki",
	"Nagoya",
	"Nakashibetsu",
	"Niigata",
	"Nii Ōshima",
	"Obihiro",
	"Odate-Noshiro",
	"Oita",
	"Okayama",
	"Osaka",
	"Ozuki",
	"Saga",
	"Sapporo",
	"Sendai",
	"Séoul-Incheon",
	"Shimofusa",
	"Shirahama",
	"Shizuhama",
	"Shonai",
	"Tachikawa",
	"Tajima",
	"Takamatsu",
	"Takigahara",
	"Tanegashima",
	"Tateyama",
	"Tokachi-Obihiro",
	"Tokushima",
	"Tokyo-Haneda",
	"Tokyo Heliport",
	"Tokyo Narita",
	"Tottori",
	"Toyama",
	"Tsushima",
	"Utsunomiya",
	"Vladivostok",
	"Wakkanai",
	"Yamagata",
	"Yamaguchi Ube",
	"Yao",
	"Yokota",
	"Zama"
];