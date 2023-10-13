import Footer from '@/components/layouts/footer';
import StudentNav from '@/components/layouts/studentNavbar';
import React from 'react';
import {teachersArray} from '../teachers/courses';
import StudentTeachersCards from '@/components/students/studentTeachersCards';

export default function StudentHomePage() {
  return (
    <>
      <StudentNav />

      <div className="mt-28">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
            قائمة استاذتك
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-48 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500" dir="RTL">
            هذه هي قائمة الاساتذه الذين قمت بالاشتراك في دوراتهم.
          </p>

          <div className="grid grid-cols-1 gap-8 mt- xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
            <StudentTeachersCards teachers={teachersArray} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
