import { LayoutDashboard } from "lucide-react";

export const SidebarLinks = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <a
          href="#"
          className="flex items-center justify-center w-4/5 gap-2 py-2 font-semibold transition-colors rounded-sm text-md text-Iqanto-white-50 bg-gradient-to-b from-Iqanto-orange-500 to-Iqanto-orange-600 hover:bg-gradient-to-b hover:from-Iqanto-orange-600 hover:to-Iqanto-orange-700 hover:text-Iqanto-white-50 hover:transition-all"
        >
          <LayoutDashboard />
          Vue Global
        </a>
        {/*   <a
          href="#"
          className="py-4 text-lg font-semibold text-gray-600 hover:text-gray-800"
        >
          About
        </a>
        <a
          href="#"
          className="py-4 text-lg font-semibold text-gray-600 hover:text-gray-800"
        >
          Services
        </a>
        <a
          href="#"
          className="py-4 text-lg font-semibold text-gray-600 hover:text-gray-800"
        >
          Contact
        </a> */}
      </div>
    </div>
  );
};
