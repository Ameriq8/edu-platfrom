import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import Pagination from '@/components/teachers/pagination';
import TeacherCard from '@/components/teachers/teacherCard';
import { normalizeTotalPages } from '@/utils/helpers';
import { useRouter } from 'next/router';
import React from 'react';

export default function Teachers() {
  const router = useRouter();
  const query = router.query;
  const cardsPerPage = 12;
  const currentPage = parseInt(query?.page as string) || 1;
  const totalPages = normalizeTotalPages(teachersArray.length, cardsPerPage);

  return (
    <>
      <Navbar />

      <section className="mt-28">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
            طاقم اساتذتنا المحترمين
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            .منصة احتراف لديها طاقم تدريسي كفوئ و ذو خبرات للعديد من السنوات في مجال
            التعليم
            <br />
            .في منصتنا نقوم بتوفير طرق حديثة و متطوره في نظام التعليم الالكتروني لضمان جودة تعليم
            ممتازة
          </p>

          <div className="flex items-center justify-center my-6 mx-auto">
            <div className="flex items-center p-1 border border-blue-500 rounded-xl">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 md:py-3 rounded-xl md:px-12">
                جميع المراحل
              </button>
              <button className="px-4 py-2 mx-4 text-sm font-medium transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-500 hover:text-white rounded-xl md:mx-8 md:px-12">
                المرحلة الاعدادية
              </button>
              <button className="px-4 py-2 text-sm font-medium transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-500 hover:text-white rounded-xl md:px-12">
                المرحلة المتوسطة
              </button>
              <button className="px-4 py-2 text-sm font-medium transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-500 hover:text-white rounded-xl md:px-12">
                تعلم اللغات
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt- xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
            <TeacherCard teachers={teachersArray} limit={cardsPerPage} page={currentPage} />
          </div>
        </div>
      </section>

      <Pagination currentPage={currentPage} totalPages={totalPages} />

      <Footer />
    </>
  );
}

const teachersArray = [
  {
    id: '1',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '2',
    name: 'Teacher 2',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 2',
    type: 1,
    price: 450000,
    discount: 10,
  },
  {
    id: '3',
    name: 'Teacher 3',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 3',
    type: 0,
    price: 600000,
    discount: 5,
  },
  {
    id: '4',
    name: 'Teacher 4',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 4',
    type: 1,
    price: 550000,
    discount: 15,
  },
  {
    id: '5',
    name: 'Teacher 5',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 5',
    type: 0,
    price: 700000,
    discount: 0,
  },
  {
    id: '6',
    name: 'Teacher 6',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 6',
    type: 1,
    price: 800000,
    discount: 20,
  },
  {
    id: '7',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '8',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '9',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '10',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '11',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '12',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '13',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '14',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '15',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '16',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '17',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '19',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '20',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '21',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '22',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '23',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '24',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '25',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '26',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '27',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '28',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '29',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '30',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '31',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '32',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '1',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '2',
    name: 'Teacher 2',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 2',
    type: 1,
    price: 450000,
    discount: 10,
  },
  {
    id: '3',
    name: 'Teacher 3',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 3',
    type: 0,
    price: 600000,
    discount: 5,
  },
  {
    id: '4',
    name: 'Teacher 4',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 4',
    type: 1,
    price: 550000,
    discount: 15,
  },
  {
    id: '5',
    name: 'Teacher 5',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 5',
    type: 0,
    price: 700000,
    discount: 0,
  },
  {
    id: '6',
    name: 'Teacher 6',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 6',
    type: 1,
    price: 800000,
    discount: 20,
  },
  {
    id: '7',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '8',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '9',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '10',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '11',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '12',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '13',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '14',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '15',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '16',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '17',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '18',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '19',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '20',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '21',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '22',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '23',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '24',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '25',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '26',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '27',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '28',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '29',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '30',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '31',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
  {
    id: '32',
    name: 'Teacher 1',
    image_url: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    lesson: 'Lesson 1',
    type: 0,
    price: 500000,
    discount: 0,
  },
];
