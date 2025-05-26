import { IoChevronDownOutline } from "react-icons/io5";
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";

export default function DashboardOverview() {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold text-[#00008B]">Dashboard</h1>
        <div className="flex gap-1 items-center">
          <span className="text-xs text-blue-950/70 font-bold">This Week</span>
          <span className="">
            <IoChevronDownOutline size={15} className="text-blue-900/50 " />
          </span>
        </div>
      </div>
      <div className="pt-4 pl-6 flex gap-4">
        <AnatomySection />
        <HealthStatusCards/>
      </div>
    </div>
  );
}
