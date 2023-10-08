import React from 'react';

export default function TeacherCardComponent() {
  return (
    <div className="flex flex-col items-center p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer border hover:border-blue-600 rounded-xl">
      <img
        className="object-cover w-[284.05] h-40 rounded ring-4 ring-gray-300"
        src="https://ta3leem.iq/media/3223_k82uh39.png"
        alt="حسين الشمري منهج كامل"
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700">حسين الشمري منهج كامل</h1>

      <p className="mt-2 text-gray-500">400,000 د.ع</p>

      <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer mt-4">
        اشترك الان
      </button>
    </div>
  );
}
