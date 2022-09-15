import { combineReducers, createStore } from "redux";

const INCREMENT = "cart/increment";
const DECREMENT = "cart/decrement";
const ADDCART = "cart/add";
const REMOVE = "cart/remove";
const ADDPRODUCT = "product/add";

export const increment = (item) => ({ type: INCREMENT, payload: item });
export const decrement = (item) => ({ type: DECREMENT, payload: item });
export const addCart = (item) => ({ type: ADDCART, payload: item });
export const remove = (item) => ({ type: REMOVE, payload: item });
export const addProduct = (item) => ({ type: ADDPRODUCT, payload: item });

const productReducer = (products = [], action) => {
	if (action.type === ADDPRODUCT) {
		return [...products, action.payload];
	}
	if (action.type === ADDCART || action.type === INCREMENT) {
		const index = products.findIndex(
			(item) => item.id === action.payload.id
		);
		products[index] = {
			...products[index],
			inStock: products[index].inStock - 1,
		};
		return [...products];
	}
	if (action.type === REMOVE || action.type === DECREMENT) {
		const index = products.findIndex(
			(item) => item.id === action.payload.id
		);
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
		return cart.filter((item) => item.id !== action.payload.id);
	}

	if (action.type === ADDCART) {
		const index = cart.findIndex((item) => item.id === action.payload.id);
		if (index === -1) {
			return [
				...cart,
				{
					...action.payload,
					inStock: action.payload.inStock - 1,
					quantity: 1,
				},
			];
		} else {
			cart[index] = {
				...cart[index],
				quantity: cart[index].quantity + 1,
				inStock: cart[index].inStock - 1,
			};
			return [...cart];
		}
	}
	if (action.type === INCREMENT) {
		const index = cart.findIndex((item) => item.id === action.payload.id);
		cart[index] = {
			...cart[index],
			quantity: cart[index].quantity + 1,
			inStock: cart[index].inStock - 1,
		};
		return [...cart];
	}
	if (action.type === DECREMENT) {
		const index = cart.findIndex((item) => item.id === action.payload.id);
		cart[index] = {
			...cart[index],
			quantity: cart[index].quantity - 1,
			inStock: cart[index].inStock + 1,
		};
		return [...cart];
	}
	return cart;
};

const infoReducer = (info = { totalPrice: 0, totalItems: 0 }, action) => {
	if (action.type === ADDCART || action.type === INCREMENT) {
		return {
			totalPrice: info.totalPrice + action.payload.price,
			totalItems: info.totalItems + 1,
		};
	}
	if (action.type === REMOVE || action.type === DECREMENT) {
		return {
			totalPrice: info.totalPrice - action.payload.price,
			totalItems: info.totalItems - 1,
		};
	}
	return info;
};

// redux dev tool:
const enhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
	combineReducers({
		products: productReducer,
		cart: cartReducer,
		info: infoReducer,
	}),
	enhancer
);
