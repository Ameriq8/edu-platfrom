import Footer from '@/components/layouts/footer';
import StudentNavbar from '@/components/layouts/studentNavbar';
import VideoPlayer from '@/components/lectures/videoPlayer';
import React from 'react';

export default function Lecture() {
  return (
    <div className="overflow-hidden">
      <StudentNavbar />

      <div className="mt-28">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-xl font-semibold text-center text-gray-800 lg:text-2xl" dir="RTL">
            الفصل الاول | المحاضرة الاولى | العمليات على الاعداد المركبة
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="flex justify-center items-center mt-10">
            <div className="w-2/3 border-4 border-blue-400 rounded">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
