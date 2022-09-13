import { useState } from "react";
import { useDispatch } from "react-redux";

const items = [
	{ id: 1, name: "Toothbrush", price: 35, inStock: 20 },
	{ id: 2, name: "Shoe", price: 700, inStock: 34 },
	{ id: 3, name: "Pencil", price: 8, inStock: 120 },
];

export default function ProductList() {
	const products = useState([]);
	const dispatch = useDispatch();

	return (
		<div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
			{items.map((item) => (
				<div
					className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
					key={item.id}
				>
					<div className="flex justify-between px-4 items-center">
						<div className="text-lg font-semibold">
							<p>
								{item.name} ({item.inStock})
							</p>
							<p className="text-gray-400 text-base">
								Tk {item.price}
							</p>
						</div>
						<div className="text-lg font-semibold">
							<button
								className="focus:outline-none bg-purple-700 hover:bg-purple-800 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
								onClick={() => {
									item[quantity] = 1;
									dispatch(add(item));
								}}
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
		</div>
	);
}
