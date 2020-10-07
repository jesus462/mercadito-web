import firebase from "../utils/firebase";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [],
			loadingItems: true,
			noItems: false,
			cartItems: [],
			totalUnits: [0],
			cloudinary: { userName: "dqjibjhkx" }
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchItems: async () => {
				let resources = [];
				const db = firebase.firestore();
				let data = await db.collection("items").get();
				resources = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));

				if (resources.length > 0) {
					setStore({
						items: resources,
						loadingItems: false
					});
				} else {
					setStore({
						noItems: true,
						loadingItems: false
					});
				}
			}
		}
	};
};

export default getState;
