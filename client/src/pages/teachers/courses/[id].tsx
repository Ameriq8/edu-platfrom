import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import React from 'react';

export default function Course() {
  return (
    <>
      <Navbar />

      <section className="container mx-auto my-44 flex justify-center pt-8 md:pt-0 items-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 border-4">
            <thead className="text-gray-700 border-b-[3px]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  تفاصيل عرض الاستاذ الكريم
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  اسم الاستاذ
                </th>
                <td className="px-40 py-4">الاستاذ همام عباس</td>
              </tr>

              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  رقم العرض
                </th>
                <td className="px-40 py-4">MR2300</td>
              </tr>

              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  المادة الدراسية
                </th>
                <td className="px-40 py-4">رياضيات</td>
              </tr>

              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  سعر العرض
                </th>
                <td className="px-40 py-4" dir="RTL">
                  500,000 د.ع
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
}
