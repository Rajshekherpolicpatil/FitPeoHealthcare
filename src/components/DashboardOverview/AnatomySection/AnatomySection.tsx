import { CiSearch } from "react-icons/ci";
import { IoIosQrScanner } from "react-icons/io";
import Indicators from "./Indicators";

export default function AnatomySection() {
  return (
    <div className="relative flex items-center w-[290px] h-[420px] bg-blue-50/90 rounded-2xl p-2">
      <CiSearch size={25} className="absolute right-3 top-3" />

      <div className=" w-full h-full flex items-center px-15 py-5">
        <img
          src="/src/assets/image.png"
          alt="background"
          className=" w-full h-full object-fil rounded-lg "
        />
        <IoIosQrScanner className="absolute text-blue-800/80  text-5xl left-26.5 bottom-27.5" />
        <IoIosQrScanner className="absolute text-blue-800/80  text-5xl right-25 top-22 " />
      </div>
      <div className="absolute -right-8 top-24 ">
        <Indicators
          label="Healthy Heart"
          icon="❤️"
          textColor="text-white"
          backgroundColor="bg-blue-900"
        />
      </div>

      <div className="absolute -left-2.5 bottom-29 ">
        <Indicators
          label="Healthy Leg"
          icon="🦵"
          textColor="text-blue-800"
          backgroundColor="bg-cyan-300"
        />
      </div>
    </div>
  );
}
