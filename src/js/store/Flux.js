const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [
				{
					code: 122,
					name: "Nutella",
					price: 9,
					units: 1
				},
				{
					code: 102,
					name: "Milk",
					price: 5,
					units: 1
				},
				{
					code: 112,
					name: "Food",
					price: 8,
					units: 1
				}
			],

			cartItems: []
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
