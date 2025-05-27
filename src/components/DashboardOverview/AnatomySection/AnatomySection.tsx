import { CiSearch } from "react-icons/ci";
import { IoIosQrScanner } from "react-icons/io";
import Indicators from "./Indicators";

export default function AnatomySection() {
  return (
    <div className="relative flex items-center w-full lg:w-[350px] h-110 md:h-250 lg:h-[460px] bg-blue-50/90 rounded-2xl p-2">
      <CiSearch className="absolute right-3 top-3 text-xl md:text-5xl lg:text-2xl" />

      <div className="w-full h-full flex items-center px-14 lg:px-10 py-2">
        <img
          src="/src/assets/image.png"
          alt="background"
          className=" w-full h-full object-fil rounded-lg "
        />
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-right corner */}
          <IoIosQrScanner className="absolute text-blue-800/80 text-5xl lg:text-6xl md:text-9xl top-[20%] right-[34%] md:top-[18%] md:right-[30%]" />

          {/* Bottom-left corner */}
          <IoIosQrScanner className="absolute text-blue-800/80 text-5xl lg:text-6xl md:text-9xl bottom-[24%] left-[37%] md:bottom-[22%] md:left-[33%]" />
        </div>
      </div>

      <div className="absolute top-[22%] right-[-4%] md:top-[22%] md:right-[4%] lg:-right-10 lg:top-24 ">
        <Indicators
          label="Healthy Heart"
          icon="❤️"
          textColor="text-white"
          backgroundColor="bg-blue-900"
        />
      </div>

      <div className="absolute  bottom-[26%] left-[2%] md:bottom-[26%] md:left-[9%] lg:-left-4.5 lg:bottom-29">
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
