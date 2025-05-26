import { IoChevronDownOutline } from "react-icons/io5";
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";

export default function DashboardOverview() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h1 className="text-2xl md:text-3xl md:font-bold lg:text-3xl font-extrabold text-[#00008B]">
          Dashboard
        </h1>
        <div className="flex gap-1 items-center">
          <span className="text-xs md:text-lg text-blue-950/70 font-bold">
            This Week
          </span>
          <span>
            <IoChevronDownOutline className="text-blue-900/50 text-sm md:text-xl mt-0.5" />
          </span>
        </div>
      </div>
      <div className="pt-4 flex flex-col lg:flex-row lg:pl-6 gap-4">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
}
