import {
  faCalendarDays,
  faSquarePlus,
  faSquarePollVertical,
  faCommentDots,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiSolidWidget } from "react-icons/bi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import type { MenuItem } from "../types/types";

export const generalMenuData: MenuItem[] = [
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
export const chatMenuData = [
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
export const settingMenuData = [
  {
    label: "Setting",
    icon: <FontAwesomeIcon icon={faGear} />,
    active: false,
  },
];
