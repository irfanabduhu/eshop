import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import { addCart } from "./state";

const Details = () => {
	// const { title, image, category, description } = useLocation().state;
	const item = useLocation().state;
	const dispatch = useDispatch();
	const { title, image, category, description, price } = item;
	return (
		<div className="bg-gray-50 grid grid-cols-12 gap-6">
			<div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
				<div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
					<div className="p-10">
						<h1 className="text-gray-900 font-bold text-3xl underline decoration-purple-500 decoration-4 underline-offset-8 mb-10">
							{title}
						</h1>
						<img
							src={image}
							alt={title}
							className="flex items-center border h-96 w-72"
						/>
						<h2 className="text-purple-700 text-2xl font-semibold w-72 text-center m-2">
							USD {price}
						</h2>
						<button
							className="bg-purple-500 p-3 w-72 rounded-md text-white font-semibold text-xl mb-3"
							onClick={() => dispatch(addCart(item))}
						>
							Add to Cart
						</button>
						<p className="py-2 text-justify">{description}</p>
						<span className="bg-purple-500 text-white text-sm rounded-sm px-2 py-1 inline-flex mt-3 font-semibold">
							{category}
						</span>
					</div>
				</div>
			</div>
			<Cart />
		</div>
	);
};

export default Details;
