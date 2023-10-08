import NavbarComponent from '@/components/layouts/navbar';
import TeacherCardComponent from '@/components/layouts/teacherCard';
import React from 'react';

export default function Teachers() {
  return (
    <>
      <NavbarComponent />

      <section className="bg-white mt-28">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
            طاقم اساتذتنا المحترمين
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            .منصة مانشستر البريطاني لديها طاقم تدريسي كفوئ و ذو خبرات للعديد من السنوات في مجال
            التعليم
            <br />
            .في منصتنا نقوم بتوفير طرق حديثة و متطوره في نظام التعليم الالكتروني لضمان جودة تعليم
            ممتازة
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <TeacherCardComponent />
            <TeacherCardComponent />
            <TeacherCardComponent />
            <TeacherCardComponent />
            <TeacherCardComponent />
          </div>
        </div>
      </section>
    </>
  );
}
