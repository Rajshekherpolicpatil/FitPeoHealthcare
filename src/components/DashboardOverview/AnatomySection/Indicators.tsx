export default function Indicators({
  label,
  icon,
  textColor,
  backgroundColor,
}: {
  label: string;
  icon: string;
  textColor: string;
  backgroundColor: string;
}) {
  return (
   <div className={`flex items-center gap-1 pr-2 lg:pr-3 pl-2 py-1 rounded-lg ${backgroundColor}`}>
    <span className="m-1 text-xs lg:text-sm md:text-2xl">{icon}</span>
    <span className={`text-nowrap font-bold text-xs md:text-xl ${textColor}`}>{label}</span>
  </div>
  );
}
