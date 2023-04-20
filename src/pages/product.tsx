import React from 'react';
import Image from 'next/image';
import productModal from './mini-projects/product-modal/images/headphone.png';

type Props = {};

const product = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16 ">
        <div>
          <Image
            src={productModal}
            width={500}
            height={500}
            alt="Product Modal"
          />
        </div>
        <div className="flex flex-col space-y-6 text-slate-700">
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free shipping
              </div>
            </div>
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty
            </div>
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through">799</p>
              <p className="text-5xl font-bold">599</p>
              <p className="text-sm font-ligth text-gray-400">
                This offer valid till april
              </p>
            </div>
            <div className="group">
              <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-b-0 group-hover:bg-blue-700">
                <div className="px-8 py-4 transition-all duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
