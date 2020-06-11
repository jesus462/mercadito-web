const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [
				{
					code: 100,
					name: "Nutella",
					price: 9,
					type: "Snacks"
				},
				{
					code: 101,
					name: "Milk",
					price: 5,
					type: "Bebidas"
				},
				{
					code: 102,
					name: "Food",
					price: 8,
					type: "Alimentos"
				},
				{
					code: 103,
					name: "Ajax",
					price: 9,
					type: "Limpieza"
				},
				{
					code: 104,
					name: "Shampoo",
					price: 5,
					type: "Higiene"
				},
				{
					code: 105,
					name: "Pringles",
					price: 8,
					type: "Populares"
				},
				{
					code: 106,
					name: "Oreo",
					price: 9,
					type: "Snacks"
				},
				{
					code: 107,
					name: "Orange Juice",
					price: 5,
					type: "Bebidas"
				},
				{
					code: 108,
					name: "Meat",
					price: 8,
					type: "Alimentos"
				},
				{
					code: 109,
					name: "Cloro",
					price: 9,
					type: "Limpieza"
				},
				{
					code: 110,
					name: "Acondicionador",
					price: 5,
					type: "Higiene"
				},
				{
					code: 111,
					name: "Lays",
					price: 8,
					type: "Populares"
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
