const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [
				{
					code: "700",
					name: "NUTELLA 25GR",
					price: "1.50",
					type: "SNACKS"
				},
				{
					code: "3000",
					name: "COMBO EXPLOSIVO",
					price: "20.00",
					type: "PROMOCION"
				},
				{
					code: "3001",
					name: "CHOCOLATE MILKA DE OREO",
					price: "3.00",
					type: "SNACKS"
				},
				{
					code: "3003",
					name: "MEZCLA PARA TORTA BETTY CROCKER SUPER MOIST WHITE",
					price: "2.50",
					type: "PROMOCION"
				},
				{
					code: "3004",
					name: "MEZCLA PARA TORTA BETTY CROCKER CHOCOLATE FUDGE",
					price: "2.50",
					type: "PROMOCION"
				},
				{
					code: "1",
					name: "COTUFAS ACTII CAJA DE 30 SOBRES",
					price: "19.00",
					type: "SNACKS"
				},
				{
					code: "448",
					name: "DESODORANTE AXE MEN DARK TEMPTATION 150 ML",
					price: "4.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "133",
					name: "SHAMPOO ALBERTO VO5 EXTRA BODY 370ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1010",
					name: "QUESO KRAFT FACILISTA 24 SLICES",
					price: "4.00",
					type: "ALIMENTOS"
				},
				{
					code: "3005",
					name: "CHOCOLATE MILKA CHIPS AHOYS",
					price: "3.00",
					type: "SNACKS"
				},
				{
					code: "3006",
					name: "CHOCOLATE TWIX",
					price: "1.00",
					type: "SNACKS"
				},
				{
					code: "3010",
					name: "GALLETA CHIPS AHOY",
					price: "1.00",
					type: "SNACKS"
				},
				{
					code: "603",
					name: "CEREAL KELLOGGS  2 BAGS CORN FLAKES 1.2 KG",
					price: "14.00",
					type: "ALIMENTOS"
				},
				{
					code: "3012",
					name: "NUTELLA 750",
					price: "8.00",
					type: "SNACKS"
				},
				{
					code: "49",
					name: "GALLETA OREO ORIGINAL 30X6 UNIDADES",
					price: "16.00",
					type: "SNACKS"
				},
				{
					code: "279",
					name: "JABON DE BAÑO DOVE GO FRESH 135 GR",
					price: "1.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "470",
					name: "PAQUETE DE PILAS PANASONIC AA",
					price: "2.00",
					type: "PROMOCION"
				},
				{
					code: "406",
					name: "DESODORANTE NIVEA SPRAY WOMEN WHITENING POWDER 150ML",
					price: "4.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "89",
					name: "AFEITADORA ULTRAMAX ECLIPSE MEN 3 DE 4 REPUESTO",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "3002",
					name: "IMITACION DE CANGREJO SURIMI STICKS 454 GR",
					price: "5.00",
					type: "ALIMENTOS"
				},
				{
					code: "37",
					name: "COFFE MATE ORIGINAL 1.5 KG",
					price: "11.00",
					type: "ALIMENTOS"
				},
				{
					code: "1076",
					name: "QUESO FUNDIDO MEMBERS MARK CHEDDAR ORIGINAL 3.01 KG",
					price: "15.50",
					type: "ALIMENTOS"
				},
				{
					code: "1497",
					name: "ACEITE EN SPRAY CANOLA KIRLAND TWO PACK 794 GR",
					price: "7.50",
					type: "ALIMENTOS"
				},
				{
					code: "791",
					name: "PAPAS PRINGLESde PIZZA GRANDES  158 GR",
					price: "2.00",
					type: "SNACKS"
				},
				{
					code: "714",
					name: "PAPAS PRINGLES PEQUEÑAS SABOR CEBOLLA 40 GR ",
					price: "0.75",
					type: "SNACKS"
				},
				{
					code: "1007",
					name: "PAPAS PRINGLES PEQUEÑAS SABOR A PIZZA 40 GR",
					price: "0.75",
					type: "SNACKS"
				},
				{
					code: "308",
					name: "MANI EN LATA COCKTAIL PEANUTS 454GR",
					price: "5.50",
					type: "SNACKS"
				},
				{
					code: "74",
					name: "MANTEQUILLA DE MANI PEANUT DELIGHT CREAMY",
					price: "3.50",
					type: "SNACKS"
				},
				{
					code: "3",
					name: "HEINZ PICNIC 4PACK (PEPINILLO, MOSTAZA, KETCHUP)",
					price: "13.00",
					type: "ALIMENTOS"
				},
				{
					code: "981",
					name: "CLOROX BLEACH 3.57 LTS",
					price: "9.00",
					type: "LIMPIEZA"
				},
				{
					code: "42",
					name: "MANTEQUILLA DE MANI PEANUT DELIGHT CRUNCHY",
					price: "3.50",
					type: "SNACKS"
				},
				{
					code: "73",
					name: "MANTEQUILLA DE MANI PEANUT DELIGHT NATURAL CREAMY",
					price: "3.50",
					type: "Sin Categoria"
				},
				{
					code: "477",
					name: "CHOCOLATE M&M DANDIES PEANUT 1.76 KG",
					price: "18.00",
					type: "SNACKS"
				},
				{
					code: "1558",
					name: "ACEITE DE OLIVA EXTRA VIRGEN BADIA 6 X 500 ML",
					price: "49.00",
					type: "ALIMENTOS"
				},
				{
					code: "407",
					name: "ACEITE DE OLIVA EXTRA VIRGEN CARLINI 500ML",
					price: "7.50",
					type: "ALIMENTOS"
				},
				{
					code: "184",
					name: "ACEITE DE OLIVA KIRKLAND EXTRA VIRGEN ESPAÑOL 3 L",
					price: "27.00",
					type: "ALIMENTOS"
				},
				{
					code: "315",
					name: "ACEITUNA CON AJO SPECIALLY 198GR",
					price: "7.00",
					type: "ALIMENTOS"
				},
				{
					code: "314",
					name: "ACEITUNA CON JALAPEÑO SPECIALLY 198GR",
					price: "7.00",
					type: "ALIMENTOS"
				},
				{
					code: "316",
					name: "ACEITUNA CON QUESO AZUL SPECIALLY 198GR",
					price: "7.00",
					type: "ALIMENTOS"
				},
				{
					code: "313",
					name: "ACEITUNA KALAMATA SPECIALLY 170GR",
					price: "5.00",
					type: "ALIMENTOS"
				},
				{
					code: "317",
					name: "ACEITUNA RELLENA PIMENTO TUSCANGARDEN 163GR",
					price: "2.50",
					type: "ALIMENTOS"
				},
				{
					code: "564",
					name: "ACONDICIONADOR ALBERTO VO5 BLACKBERRY SAGE TEA 6 X 370 ML",
					price: "13.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "899",
					name: "ACONDICIONADOR ALBERTO VO5 SULFATE FREE STRENGTHENING 6 X 370ML",
					price: "13.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "487",
					name: "AFEITADORA ULTRA MAX MEN 3 PACK",
					price: "2.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "488",
					name: "AFEITADORA ULTRA MAX WOMEN 3 PACK",
					price: "2.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "876",
					name: "AFEITADORA XTRA CARE WOMEN 4 PACK",
					price: "2.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1113",
					name: "AGUA NATURAL FIJI 12 X 1 LTS",
					price: "40.00",
					type: "ALIMENTOS"
				},
				{
					code: "23",
					name: "ALCACHOFAS EN AGUA MEMBERS MARK 950 GR",
					price: "13.50",
					type: "ALIMENTOS"
				},
				{
					code: "754",
					name: "ALGODON LIMPIADOR FACIL XTRA CARE 80 CT",
					price: "2.00",
					type: "PROMOCION"
				},
				{
					code: "1403",
					name: "ALMENDRAS BLUE DIAMOND NATURAL 1.1 KG",
					price: "27.00",
					type: "SNACKS"
				},
				{
					code: "968",
					name: "ALMENDRAS KIRLAND ENTERAS 1.36 KG",
					price: "25.00",
					type: "SNACKS"
				},
				{
					code: "810",
					name: "ALMENDRAS MEMBERS MARK ROASTED SEA SALT 1.13 KG",
					price: "22.50",
					type: "ALIMENTOS"
				},
				{
					code: "653",
					name: "ARROZ BASMATI  9.07 KG",
					price: "39.00",
					type: "ALIMENTOS"
				},
				{
					code: "551",
					name: "ATUN BUMBLE BEE 48 x 143 GR",
					price: "80.00",
					type: "ALIMENTOS"
				},
				{
					code: "474",
					name: "CEREAL KELLOGGS  2 BAGS FROOT LOOPS 1.24 KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "557",
					name: "CEREAL KELLOGGS  2 BAGS FROSTED FLAKES 1.56 KG",
					price: "14.50",
					type: "ALIMENTOS"
				},
				{
					code: "1308",
					name: "CEREAL KELLOGGS 2 BAGS RAISIN BRAN CRUNCH ORIGINAL 1.19 KG",
					price: "15.50",
					type: "SNACKS"
				},
				{
					code: "1312",
					name: "CEREAL KELLOGGS 2 BAGS RICE KRISPIES 1.19 KG",
					price: "17.00",
					type: "ALIMENTOS"
				},
				{
					code: "1327",
					name: "CEREAL KELLOGGS 3 BAGS FROOT LOOPS - CORN POPS - APPLE JACK 1.47 KG",
					price: "21.50",
					type: "SNACKS"
				},
				{
					code: "92",
					name: "CHOCOLATE 3MUSKETEERS 36 CT",
					price: "44.50",
					type: "SNACKS"
				},
				{
					code: "916",
					name: "CHOCOLATE FERRERO ROCHER ESTUCHE GRANDE 48 PCS",
					price: "27.00",
					type: "SNACKS"
				},
				{
					code: "1486",
					name: "CHOCOLATE HERSHEYS MR.GOODBAR 36 CT",
					price: "42.50",
					type: "SNACKS"
				},
				{
					code: "46",
					name: "CHOCOLATE KIT KAT ORIGINAL 36CT",
					price: "43.50",
					type: "SNACKS"
				},
				{
					code: "202",
					name: "CHOCOLATE M&M 48CT AMARILLOS",
					price: "58.50",
					type: "SNACKS"
				},
				{
					code: "1293",
					name: "CHOCOLATE M&M DE 36 CT MARRON",
					price: "44.00",
					type: "SNACKS"
				},
				{
					code: "45",
					name: "CHOCOLATE MILKYWAY 36CT",
					price: "39.00",
					type: "SNACKS"
				},
				{
					code: "201",
					name: "CHOCOLATE SNICKERS 48 CT",
					price: "57.50",
					type: "SNACKS"
				},
				{
					code: "420",
					name: "CHOCOLATE SURTIDOS FULL SIZE MIXED 30U TRANSPARENTE",
					price: "35.50",
					type: "SNACKS"
				},
				{
					code: "24",
					name: "CONDIMENTO KIRLAND CRUSHED RED PEPER 283 GR",
					price: "6.00",
					type: "ALIMENTOS"
				},
				{
					code: "261",
					name: "CONDIMENTO STONEMILL CHILI POWDER 71 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "259",
					name: "CONDIMENTO STONEMILL GARLIC POWDER 88 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "263",
					name: "CONDIMENTO STONEMILL GARLIC SALT 99GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "328",
					name: "CONDIMENTO STONEMILL GROUND CINNAMON 67 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "265",
					name: "CONDIMENTO STONEMILL GROUND CUMIN 57GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "264",
					name: "CONDIMENTO STONEMILL ITALIAN SEASONING 21 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "594",
					name: "CONDIMENTO STONEMILL LEMON PEPPER SEASONING 99 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "402",
					name: "CONDIMENTO STONEMILL MINCED ONION 57GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "593",
					name: "CONDIMENTO STONEMILL ONION POWDER 74GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "591",
					name: "CONDIMENTO STONEMILL OREGANO LEAVES 21 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "327",
					name: "CONDIMENTO STONEMILL PARSLEY FLAKES 7 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "592",
					name: "CONDIMENTO STONEMILL STEAK SEASONING 96 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "1360",
					name: "CONDIMENTO STONEMILL TURMERIC / CURCUMA 63.8 GR",
					price: "2.00",
					type: "ALIMENTOS"
				},
				{
					code: "1544",
					name: "CONDIMENTOS BADIA LLUVIA DE CHOCOLATE 6 X 680.4 GR",
					price: "64.50",
					type: "ALIMENTOS"
				},
				{
					code: "291",
					name: "COTUFA KIRLAND BUTTER 44CT",
					price: "27.00",
					type: "SNACKS"
				},
				{
					code: "330",
					name: "CREMA DE AFEITAR GILLETE GEL SENSITIVE 198GR",
					price: "5.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1389",
					name: "CREMA DENTAL COLGATE MAX FRESH 5 PACK 215 GR",
					price: "21.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "707",
					name: "CREMA DENTAL COLGATE TARTAR WHITENING 70GR",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1390",
					name: "CREMA DENTAL COLGATE TOTAL WHITENING 5 PACK 178 GR",
					price: "23.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1392",
					name: "CREMA DESITIN DAILY DEFENSE 3 PACK 136 GR",
					price: "25.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "961",
					name: "DATILES PITTED DATES ORGANIC MARIANI 1.13 KG",
					price: "20.00",
					type: "ALIMENTOS"
				},
				{
					code: "1354",
					name: "DESIFECTANTE PINE-SOL LAVANDER 12 X 828 ML",
					price: "42.50",
					type: "LIMPIEZA"
				},
				{
					code: "1353",
					name: "DESIFECTANTE PINE-SOL SPARKLING WAVE 12 X 828 ML",
					price: "42.50",
					type: "LIMPIEZA"
				},
				{
					code: "1117",
					name: "DESINFECTANTE CLOROX LIMPIA POCETA RAIN CLEAN 2 X 709 ML",
					price: "7.00",
					type: "LIMPIEZA"
				},
				{
					code: "1317",
					name: "DESINFECTANTE LIQUIDO FABULOSO CITRUS FRUIT 1.65 LTS",
					price: "6.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1316",
					name: "DESINFECTANTE LIQUIDO FABULOSO LAVANDA 1.65 LTS",
					price: "6.00",
					type: "LIMPIEZA"
				},
				{
					code: "1313",
					name: "DESINFECTANTE LIQUIDO FABULOSO MAR FRESCO 500 ML",
					price: "2.00",
					type: "LIMPIEZA"
				},
				{
					code: "1318",
					name: "DESINFECTANTE LIQUIDO FABULOSO OCEAN PARADISE 1.65 LTS",
					price: "6.00",
					type: "LIMPIEZA"
				},
				{
					code: "1315",
					name: "DESINFECTANTE LIQUIDO FABULOSO PASSION FRUIT 1.65 LTS",
					price: "6.00",
					type: "LIMPIEZA"
				},
				{
					code: "702",
					name: "DESINFECTANTE LIQUIDO FABULOSO PASSION OF FRUITS 828 ML",
					price: "3.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1304",
					name: "DESINFECTANTE LIQUIDO FABULOSO TROPICAL SPRING 1.65 LTS",
					price: "6.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "399",
					name: "DESODORANTE DOVE WOMEN EN SPRAY COTTON SOFT 6 PACK",
					price: "20.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "903",
					name: "DESODORANTE NIVEA SPRAY WOMEN PROTEC & CARE 150 ML",
					price: "4.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "640",
					name: "DESODORANTE REXONA WOMEN 150 ML EN SPRAY INVISIBLE DRY",
					price: "4.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "248",
					name: "DESODORANTE REXONA WOMEN 200 ML EN SPRAY TROPICAL",
					price: "5.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "929",
					name: "DESODORANTE SECRET CLINICAL POWDER PROTECTION 45 GR",
					price: "7.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1292",
					name: "DETERGENTE ALL ATAIN FREE CLEAR 120 PACK",
					price: "36.50",
					type: "LIMPIEZA"
				},
				{
					code: "1276",
					name: "DETERGENTE GAIN FLINGS 4 BAGS 132 CAPSULAS 2.96 KG",
					price: "57.50",
					type: "LIMPIEZA"
				},
				{
					code: "1063",
					name: "DETERGENTE LIQUIDO GAIN ULTRA CONCETRADO ORIGINAL 5.91 LTS",
					price: "39.00",
					type: "LIMPIEZA"
				},
				{
					code: "1361",
					name: "DETERGENTE LIQUIDO TIDE  SIMPLY OXI  917 ML",
					price: "8.00",
					type: "LIMPIEZA"
				},
				{
					code: "1291",
					name: "DETERGENTE MEMBERS MARK ULTIMATE CLEAN POWERT 130 COUNT",
					price: "39.00",
					type: "LIMPIEZA"
				},
				{
					code: "1362",
					name: "DETERGENTE TIDE PODS 3 EN 1 42 PACS",
					price: "25.00",
					type: "LIMPIEZA"
				},
				{
					code: "606",
					name: "DETERGENTE TIDE PODS 4 BAGS 168 PACS 3.87 KG",
					price: "56.50",
					type: "LIMPIEZA"
				},
				{
					code: "999",
					name: "DIPS DE QUESO MEDIUM CASA MAMITA",
					price: "4.50",
					type: "ALIMENTOS"
				},
				{
					code: "1407",
					name: "GALLETA BELVITA MIX 36 PACK",
					price: "27.00",
					type: "SNACKS"
				},
				{
					code: "375",
					name: "GALLETA FAMOUS AMOS 42CT",
					price: "32.00",
					type: "SNACKS"
				},
				{
					code: "1408",
					name: "GALLETA NEWTONS HIGO  24 PACK",
					price: "18.00",
					type: "SNACKS"
				},
				{
					code: "874",
					name: "GEL INTIMO FEMININE XTRA CARE ORIGINAL 266 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1406",
					name: "GOMITAS HARIBO GOLD BEARS 12 X 142 GR",
					price: "23.50",
					type: "SNACKS"
				},
				{
					code: "29",
					name: "GOMITAS SALVAVIDAS 15 PAQUETES",
					price: "37.50",
					type: "SNACKS"
				},
				{
					code: "980",
					name: "GRANOLA QUAKER 2 BAGS 1.95 KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "969",
					name: "HARINA DE ALMENDRA KIRLAND 1.36 KG",
					price: "24.00",
					type: "ALIMENTOS"
				},
				{
					code: "1271",
					name: "HELADO NESTLE VARIETY PACK  40 CT SURTIDOS",
					price: "76.50",
					type: "SNACKS"
				},
				{
					code: "1445",
					name: "ICED TEA 4C DE DURAZNO 2.34KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "72",
					name: "ICED TEA 4C DE LIMON 2.34KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "77",
					name: "ICED TEA 4C DE MORA 2.34KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "168",
					name: "JABON DE BAÑO DOVE ORIGINAL 12  X 135 GR",
					price: "14.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "170",
					name: "JABON DE BAÑO DOVE PINK 12 X 135 GR",
					price: "14.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "282",
					name: "JABON DE BAÑO DOVE VAINILLA BEAUTY BAR 12 X 135 GR",
					price: "14.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1491",
					name: "JABON DE BAÑO LUX  CREAMY PERFECTION 6 X 85 GR",
					price: "3.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1492",
					name: "JABON DE BAÑO LUX DREAM DELIGHT 6 X 85 GR",
					price: "3.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "305",
					name: "JABON DE BAÑO RUBIS ALMENDRA 6X125GR",
					price: "4.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "303",
					name: "JABON DE BAÑO RUBIS OCEAN BREZZE 6X125GR",
					price: "4.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "95",
					name: "KOOL AID TROPICAL PUNCH DE 2.33KG",
					price: "15.50",
					type: "ALIMENTOS"
				},
				{
					code: "814",
					name: "LAVAPLATOS CREMA SAPOLIO NARANJA  TWO PACK ESPONJA 360 GR C/U",
					price: "3.50",
					type: "LIMPIEZA"
				},
				{
					code: "794",
					name: "LAVAPLATOS CREMA SAPOLIO TUTTI TWO PACK ESPONJA 360 GR C/U",
					price: "3.50",
					type: "LIMPIEZA"
				},
				{
					code: "575",
					name: "LAVAPLATOS LIQUIDO AJAX  NARANJA 828 ML",
					price: "4.00",
					type: "LIMPIEZA"
				},
				{
					code: "577",
					name: "LAVAPLATOS LIQUIDO AJAX CITRUS POMEGRANATE 828 ML",
					price: "4.00",
					type: "LIMPIEZA"
				},
				{
					code: "578",
					name: "LAVAPLATOS LIQUIDO AJAX GRAPEFRUIT 828 ML",
					price: "4.00",
					type: "LIMPIEZA"
				},
				{
					code: "541",
					name: "LAVAPLATOS LIQUIDO AJAX LIMON 414 ML",
					price: "2.50",
					type: "LIMPIEZA"
				},
				{
					code: "576",
					name: "LAVAPLATOS LIQUIDO AJAX LIMON 828 ML",
					price: "4.00",
					type: "LIMPIEZA"
				},
				{
					code: "574",
					name: "LAVAPLATOS LIQUIDO AJAX NARANJA 414 ML",
					price: "2.50",
					type: "LIMPIEZA"
				},
				{
					code: "994",
					name: "LECHE CONDENSADA  SWEET HEAVEN 390 GR",
					price: "2.50",
					type: "ALIMENTOS"
				},
				{
					code: "1343",
					name: "LECHE CONDENSADA BELMONT 24 X  380 GR",
					price: "51.00",
					type: "ALIMENTOS"
				},
				{
					code: "496",
					name: "LECHE DE ALMENDRAS KIRLAND ORIGINAL ALMOND 12LTS",
					price: "36.50",
					type: "ALIMENTOS"
				},
				{
					code: "495",
					name: "LECHE DE ALMENDRAS KIRLAND VAINILLA ALMOND 6LTS",
					price: "21.50",
					type: "ALIMENTOS"
				},
				{
					code: "378",
					name: "LECHE DE ALMENDRAS SILK VAINILLA 6LTS",
					price: "21.50",
					type: "ALIMENTOS"
				},
				{
					code: "96",
					name: "LECHE DE COCO SO DELICIOUS 6LTS",
					price: "23.50",
					type: "ALIMENTOS"
				},
				{
					code: "1061",
					name: "LECHE DE SOYA KIRLAND VAINILLA 12 LTS",
					price: "32.00",
					type: "ALIMENTOS"
				},
				{
					code: "497",
					name: "LECHE NESTLE NIDO FORTIIFICADA 2.2KG",
					price: "35.00",
					type: "ALIMENTOS"
				},
				{
					code: "436",
					name: "LECHE NESTLE NIDO KINDER 1+ 2.2KG",
					price: "37.50",
					type: "ALIMENTOS"
				},
				{
					code: "1129",
					name: "LECHE NIDO PRE SCHOOL 3 + 800 GR",
					price: "21.00",
					type: "ALIMENTOS"
				},
				{
					code: "93",
					name: "LIMONADA COUTRY TIME ORIGINAL 2.33 KG",
					price: "15.50",
					type: "ALIMENTOS"
				},
				{
					code: "1356",
					name: "LIMPIADOR FORMULA 409 MULTI SUPERFIE 946 ML",
					price: "6.00",
					type: "LIMPIEZA"
				},
				{
					code: "1059",
					name: "LIPTON ICED TEA LIMON 2.54 KG",
					price: "15.50",
					type: "ALIMENTOS"
				},
				{
					code: "720",
					name: "LISTERINE 80 ML ULTRA CLEAN",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "209",
					name: "LISTERINE 80 ML ZERO",
					price: "2.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "742",
					name: "LOCION HUMECTANTE XTRA CARE BABY SILKY SOFT 355 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "484",
					name: "MANI - MEREY - PLANTERS VARIETY PACK 24 CT",
					price: "23.00",
					type: "SNACKS"
				},
				{
					code: "1657",
					name: "MANI CON CONCHA CON SAL HAMPTON FARMS 2.27 KG",
					price: "16.00",
					type: "SNACKS"
				},
				{
					code: "1402",
					name: "MANI CON CONCHA SIN SAL HAMPTON FARMS 2.27 KG",
					price: "16.00",
					type: "SNACKS"
				},
				{
					code: "583",
					name: "MANI PLANTERS VARIETY PACK 48 CT",
					price: "14.50",
					type: "SNACKS"
				},
				{
					code: "936",
					name: "MANTECA VEGETAL CRISCO 1.36 KG",
					price: "12.00",
					type: "ALIMENTOS"
				},
				{
					code: "937",
					name: "MANTECA VEGETAL CRISCO 453 GR",
					price: "6.00",
					type: "ALIMENTOS"
				},
				{
					code: "1098",
					name: "MANTEQUILLA DE MANI JIF CREAMY TWO  PACK 2.72 KG",
					price: "18.50",
					type: "ALIMENTOS"
				},
				{
					code: "1097",
					name: "MANTEQUILLA DE MANI JIF EXTRA CRUNCHY TWO PACK 2.72 KG",
					price: "18.50",
					type: "ALIMENTOS"
				},
				{
					code: "11",
					name: "MAYONESA HELLMAN´S 3 PACK X 739 ML",
					price: "18.00",
					type: "ALIMENTOS"
				},
				{
					code: "1075",
					name: "MAYONESA KRAFT MAYO  TWO PACK 1.77 LTS",
					price: "11.00",
					type: "ALIMENTOS"
				},
				{
					code: "1290",
					name: "MAYONESA KRAFT MAYO 3.78 LTS",
					price: "19.00",
					type: "ALIMENTOS"
				},
				{
					code: "1031",
					name: "MELOCOTONES KIRLAND SLICED 680 GR X 4 PACK",
					price: "22.00",
					type: "ALIMENTOS"
				},
				{
					code: "481",
					name: "MEREY MEMBERS MARK 935 GR",
					price: "27.50",
					type: "SNACKS"
				},
				{
					code: "799",
					name: "MEZCLA DE PANQUECAS BUTTERMILK MEMBERS MARK 4.54 KG",
					price: "14.50",
					type: "ALIMENTOS"
				},
				{
					code: "1369",
					name: "MIXED NUTS DELUXE  UNSALTED MEMBERS MARK  964 GR",
					price: "27.00",
					type: "SNACKS"
				},
				{
					code: "480",
					name: "MIXED NUTS MEMBERS MARK 964 GR",
					price: "19.50",
					type: "SNACKS"
				},
				{
					code: "826",
					name: "MOTRIN CHILDRENS BERRY FLAVOR SUSPENSIO ORAL TWO PACK 120 ML",
					price: "16.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "63",
					name: "NESTLE NESQUIK SABOR A FRESA 1.19 KG",
					price: "15.50",
					type: "ALIMENTOS"
				},
				{
					code: "240",
					name: "NIAGARA ORIGINAL HOLD 4 PACK",
					price: "9.50",
					type: "LIMPIEZA"
				},
				{
					code: "973",
					name: "NUECES KIRLAND 1.36 KG",
					price: "20.00",
					type: "SNACKS"
				},
				{
					code: "704",
					name: "PAPAS PRINGLES GRANDES 14 CT BBQ 158GR",
					price: "39.00",
					type: "SNACKS"
				},
				{
					code: "1220",
					name: "PAPAS PRINGLES GRANDES 14 CT ROTISSERIE CHICKEN 158GR",
					price: "39.00",
					type: "SNACKS"
				},
				{
					code: "1071",
					name: "PAPAS PRINGLES PEQUENAS BBQ 12 CT",
					price: "12.00",
					type: "SNACKS"
				},
				{
					code: "177",
					name: "PASTA DE TOMATE CONTADINA 3.14 KG",
					price: "12.00",
					type: "ALIMENTOS"
				},
				{
					code: "1428",
					name: "PEDIASURE EN POLVO FRESA 400 GR",
					price: "23.50",
					type: "ALIMENTOS"
				},
				{
					code: "490",
					name: "PILAS AAA PANASONIC 4 PILAS X 12 PAQUETES",
					price: "20.00",
					type: "PROMOCION"
				},
				{
					code: "1366",
					name: "PISTACHO KIRLAND CON CONCHA 1.36 KG",
					price: "33.00",
					type: "SNACKS"
				},
				{
					code: "1348",
					name: "PISTACHO SOUTHERN GROVE C/CONCHA CON SAL 453.6 GR",
					price: "13.00",
					type: "SNACKS"
				},
				{
					code: "1347",
					name: "PISTACHO SOUTHERN GROVE C/CONCHA SIN SAL 283.5 GR",
					price: "8.50",
					type: "SNACKS"
				},
				{
					code: "1446",
					name: "PISTACHO WONDERFL HONEY ROASTED SIN CONCHA BOLSAS 623 GR",
					price: "33.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "974",
					name: "QUINOA KIRLAND 2.04 KG",
					price: "20.50",
					type: "ALIMENTOS"
				},
				{
					code: "377",
					name: "RED BULL ORIGINAL 24CT",
					price: "64.50"
				},
				{
					code: "165",
					name: "SALSA BARBECUE SWEET BABY RAY´S 794GR",
					price: "5.50",
					type: "ALIMENTOS"
				},
				{
					code: "19",
					name: "SALSA KETCHUP 3 PACK DE 1.25KG C/U",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "900",
					name: "SARDINAS LAKAY EN ACEITE VEGETAL 425.6 GR",
					price: "2.50",
					type: "ALIMENTOS"
				},
				{
					code: "990",
					name: "SARDINAS LAKAY EN SALSA DE TOMATE 425.6 GR",
					price: "2.50",
					type: "ALIMENTOS"
				},
				{
					code: "1052",
					name: "SHAMPOO PANTENE  SMOOTH & SLEEK 6 X 400 ML",
					price: "32.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1051",
					name: "SHAMPOO PANTENE VOLUME & BODY 6 X 400 ML",
					price: "32.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1374",
					name: "SHAMPOO SUAVE KIDS COCONUT SPLASH 6 X 355 ML",
					price: "16.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1375",
					name: "SHAMPOO SUAVE KIDS STRAWBERRY BLAST 6 X 355 ML",
					price: "16.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "1372",
					name: "SHAMPOO SUAVE KIDS WATERMELON WONDER 6 X 355 ML",
					price: "16.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "745",
					name: "SHAMPOO XTRA CARE 2 EN 1 MEN FORCE MOISTURE RICH 413 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "755",
					name: "SHAMPOO XTRA CARE BABY KING 946 ML",
					price: "3.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "157",
					name: "SHAMPOO XTRA CARE KIDS 3 EN 1 BUBBLE GUM 354 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "158",
					name: "SHAMPOO XTRA CARE KIDS 3 EN 1 STRAWBERRY BANANA  354 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "159",
					name: "SHAMPOO XTRA CARE KIDS 3 EN 1 WATERMELON 354 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "160",
					name: "SHAMPOO XTRA CARE KIDS 3EN1 CHERRY BERRY 354 ML",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "422",
					name: "SUAVIIZANTE SUAVITEL FRESCA PRIMAVERA 5.91 LTS",
					price: "22.50",
					type: "LIMPIEZA"
				},
				{
					code: "1484",
					name: "SUAVIZANTE GAIN FIREWORKS BLISSFUL BREEZE PELOTICA 859 GR",
					price: "25.00",
					type: "LIMPIEZA"
				},
				{
					code: "1483",
					name: "SUAVIZANTE GAIN FIREWORKS ORIGINAL PELOTICA 859 GR",
					price: "25.00",
					type: "LIMPIEZA"
				},
				{
					code: "1350",
					name: "SUAVIZANTE LIQUIDO DOWNY ULTRA CONCENTRADO 1.53 LTS",
					price: "11.00",
					type: "LIMPIEZA"
				},
				{
					code: "238",
					name: "SUAVIZANTE LIQUIDO DOWNY ULTRA CONCENTRADO 4.08 L",
					price: "27.00",
					type: "LIMPIEZA"
				},
				{
					code: "1083",
					name: "TACOS OLD EL PASO 10 TACOS 133 GR",
					price: "3.00",
					type: "ALIMENTOS"
				},
				{
					code: "341",
					name: "TALCO JOHNSONS ORIGINAL 100 GR",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "623",
					name: "TALCO XTRA CARE BABY POWDER 12 X 623 GR",
					price: "35.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "91",
					name: "TANG SABOR A NARANJA DE 2.04KG",
					price: "15.50",
					type: "ALIMENTOS"
				},
				{
					code: "113",
					name: "TERMOMETRO DIGITAL FAMILY CARE",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "439",
					name: "TOALLAS HUMEDAS MEMBERS MARK FREE 12X96",
					price: "52.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "438",
					name: "TOALLAS HUMEDAS MEMBERS MARK GREEN TEA 12X96",
					price: "52.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "549",
					name: "TOALLAS SANITARIAS KOTEX SIN ALITAS 10 PADS",
					price: "2.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "563",
					name: "UVAS PASAS POTES 567 GR",
					price: "8.00",
					type: "ALIMENTOS"
				}
			],

			cartItems: [],

			totalUnits: [0],

			cloudinary: { userName: "dqjibjhkx" }
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			}
		}
	};
};

export default getState;
