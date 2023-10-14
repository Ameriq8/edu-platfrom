import Footer from '@/components/layouts/footer';
import StudentNavbar from '@/components/layouts/studentNavbar';
import LectureCard from '@/components/lectures/lectureCard';
import React from 'react';

export default function TeacherLectures() {
  return (
    <>
      <StudentNavbar />

      <div className="mt-28">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
            قائمة المحاضرات
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-48 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500" dir="RTL">
            هذه هي قائمة محاضرات الاستاذ الذين قمت بالاشتراك في دورته.
          </p>

          <div className="grid grid-cols-1 gap-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
            {lectures.map((lecture, index) => (
              <LectureCard key={index} {...lecture} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const lectures = [
  {
    title: 'تطوير الويب الحديث',
    instructor: 'محمد علي',
    date: '١٥ أكتوبر ٢٠٢٣',
    time: '٢:٠٠ مساءً - ٤:٠٠ مساءً',
    description: 'انضم إلينا لمناقشة مفصلة حول تقنيات تطوير الويب الحديثة وأفضل الممارسات.',
    image: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
  },
  {
    title: 'تصميم واجهات المستخدم',
    instructor: 'ليلى أحمد',
    date: '١٥ نوفمبر ٢٠٢٣',
    time: '١٠:٠٠ صباحًا - ١٢:٠٠ ظهرًا',
    description: 'درس تفصيلي حول كيفية تصميم واجهات المستخدم الجذابة وسلسة الاستخدام.',
    image: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
  },
  {
    title: 'أمان التطبيقات',
    instructor: 'علي خالد',
    date: '٢٥ ديسمبر ٢٠٢٣',
    time: '٣:٠٠ مساءً - ٥:٠٠ مساءً',
    description: 'جلسة حول كيفية تأمين تطبيقات الويب والحفاظ على سلامة البيانات.',
    image: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
  },
  {
    title: 'تطوير التطبيقات النقالة',
    instructor: 'فاطمة علي',
    date: '١٥ فبراير ٢٠٢٤',
    time: '٩:٠٠ صباحًا - ١١:٠٠ صباحًا',
    description: 'تعرف على تطوير التطبيقات النقالة باستخدام أحدث التقنيات والأدوات.',
    image: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
  },
  {
    title: 'تصميم تجربة المستخدم',
    instructor: 'مريم خالد',
    date: '١٥ مارس ٢٠٢٤',
    time: '١:٠٠ بعد الظهر - ٣:٠٠ بعد الظهر',
    description: 'جلسة تعليمية حول كيفية تصميم تجربة مستخدم استثنائية ومرضية.',
    image: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
  },
  // Add more lecture objects in Arabic here
];
