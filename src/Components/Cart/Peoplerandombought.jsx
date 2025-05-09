import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Peoplerandombought = () => {
    const products = useSelector((store)=>store.Productslice.products)
    const randomIndex = Math.floor(Math.random()*products.length)
    const product = products[randomIndex]
  return (
    <>
    {/* {JSON.stringify(products)} */}
    {/* {randomIndex} */}
      <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <a href="#" className="overflow-hidden rounded">
         
        </a>
        <div>
          <a
            href="#"
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
          >
            {product.title} 
          </a>
          <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
            {product.description.substring(0,100)}
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            <span className="line-through">{Math.ceil(product.price+10)}$ </span>
          </p>
          <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
          {Math.ceil(product.price-10)}$
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2.5">
          
            <div className="tooltip-arrow" data-popper-arrow></div>
            <Link to={'/product'+product.id}
              type="button"
              className="inline-flex w-full items-center text-black justify-center rounded-lg bg-indigo-600  px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4  "
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                />
              </svg>
              Add to cart
            </Link>
          </div>
        </div>
      
    </>
  );
};

export default Peoplerandombought;
