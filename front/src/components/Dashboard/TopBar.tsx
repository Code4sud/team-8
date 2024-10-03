import { Sun } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="px-4 pb-2 mt-2 mb-4 border-b border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="block text-sm font-bold">
            🚀 Hey Salut, merci de vous connecter!
          </span>

          <span className="block text-xs text-stone-900"></span>
        </div>

        <div>
          <button className="flex items-center gap-2 p-2 text-xs transition-colors rounded cursor-pointer text-stone-50 hover:bg-Iqanto-orange-50 ">
            <Sun className="text-Iqanto-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
