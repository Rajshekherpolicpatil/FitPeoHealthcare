import {
  faCalendarDays,
  faCommentDots,
  faGear,
  faSquarePlus,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import { BiSolidWidget } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

interface MenuItem {
  label: string;
  icon: ReactElement;
  active: boolean;
}
const generalMenuData = [
  {
    label: "Dashboard",
    icon: <BiSolidWidget />,
    active: true,
  },
  {
    label: "History",
    icon: <HiMiniArrowsUpDown />,
    active: false,
  },
  {
    label: "Calendar",
    icon: <FontAwesomeIcon icon={faCalendarDays} />,
    active: false,
  },
  {
    label: "Appointments",
    icon: <FontAwesomeIcon icon={faSquarePlus} />,
    active: false,
  },
  {
    label: "Statistics",
    icon: <FontAwesomeIcon icon={faSquarePollVertical} />,
    active: false,
  },
];
const chatMenuData = [
  {
    label: "Chat",
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    active: false,
  },
  {
    label: "Support",
    icon: <IoCall />,
    active: false,
  },
];
const settingMenuData = [
  {
    label: "Setting",
    icon: <FontAwesomeIcon icon={faGear} />,
    active: false,
  },
];
export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden "
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
        <div className="flex-1 overflow-y-auto justify-between">
          <div className="">
            <div className="flex items-center justify-between px-6 lg:px-10 pt-6 lg:pt-10">
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
          <div className="pb-8">
            <NavComponent menuData={settingMenuData} />
          </div>
        </div>
      </div>
    </>
  );
}
function NavComponent({
  menuData,
  title,
}: {
  menuData: MenuItem[];
  title?: string;
}) {
  return (
    <nav className="pl-12 pt-10">
      <div className="text-sm text-gray-500 mb-6">{title}</div>
      <div className="flex flex-col gap-6">
        {menuData.map((item, index) => (
          <a
            key={index}
            className={`flex items-center gap-3 text-md font-medium ${
              item.active ? "text-blue-900 font-bold" : "text-gray-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
