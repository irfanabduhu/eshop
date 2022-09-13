const cart = [
  { id: 1, name: "Toothbrush", quantity: 3 },
  { id: 2, name: "Shoe", quantity: 5 },
];

const totalPrice = 12000;
const totalItems = 8;

export default function Cart() {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cart.map((item) => (
          <div className="flex justify-between border-b-2 mb-2" key={item.id}>
            <div className="text-lg py-2">
              <p>{item.name}</p>
            </div>
            <div className="text-lg py-2">
              <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
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
                <p>3</p>
                <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
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
            <p className="text-5xl">{totalItems}</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
