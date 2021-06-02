import React from "react";

const Productcard = () => {
  return (
    <div class="h-screen w-full bg-gray-200 flex flex-row p-6">
      <div class="flex flex-row bg-white w-80 h-44 rounded-3xl p-2 shadow-lg">
        <div class="relative w-1/2 h-full bg-gray-200 rounded-2xl overflow-hidden">
          <div class="absolute rounded-full bg-white h-6 w-6 z-40 top-2 right-2 p-1 cursor-pointer">
            <svg
              class="text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <img
            class=" relative h-full z-0"
            src="https://picsum.photos/id/1025/1000/1000"
            alt=""
          ></img>
          <div class="relative w-1/2 h-full ml-2 flex flex-col pl-1">
            <h4 class="text-lg font-bold text-gray-600">Gorro Mickey</h4>
            <p class="text-sm text-gray-400">Lorem ipsum dolor sit...</p>
            <div class="absolute inset-x-0 bottom-2 flex flex-row w-full items-center justify-center">
              <div class="w-1/2 ">
                <p class="text-sm font-bold text-gray-600">$100.00</p>
              </div>
              <div class="w-1/2">
                <button class="w-full font-bold text-sm rounded-full bg-blue-600 h-8 text-white shadow-lg">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
