import AdminNavbar from '@/components/admin/navbar';
import TeachersTable from '@/components/admin/teachers/teachersTable';
import Footer from '@/components/layouts/footer';
import React from 'react';

export default function Teachers() {
  return (
    <>
      <AdminNavbar />

      <div className="my-40">
        <div className="max-w-screen-2xl mx-auto">
            <TeachersTable />
        </div>
      </div>

      <Footer />
    </>
  );
}
