import React from "react";
import HeroScetion from "../Components/Home/HeroScetion";
import Productcard from "../Components/Home/Productcard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector((state) => state.Productslice.products);
  return (
    <>
      <HeroScetion />

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4 text-white">
              Products
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Discover handpicked, trend-forward items for your everyday needs —
              crafted for the modern lifestyle.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {products && products.length>0 && products
              .map((cur, i) => {
                return <Productcard key={i}  data={cur}/>;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
