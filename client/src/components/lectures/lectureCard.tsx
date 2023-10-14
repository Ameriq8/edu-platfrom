import Link from 'next/link';
import React from 'react';

const LectureCard = ({ title, instructor, date, time, description, image }: any) => {
  return (
    <Link
      href={`/students/lecture/${title}`}
      className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 border hover:border-blue-600"
      dir="RTL"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-[284.05] h-auto rounded ring-4 ring-gray-300"
      />
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{instructor}</p>
        <p className="text-sm text-gray-500">
          {date} عند {time}
        </p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default LectureCard;
