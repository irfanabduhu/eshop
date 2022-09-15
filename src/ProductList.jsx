import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addProduct } from "./state";
import { Link, Outlet } from "react-router-dom";

export default function ProductList() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	async function getProducts() {
		const res = await fetch("https://fakestoreapi.com/products");
		const json = await res.json();
		json.map((item) => dispatch(addProduct({ ...item, inStock: 20 })));
	}

	useEffect(() => {
		getProducts();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
			{products.map((item) => (
				<div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
					<div className="flex justify-between px-2 items-center">
						<Link
							to={`/details/${item.id}`}
							state={item}
							key={item.id}
							className="w-5/6"
						>
							<div className="text-lg font-semibold">
								<p>{item.title} </p>
								<p className="text-gray-400 text-base">
									USD {item.price}
								</p>
							</div>
						</Link>
						<div className="text-lg font-semibold">
							<div className="text-white inline-flex items-center text-sm bg-purple-700 rounded-full px-4 py-2 mr-2 align-middle">
								<p>{item.inStock}</p>
							</div>
							<button
								className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center align-middle"
								onClick={() => dispatch(addCart(item))}
								disabled={item.inStock === 0}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			))}
			<div>
				<Outlet />
			</div>
		</div>
	);
}
