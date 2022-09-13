import { combineReducers, createStore } from "redux";

const INCREMENT = "cart/increment";
const DECREMENT = "cart/decrement";
const ADDCART = "cart/add";
const REMOVE = "cart/remove";
const ADDPRODUCT = "product/add";

export const increment = (id) => ({ type: INCREMENT, payload: id });
export const decrement = (id) => ({ type: DECREMENT, payload: id });
export const addCart = (item) => ({ type: ADDCART, payload: item });
export const remove = (id) => ({ type: REMOVE, payload: id });
export const addProduct = (item) => ({ type: ADDPRODUCT, payload: item });

const productReducer = (products = [], action) => {
	if (action.type === ADDPRODUCT) {
		return [...products, action.payload];
	}

	const id = action.type === ADDCART ? action.payload.id : action.payload;
	const index = products.findIndex((item) => item.id === id);
	if (action.type === ADDCART || action.type === INCREMENT) {
		products[index] = {
			...products[index],
			inStock: products[index].inStock - 1,
		};
		return [...products];
	}
	if (action.type === REMOVE || action.type === DECREMENT) {
		products[index] = {
			...products[index],
			inStock: products[index].inStock + 1,
		};
		return [...products];
	}
	return products;
};

const cartReducer = (cart = [], action) => {
	if (action.type === REMOVE) {
		return cart.filter((item) => item.id !== action.payload);
	}

	const id = action.type === ADDCART ? action.payload.id : action.payload;
	const index = cart.findIndex((item) => item.id === id);
	if (action.type === ADDCART) {
		if (index === -1) {
			return [...cart, action.payload];
		} else {
			cart[index] = {
				...cart[index],
				quantity: cart[index].quantity + 1,
			};
			return [...cart];
		}
	}

	if (index === -1) return cart;
	if (action.type === INCREMENT) {
		cart[index] = { ...cart[index], quantity: cart[index].quantity + 1 };
		return [...cart];
	}
	if (action.type === DECREMENT) {
		cart[index] = { ...cart[index], quantity: cart[index].quantity - 1 };
		return [...cart];
	}
	return cart;
};


// redux dev tool:
const enhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
	combineReducers({ products: productReducer, cart: cartReducer }),
	enhancer
);
