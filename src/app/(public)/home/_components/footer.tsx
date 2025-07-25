interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 border-t mt-5 py-16 px-6 text-center text-gray-600 text-base">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-bold text-2xl text-appPink">پیربی</span>
          <span className="text-lg">اشتراک‌گذاری و قرض دادن وسایل در محله شما</span>
        </div>
        <div className="flex flex-col md:items-end items-center gap-4">
          <div className="flex gap-8 text-lg">
            <a href="#" className="hover:text-green-700 transition">
              درباره ما
            </a>
            <a href="#" className="hover:text-green-700 transition">
              تماس با ما
            </a>
            <a href="#" className="hover:text-green-700 transition">
              سوالات متداول
            </a>
          </div>
          <span className="text-sm text-gray-400 mt-4">
            © {new Date().getFullYear()} پیربی. همه حقوق محفوظ است.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
