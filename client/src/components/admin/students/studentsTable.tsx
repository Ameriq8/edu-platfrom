import React from 'react';
import UpdateStudentDialog from './updateDialog';

export default function StudentsTable() {
  return (
    <>
      <section className="container px-4 mx-auto my-40">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800" dir="RTL">
                الطلاب
              </h2>

              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                240 vendors
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500" dir="RTL">
              هذه جميع البيانات الخاصة بالطلاب
            </p>
          </div>

          <div className="flex items-center mt-4 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span>Add vendor</span>
            </button>
          </div>
        </div>

        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm">
              عرض الكل
            </button>

            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
              الجديد
            </button>
          </div>

          <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 mx-3 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search"
              className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        القيد
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        الطالب
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        رقم ولي الامر
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        رقم الطالب
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        عدد الدروات
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        عدد الشهادات
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">3177</h2>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">عامر محمد</h2>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">07804821597</h2>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">33</h2>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <UpdateStudentDialog />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
          <div className="text-sm text-gray-500">
            Page <span className="font-medium text-gray-700">1 of 10</span>
          </div>

          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>previous</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100"
            >
              <span>Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
