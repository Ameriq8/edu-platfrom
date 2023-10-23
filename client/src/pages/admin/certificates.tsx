import CertificatesTable from '@/components/admin/certificates/certificatesTable';
import AdminNavbar from '@/components/admin/navbar';
import Footer from '@/components/layouts/footer';
import React from 'react';

export default function Certificates() {
  return (
    <>
      <AdminNavbar />

      <div className="my-40">
        <div className="max-w-screen-2xl mx-auto">
          <CertificatesTable />
        </div>
      </div>

      <Footer />
    </>
  );
}
