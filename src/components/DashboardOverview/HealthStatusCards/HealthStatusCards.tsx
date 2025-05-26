import { TiArrowRight } from "react-icons/ti";
import HealthCard from "./HealthCard";

export default function HealthStatusCards() {
  return (
   <div className="flex flex-col lg:pl-6 xl:pl-10 pr-2 lg:pr-5 mb-5">
    <div className="relative flex flex-col gap-3">
      <HealthCard
        icon="🫁"
        title="Lungs"
        date="24 Oct 2024"
        progress="75"
        color="bg-red-500"
      />
      <HealthCard
        icon="🦷"
        title="Teeth"
        date="26 Oct 2024"
        progress="75"
        color="bg-teal-500"
      />
      <HealthCard
        icon="🦴"
        title="Bone"
        date="26 Oct 2024"
        progress="75"
        color="bg-orange-500"
      />
      <div className="flex gap-1 items-center absolute -right-2 lg:-right-5 -bottom-6">
        <span className="text-xs text-blue-950/70 font-bold">Details</span>
        <span>
          <TiArrowRight size={15} className="text-blue-900/50" />
        </span>
      </div>
    </div>
  </div>
  );
}
