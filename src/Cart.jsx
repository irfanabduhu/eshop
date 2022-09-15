import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove } from "./state";

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	console.log(cart);
	// TODO: refactor the following state into redux:
	// Currently, they are not available in other components.

	return (
		<div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
			<div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
				{cart.items.map((item) => (
					<div
						className="flex justify-between border-b-2 mb-2"
						key={`cart-${item.id}`}
					>
						<div className="text-lg py-2">
							<p>{item.title}</p>
						</div>
						<div className="text-lg py-2">
							<div className="flex flex-row space-x-2 w-full items-center rounded-lg">
								<button
									className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
									onClick={() => {
										if (item.quantity === 1) {
											dispatch(remove(item.id));
										} else {
											dispatch(decrement(item.id));
										}
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M18 12H6"
										></path>
									</svg>
								</button>
								<p>{item.quantity}</p>
								<button
									className="focus:outline-none bg-purple-700  hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
									onClick={() => {
										dispatch(increment(item.id));
									}}
									disabled={item.inStock === 0}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				))}
				<div className="flex justify-center items-center text-center">
					<div className="text-xl font-semibold">
						<p>Total Item</p>
						<p className="text-5xl">{cart.totalItems}</p>
					</div>
				</div>
			</div>
			<div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
				<div className="flex justify-center items-center text-center">
					<div className="text-xl font-semibold">
						<p>Total Price</p>
						<p className="text-5xl">{cart.totalPrice.toFixed(2)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
