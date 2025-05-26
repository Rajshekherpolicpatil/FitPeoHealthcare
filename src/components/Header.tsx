import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiSearchLine } from "react-icons/ri";
export default function Header() {
  return (
      <div className="mt-5 flex items-center w-full">
        <div className="w-full flex items-center border border-gray-300 bg-white transition-all duration-300 ease-in-out px-4 py-2 justify-start rounded-md">
          <div className="flex">
            <RiSearchLine size={22} className="text-gray-600"/>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full outline-none bg-transparent"
            autoFocus
          />
          <FontAwesomeIcon
            icon={faBell}
            color="#00008B"
            size="lg"
            className="p-1"
          />
        </div>
    </div>
  );
}
