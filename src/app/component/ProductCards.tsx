import React from "react";
import Image from "next/image";

const ProductCards = () => {
  return (
    <div>
      <div className=" flex flex-row justify-center flex-wrap-reverse gap-y-5 mt-10 gap-x-5 mb-10">
        <div className="bg-white w-auto h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto"
              src="/adv 1.jpg"
              width={440}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center text-xl">
              Artificial intelligence
            </h1>
          </div>
        </div>
        <div className="bg-white  w-auto h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto"
              src="/adv 2.jpg"
              width={440}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center  text-xl">
              Web 3 and metaverse
            </h1>
          </div>
        </div>
        <div className="bg-white w-auto h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto "
              src="/adv 3.jpg"
              width={440}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center  text-xl">
              cloud-native computing
            </h1>
          </div>
        </div>
        <div className="bg-white  w-auto h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5">
            <Image
              className="mx-auto"
              src="/adv 4.jpg"
              width={440}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center  text-xl">
              Ambient Computing and Iot
            </h1>
          </div>
        </div>
        <div className="bg-white  w-auto h-auto flex justify-center items-center rounded-xl shadow-xl">
          <div className="py-5 gap-y-10">
            <Image
              className="mx-auto"
              src="/adv 5.jpg"
              width={440}
              height={500}
              alt="Picture of the author"
            />

            <h1 className="font-bold text-center  text-xl">
              Genomics and bioinformatics
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
