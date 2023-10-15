import { StudentTeacherCardProps } from '@/utils/interfaces';
import Link from 'next/link';
import React from 'react';

export default function StudentTeachersCards({
  teachers,
}: StudentTeacherCardProps): React.JSX.Element[] {
  return teachers.map((teacher, index) => (
    <Link
      href={`/students/lectures/${teacher.id}`}
      key={index}
      className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 border hover:border-blue-600"
      dir="RTL"
    >
      <img
        src={teacher.image_url}
        alt={teacher.name}
        className="object-cover w-[284.05] h-auto rounded ring-4 ring-gray-300"
      />
      <div className="py-4 px-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800">{teacher.name}</h2>
      </div>
    </Link>
  ));
}
