export default function SimpleAppointmentCard({
  type,
  doctor,
  time,
  icon,
  current = true,
}: {
  type: string;
  doctor?: string;
  time: string;
  icon: string;
  current?: boolean;
}) {
  return (
    <div className={`
    ${current ? "bg-blue-900 text-white" : "bg-blue-200/60 text-blue-950"}
    rounded-2xl lg:rounded-3xl md:rounded-4xl p-3 lg:p-4 md:p-6 flex flex-col h-fit w-full sm:w-fit min-w-0
  `}>
    <div className="flex items-center justify-between pb-1 gap-4 lg:gap-10 md:gap-15">
      <div className="font-semibold text-sm lg:text-md md:text-2xl truncate">{type}</div>
      <div className="text-base lg:text-lg md:text-3xl flex-shrink-0">{icon}</div>
    </div>
    <div className="flex-1">
      <div className="text-xs lg:text-sm   md:text-xl opacity-90">{time}</div>
      {doctor && (
        <div className="text-xs  md:text-lg font-medium opacity-90 truncate">{doctor}</div>
      )}
    </div>
  </div>
  );
}
