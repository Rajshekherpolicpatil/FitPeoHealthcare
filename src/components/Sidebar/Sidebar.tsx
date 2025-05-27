import { HiX } from "react-icons/hi";
import {
  generalMenuData,
  chatMenuData,
  settingMenuData,
} from "../../data/SideBarData";
import NavComponent from "./NavComponent";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-white/10 backdrop-blur-md"
          onClick={onClose}
        />
      )}
      <div
        className={`
        fixed lg:relative
         inset-y-0 left-0 z-50 
        w-64 lg:w-auto
        bg-blue-50/90 rounded-l-3xl lg:rounded-l-4xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        flex flex-col h-full lg:h-auto
      `}
      >
        <div className="flex-1 overflow-y-auto flex flex-col justify-between">
          <div className="">
            <div className="flex items-center justify-between px-6 lg:px-11 pt-6 lg:pt-10">
              <h1 className="text-2xl lg:text-2xl font-bold">
                <span className="text-cyan-400">Health</span>
                <span className="text-blue-900">care.</span>
              </h1>
              <button
                onClick={onClose}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <HiX size={24} />
              </button>
            </div>
            <NavComponent menuData={generalMenuData} title={"General"} />
            <NavComponent menuData={chatMenuData} title={"Tools"} />
          </div>
          <div className="pb-15">
            <NavComponent menuData={settingMenuData} />
          </div>
        </div>
      </div>
    </>
  );
}
