const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [
				{
					code: "1086",
					name: "CHIA EARTHLY CHOICE ORGANIC 1.36 KG",
					price: "15.00",
					type: "ALIMENTOS"
				},
				{
					code: "2020",
					name: "NUTELLA 25GR",
					price: "2.00",
					type: "SNACKS"
				},
				{
					code: "564",
					name: "ACONDICIONADOR ALBERTO VO5 BLACKBERRY SAGE TEA 6 X 370 ML",
					price: "13.50",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "796",
					name: "AGUA S.PELLEGRINO BOTELLA VIDRIO 15 X 750 ML",
					price: "41.00",
					type: "ALIMENTOS"
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
					code: "986",
					name: "AVENA QUAKER OATS 2 BAGS 4.52 KG",
					price: "22.50",
					type: "ALIMENTOS"
				},
				{
					code: "1433",
					name: "BAÑO DE ESPUMA JOHNSONS BABY BLOSSOM  6 X 750 ML",
					price: "33.00",
					type: "CUIDADO PERSONAL"
				},
				{
					code: "634",
					name: "CARAMELOS MINI NERDS GRAPE STRAWBERRY 340GR",
					price: "6.00",
					type: "SNACKS"
				},
				{
					code: "603",
					name: "CEREAL KELLOGGS  2 BAGS CORN FLAKES 1.2 KG",
					price: "14.50",
					type: "ALIMENTOS"
				},
				{
					code: "474",
					name: "CEREAL KELLOGGS  2 BAGS FROOT LOOPS 1.24 KG",
					price: "16.50",
					type: "ALIMENTOS"
				},
				{
					code: "567",
					name: "CHICLE TRIDENT 12 CT NARANJA KIWI",
					price: "14.50",
					type: "SNACKS"
				},
				{
					code: "227",
					name: "UVAS PASAS 6PACK 28 GR C/U",
					price: "3.50",
					type: "SNACKS"
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

			cloudinary: { userName: "duu99bl6f" }
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
