import Link from 'next/link';
import React from 'react';

export default function ChannelsCards({ channelName, imageUrl }: any) {
  return (
    <Link
      href={`/students/channels/${channelName}`}
      className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 border hover:border-blue-600"
      dir="RTL"
    >
      <img
        src={imageUrl}
        alt={channelName}
        className="object-cover w-[284.05] h-auto rounded ring-4 ring-gray-300"
      />
      <div className="py-4 px-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800">{channelName}</h2>
      </div>
    </Link>
  );
}
