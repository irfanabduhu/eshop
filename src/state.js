import { combineReducers, createStore } from "redux";

const INCREMENT = "cart/increment";
const DECREMENT = "cart/decrement";
const ADD = "cart/add";
const REMOVE = "cart/remove";

export const increment = (id) => ({ type: INCREMENT, payload: id });
export const decrement = (id) => ({ type: DECREMENT, payload: id });
export const add = (item) => ({ type: ADD, payload: item });
export const remove = (id) => ({ type: REMOVE, payload: id });

const productReducer = (products = [], action) => {
	if (action.type === ADD) {
		return [...products, action.payload];
	}
	if (action.type === REMOVE) {
		return products.filter((item) => item.id !== action.payload);
	}
	return products;
};

const cartReducer = (cart = [], action) => {
	const index = cart.findIndex((item) => item.id === action.payload);
	if (index === -1) return cart;
	if ((action.type = INCREMENT)) {
		cart[index] = { ...cart[index], quantity: cart[index].quantity + 1 };
		return [...cart];
	}
	if ((action.type = DECREMENT)) {
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
