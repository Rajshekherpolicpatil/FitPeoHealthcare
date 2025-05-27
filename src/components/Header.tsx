import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiMenu } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
export default function Header({ onMenuToggle }) {
  return (
    <div className="mt-2 lg:mt-5 md:mt-4 flex items-center w-full">
      <button
        onClick={onMenuToggle}
        className="lg:hidden text-gray-600 hover:text-gray-800 mr-3 bg-blue-50 p-1.5 rounded-lg"
      >
        <HiMenu className="text-xl md:text-5xl" />
      </button>

      <div className="w-full flex items-center border-3 border-gray-50 hover:border-gray-300 bg-white transition-all duration-300 ease-in-out px-4 py-2 md:px-4 md:py-3 lg:px-2 lg:py-1 justify-start rounded-md">
        <div className="flex">
          <RiSearchLine className="text-gray-600 text-xl md:text-4xl lg:text-xl" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="ml-2 w-full outline-none bg-transparent md:text-2xl lg:text-sm font-medium text-gray-500"
        />
        <FontAwesomeIcon
          icon={faBell}
          color="#00008B"
          className="p-1 text-xl md:text-4xl lg:text-xl"
        />
      </div>
    </div>
  );
}
