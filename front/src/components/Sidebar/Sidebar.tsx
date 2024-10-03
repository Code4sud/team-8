import { Logo } from "./Logo";
import { SidebarLinks } from "./SidebarLinks";

export const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-auto top-4 h-[calc(100vh-80px-80px)] bg-Iqanto-white-50 rounded-lg shadow">
        <Logo />
        <SidebarLinks />
      </div>
    </div>
  );
};
