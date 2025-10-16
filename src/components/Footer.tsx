import AE2 from "@/assets/AE2.jpg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={AE2}
              alt="Ahmed Electronics Logo"
              className="h-20 w-auto md:h-24"
            />
            <div>
              <p className="text-2xl font-semibold text-white">
                Ahmed Electronics
              </p>
              <p className="text-sm text-gray-600">
                Professional Air Conditioning & Electronics Services
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-300 text-sm">
              Ahmed Electronics © {new Date().getFullYear()} All rights
              reserved.
            </p>
            <p className="text-slate-400 text-sm mt-1">
              | Serving Addis Ababa with excellence |
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;