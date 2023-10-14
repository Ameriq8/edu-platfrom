import { StudentTeacherCardProps } from '@/utils/interfaces';
import Link from 'next/link';
import React from 'react';

export default function StudentTeachersCards({ teachers }: StudentTeacherCardProps): React.JSX.Element[] {
  return teachers.map((teacher, index) => (
    <>
      <div
        key={index}
        className="flex flex-col items-center p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer border hover:border-blue-600 rounded-xl"
      >
        <img
          className="object-cover w-[284.05] h-auto rounded ring-4 ring-gray-300"
          src={teacher.image_url}
          alt={teacher.name}
        />

        <h1 className="mt-4 text-2xl font-semibold text-gray-700">{teacher.name}</h1>

        <Link
          href={`/students/lectures/${teacher.id}`}
          className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer mt-4"
        >
          عرض المحاضرات
        </Link>
      </div>
    </>
  ));
}
