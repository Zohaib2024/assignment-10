import React from "react";
import Image from "next/image";

const ProductCards = () => {
  return (
    <div>
      <div className=" flex flex-row justify-evenly flex-wrap gap-y-10 ">
        <div className="bg-white w-56 h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto"
              src="/iphone.jpeg"
              width={200}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center text-lg">iphone 13 </h1>
            <p className="text-center text-sm">$200,000</p>
          </div>
        </div>
        <div className="bg-white w-56 h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto"
              src="/iphone.jpeg"
              width={300}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center text-lg">iphone 13 </h1>
            <p className="text-center text-sm">$200,000</p>
          </div>
        </div>
        <div className="bg-white w-56 h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto"
              src="/iphone.jpeg"
              width={200}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center text-lg">iphone 13 </h1>
            <p className="text-center text-sm">$200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
