import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import React, { useState } from 'react';

export default function certificateChecking() {
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Navbar />

      <section className="bg-white mt-40">
        <div className="max-w-3xl px-6 py-16 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-800">التحقق من الشهادة</h1>
          <p className="max-w-md mx-auto mt-5 text-gray-500" dir="RTL">
            من فضلك ادخل رقم الشهاة للتحقق منها تواصل معنا عند أي مشكلة.
          </p>

          <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input
              id="certificateId"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="رقم الشهادة"
            />

            <button
              onClick={handleForm}
              className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              تحقق
            </button>
          </div>
        </div>
      </section>

      {showForm ? (
        <section className="container mx-auto mt-8 mb-40 flex justify-center pt-8 md:pt-0">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 border-4">
              <thead className="text-gray-700 border-b-[3px]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Certificate Details
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Full Name
                  </th>
                  <td className="px-40 py-4">Muhammad Hadi Mahdi AL-Zmaili</td>
                </tr>

                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Certificate Number
                  </th>
                  <td className="px-40 py-4">DR1554</td>
                </tr>

                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Country
                  </th>
                  <td className="px-40 py-4">Iraq</td>
                </tr>

                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Certificate/s Type
                  </th>
                  <td className="px-40 py-4">I Don't Know</td>
                </tr>

                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Certificate/s Specialization
                  </th>
                  <td className="px-40 py-4">Training and education skills</td>
                </tr>

                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Publishing Date
                  </th>
                  <td className="px-40 py-4">04-Mar-2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
      <Footer />
    </div>
  );
}
