import Cart from "./Cart";
import Header from "./Header";
import ProductList from "./ProductList";

export default function App() {
	return (
		<div className="bg-gray-50 h-full md:h-screen">
			<Header />
			<main className="grid grid-cols-12 gap-6">
				<ProductList />
				<Cart />
			</main>
		</div>
	);
}
