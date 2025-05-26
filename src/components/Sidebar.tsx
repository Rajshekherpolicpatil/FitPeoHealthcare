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
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

interface MenuItem {
  label: string;
  icon: ReactElement;
  active: boolean;
  route: string;
}
const generalMenuData = [
  {
    label: "Dashboard",
    icon: <BiSolidWidget />,
    active: true,
    route: "/dashboard",
  },
  {
    label: "History",
    icon: <HiMiniArrowsUpDown />,
    active: false,
    route: "/history",
  },
  {
    label: "Calendar",
    icon: <FontAwesomeIcon icon={faCalendarDays} />,
    active: false,
    route: "/calendar",
  },
  {
    label: "Appointments",
    icon: <FontAwesomeIcon icon={faSquarePlus} />,
    active: false,
    route: "/appointments",
  },
  {
    label: "Statistics",
    icon: <FontAwesomeIcon icon={faSquarePollVertical} />,
    active: false,
    route: "/statistics",
  },
];
const chatMenuData = [
  {
    label: "Chat",
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    active: false,
    route: "/dashboard",
  },
  {
    label: "Support",
    icon: <IoCall />,
    active: false,
    route: "/history",
  },
];
const settingMenuData = [
  {
    label: "Setting",
    icon: (
      <FontAwesomeIcon
        icon={faGear}
        style={
          {
            "--fa-primary-opacity": "0.4",
            "--fa-secondary-opacity": "1",
          } as React.CSSProperties & Record<string, string>
        }
      />
    ),
    active: false,
    route: "/history",
  },
];
export default function Sidebar() {
  return (
    <div className="h-full bg-blue-50/90 rounded-l-4xl flex">
      <div className="flex flex-col justify-between h-full ">
        <div>
          <h1 className=" pt-10 px-12  text-3xl font-extrabold">
            <span className="text-[#43ddeb]">Health</span>
            <span className="text-[#00008B]">care.</span>
          </h1>
          <NavComponent menuData={generalMenuData} title={"General"} />
          <NavComponent menuData={chatMenuData} title={"Tools"} />
        </div>
        <div className="pb-8">
          <NavComponent menuData={settingMenuData} />
        </div>
      </div>
    </div>
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
            href={item.route}
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
