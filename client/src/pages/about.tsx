import FooterComponent from '@/components/layouts/footer';
import NavbarComponent from '@/components/layouts/navbar';
import React from 'react';

export default function About() {
  return (
    <div>
      <NavbarComponent />
      <section
        className="w-full bg-center bg-cover h-[38rem] mt-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")',
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              اهلا بك في الصحفة التعريفيه
            </h1>
            <p className="text-base font-semibold text-white lg:text-lg mt-4">
              معا نحو مستقبل مشرق متعدد الافاق والفرص وخبرات تجعلك متميزا بين اقرانك
            </p>
          </div>
        </div>
      </section>

      {/* 
      <div className="bg-slate-50 h-[38rem]">
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">خدماتنا</h1>
            
          </div>
        </div>
      </div> */}

      <section className="my-4">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl text-center">خدماتنا</h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-20 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer">
              <span className="inline-block text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700">الأهداف</h1>

              <p className="text-gray-500" dir="RTL">
                1.إعداد أطباء أسنان يمتلكون معارف علمية مميزة وقدرات مهنية ذات مهارة عالية على
                المستويين الوطني والدولي. 2.اعتماد مناهج دراسية عالميّة عالية الجودة في مستوى
                الدراسات الأولية والعليا. 3.تطبيق أفضل معايير الاعتمادية العالمية ...
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer">
              <span className="inline-block text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700">الرسالة</h1>

              <p className="text-gray-500" dir="RTL">
                تسعى كليتنا لدورٍ متميز في تلبية حاجات المجتمع الصحية والارتقاء بها، وذلك عن طريق
                إيجاد بيئة تعليمية وبحثية قادرة على إعداد أطباء أسنان أكفاء علميًا ومهنيًا وسلوكيًا
                ملتزمين بقيم المجتمع والجامعة.
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 cursor-pointer">
              <span className="inline-block text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700">الرؤية</h1>

              <p className="text-gray-500" dir="RTL">
                صرحٌ علميٌّ متميزٌ في طبِّ الأسنان وطنيًا وإقليميًا وعالميًا.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
