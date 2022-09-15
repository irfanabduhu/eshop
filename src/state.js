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
	console.log();
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

const cartInit = { items: [], totalPrice: 0, totalItems: 0 };

const cartReducer = (cart = cartInit, action) => {
	console.log(cart);
	const id = action.type === ADDCART ? action.payload.id : action.payload;
	const index = cart.items.findIndex((item) => item.id === id);

	if (action.type === ADDCART) {
		if (index === -1) {
			return {
				items: [
					...cart.items,
					{ ...action.payload, inStock: action.payload.inStock - 1 },
				],
				totalPrice: cart.totalPrice + action.payload.price,
				totalItems: cart.totalItems + 1,
			};
		} else {
			console.log("HEIJLFLSJ", index, cart.items[index]);
			cart.items[index] = {
				...cart.items[index],
				quantity: cart.items[index].quantity + 1,
				inStock: cart.items[index].inStock - 1,
			};
			return {
				items: [...cart.items],
				totalPrice: cart.totalPrice + cart.items[index].price,
				totalItems: cart.totalItems + 1,
			};
		}
	}
	if (action.type === REMOVE) {
		return {
			items: cart.items.filter((item) => item.id !== action.payload),
			totalPrice: cart.totalPrice - cart.items[index].price,
			totalItems: cart.totalItems - 1,
		};
	}
	if (action.type === INCREMENT) {
		cart.items[index] = {
			...cart.items[index],
			quantity: cart.items[index].quantity + 1,
			inStock: cart.items[index].inStock - 1,
		};
		return {
			items: [...cart.items],
			totalPrice: cart.totalPrice + cart.items[index].price,
			totalItems: cart.totalItems + 1,
		};
	}
	if (action.type === DECREMENT) {
		cart.items[index] = {
			...cart.items[index],
			quantity: cart.items[index].quantity - 1,
			inStock: cart.items[index].inStock + 1,
		};
		return {
			items: [...cart.items],
			totalPrice: cart.totalPrice - cart.items[index].price,
			totalItems: cart.totalItems - 1,
		};
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
