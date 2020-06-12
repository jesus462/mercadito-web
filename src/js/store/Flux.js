const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [
				{
					code: "3",
					name: "HEINZ PICNIC 4PACK (PEPINILLO, MOSTAZA, KETCHUP)",
					price: "15.00",
					type: "ALIMENTOS"
				},
				{
					code: "4",
					name: "NUTELLA DE 950GR",
					price: "9.00",
					type: "SNACKS"
				},
				{
					code: "19",
					name: "SALSA KETCHUP 3 PACK DE 1.25KG C/U",
					price: "15.00",
					type: "ALIMENTOS"
				},
				{
					code: "091",
					name: "TANG SABOR A NARANJA DE 2.04KG",
					price: "15.50",
					type: "BEBIDAS"
				},
				{
					code: "182",
					name: "SPLENDA DE 1200 SOBRES",
					price: "12.00",
					type: "ALIMENTOS"
				},
				{
					code: "378",
					name: "LECHE DE ALMENDRAS SILK VAINILLA 6LTS",
					price: "21.50",
					type: "ALIMENTOS"
				},
				{
					code: "474",
					name: "CEREAL KELLOGGS  2 BAGS FROOT LOOPS 1.24 KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "495",
					name: "LECHE DE ALMENDRAS KIRLAND VAINILLA ALMOND 6LTS",
					price: "21.50",
					type: "ALIMENTOS"
				},
				{
					code: "496",
					name: "LECHE DE ALMENDRAS KIRLAND ORIGINAL ALMOND 12LTS",
					price: "36.50",
					type: "ALIMENTOS"
				},
				{
					code: "653",
					name: "ARROZ BASMATI  9.07 KG",
					price: "10.00",
					type: "ALIMENTOS"
				},
				{
					code: "799",
					name: "MEZCLA DE PANQUECAS BUTTERMILK MEMBERS MARK 4.54 KG",
					price: "10.00",
					type: "ALIMENTOS"
				},
				{
					code: "969",
					name: "HARINA DE ALMENDRA KIRLAND 1.36 KG",
					price: "10.00",
					type: "ALIMENTOS"
				},
				{
					code: "986",
					name: "AVENA QUAKER OATS 2 BAGS 4.52 KG",
					price: "22.50",
					type: "ALIMENTOS"
				},
				{
					code: "1061",
					name: "LECHE DE SOYA KIRLAND VAINILLA 12 LTS",
					price: "32.50",
					type: "ALIMENTOS"
				},
				{
					code: "799",
					name: "MEZCLA DE PANQUECAS BUTTERMILK MEMBERS MARK 4.54 KG",
					price: "10.00",
					type: "ALIMENTOS"
				},
				{
					code: "1063",
					name: "DETERGENTE LIQUIDO GAIN ULTRA CONCETRADO ORIGINAL 5.91 LTS",
					price: "39.00",
					type: "LIMPIEZA"
				},
				{
					code: "1097",
					name: "MANTEQUILLA DE MANI JIF EXTRA CRUNCHY TWO PACK 2.72 KG",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1098",
					name: "MANTEQUILLA DE MANI JIF CREAMY TWO  PACK 2.72 KG",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1163",
					name: "HELADO KIT KAT 16 BARQUILLA",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1167",
					name: "HELADO GREAT VALUE 12 SADNWICH VAINILLA",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1172",
					name: "HELADO SNICKERS 12 BARRAS",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1232",
					name: "AMBIENTADOR GLADE SPRAY CRISP WATERS 12 SPRAY X 227 GR",
					price: "10.00",
					type: "LIMPIEZA"
				},
				{
					code: "1234",
					name: "AMBIENTADOR GLADE SPRAY RED HONEY SUCKLE NECTAR 12 SPRAY X 227 GR",
					price: "10.00",
					type: "LIMPIEZA"
				},
				{
					code: "1267",
					name: "TORTA HELADA CHEESECAKE MINIATURES MEMBERS MARK 63 CT",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1271",
					name: "HELADO NESTLE VARIETY PACK  40 CT SURTIDOS",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1272",
					name: "HELADO BARQUILLA DE M&M  6 PACK",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1276",
					name: "DETERGENTE GAIN FLINGS 4 BAGS 132 CAPSULAS 2.96 KG",
					price: "57.50",
					type: "LIMPIEZA"
				},
				{
					code: "1321",
					name: "HELADO KIIT KAT MINIS 20 MINI BARS",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "1323",
					name: "HELADO NESTLE 26 BARQUILLA & PALETAS MIX DRUMSTICK",
					price: "10.00",
					type: "SNACKS"
				},
				{
					code: "2020",
					name: "NUTELLA DE 25GR",
					price: "2.00",
					type: "SNACKS"
				}
			],

			cartItems: [],

			totalUnits: [0]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
