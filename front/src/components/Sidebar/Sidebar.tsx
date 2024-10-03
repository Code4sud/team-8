import { Logo } from "./Logo";
import { SidebarLinks } from "./SidebarLinks";

export const Sidebar = () => {
  return (
    <div className="w-4/5">
      <div className="overflow-y-auto w-full top-4 h-[calc(100vh-80px-80px)] bg-Iqanto-white-50 rounded-lg shadow">
        <Logo />
        <SidebarLinks />
      </div>
    </div>
  );
};
