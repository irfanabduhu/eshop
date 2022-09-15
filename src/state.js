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
	console.log();
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

<<<<<<< HEAD
const cartInit = { items: [], totalPrice: 0, totalItems: 0 };

const cartReducer = (cart = cartInit, action) => {
	console.log(cart);
	const id = action.type === ADDCART ? action.payload.id : action.payload;
	const index = cart.items.findIndex((item) => item.id === id);

=======
const cartReducer = (cart = [], action) => {
	if (action.type === REMOVE) {
		return cart.filter((item) => item.id !== action.payload.id);
	}

>>>>>>> refactor
	if (action.type === ADDCART) {
		const index = cart.findIndex((item) => item.id === action.payload.id);
		if (index === -1) {
<<<<<<< HEAD
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
=======
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
>>>>>>> refactor
			};
		}
	}
<<<<<<< HEAD
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
=======
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
>>>>>>> refactor
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
