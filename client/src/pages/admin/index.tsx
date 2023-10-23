import AdminNavbar from '@/components/admin/navbar';
import Footer from '@/components/layouts/footer';
import React from 'react';

export default function Admin() {
  return (
    <>
      <AdminNavbar />

      <div className="my-40">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-semibold mb-4">احصائيات المنصة</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Statistic Cards */}
              <div className="p-4 bg-blue-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">عدد الطلاب</h2>
                <p className="text-3xl font-bold">1000</p>
              </div>
              
              <div className="p-4 bg-green-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">عدد الاساتذه</h2>
                <p className="text-3xl font-bold">500</p>
              </div>

              <div className="p-4 bg-yellow-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">عدد الشهادات</h2>
                <p className="text-3xl font-bold">10,000</p>
              </div>

              <div className="p-4 bg-purple-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">عدد المحاضرات</h2>
                <p className="text-3xl font-bold">1000</p>
              </div>

              <div className="p-4 bg-teal-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">مبلغ الاشتراكات الكلي</h2>
                <p className="text-3xl font-bold">$10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
