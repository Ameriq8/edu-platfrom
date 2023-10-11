import Link from 'next/link';

export default function FooterComponent(): React.JSX.Element {
  return (
    <footer className="my-auto relative">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="/">مؤسسة مانشستر البريطاني</Link>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              href="/about"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              من نحن
            </Link>

            <Link
              href="/teachers"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              الاساتذه
            </Link>

            <Link
              href="/branches"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              الفروع
            </Link>

            <Link
              href="/certificate-checking"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              فحص الشهادة
            </Link>
          </div>
        </div>

        <div className="flex justify-center my-6 md:my-10">
          <span className="inline-block w-9/12 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-2/12 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1/12 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="text-center text-sm text-gray-500">
          تم العمل على هذا الموقع بواسطة المبرمج{' '}
          <a href="https://www.instagram.com/56_bc" className="text-indigo-500 hover:underline">
            عامر محمد
          </a>
        </div>
      </div>
    </footer>
  );
}
