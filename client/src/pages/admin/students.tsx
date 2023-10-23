import AdminNavbar from '@/components/admin/navbar';
import StudentsTable from '@/components/admin/students/studentsTable';
import Footer from '@/components/layouts/footer';
import React from 'react';

export default function Students() {
  return (
    <>
      <AdminNavbar />

      <div className="my-40">
        <div className="max-w-screen-2xl mx-auto">
          <StudentsTable />
        </div>
      </div>

      <Footer />
    </>
  );
}
