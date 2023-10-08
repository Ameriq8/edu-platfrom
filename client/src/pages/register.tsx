import Link from 'next/link';
import React from 'react';

export default function Register() {
  return (
    <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 md:pt-0 bg-slate-100">
      <Link
        href="/"
        className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
      >
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          مركز مانشستر البريطاني
        </span>
      </Link>

      <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">انشاء حساب جديد</h2>
          <form className="mt-8 space-y-6" action="#">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 text-right">
                البريد الالكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 text-right">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-gray-900 block mb-2 text-right"
              >
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>

            <div className="flex flex-col justify-start">
              <a href="/" className="text-sm text-teal-500 hover:underline ml-auto">
                نسيت كلمة المرور؟
              </a>

              <Link
                href="/"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 my-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                انشاء الحساب
              </Link>
              <div className="text-sm font-medium text-gray-500 text-right">
                لديك حساب؟{' '}
                <Link href="/login" className="text-teal-500 hover:underline">
                  سجل الان
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
