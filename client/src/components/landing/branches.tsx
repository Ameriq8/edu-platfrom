import React from 'react';

export default function Branches() {
  return (
    <div className="mb-40">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800  lg:text-3xl">الاقسام</h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-28 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {/* <div
            className="object-cover rounded-xl aspect-square bg-cover w-[240px] h-[247px] group mx-8 xl:mx-12 ring-4 ring-gray-300"
            style={{
              backgroundImage: "url('https://alameed.edu.iq/Images/pharm.jpeg')",
            }}
          >
            <div className="flex flex-col justify-center text-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white">دروس التقوية</h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase text-center">
                اضغط للانتقال
              </p>
            </div>
          </div> */}

          <div className="flex flex-col items-center">
            <img
              className="object-cover rounded-xl aspect-square w-[240px] h-[247px] ring-4 ring-gray-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 className="mt-2 text-2xl font-semibold">arthur melo</h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover rounded-xl aspect-square w-[240px] h-[247px] ring-4 ring-gray-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 className="mt-2 text-2xl font-semibold">arthur melo</h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover rounded-xl aspect-square w-[240px] h-[247px] ring-4 ring-gray-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 className="mt-2 text-2xl font-semibold">arthur melo</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}
