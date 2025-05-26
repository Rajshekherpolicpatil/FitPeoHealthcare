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
    <div
      className={`${
        current ? "bg-blue-900 text-white" : "bg-blue-200/60 text-blue-950"
      } rounded-3xl p-4 flex flex-col h-fit w-fit `}
    >
      <div className="flex items-center justify-between pb-1 gap-10">
        <div className="font-semibold text-md">{type}</div>
        <div className="text-lg">{icon}</div>
      </div>

      <div className="flex-1">
        <div className="text-sm opacity-90">{time}</div>
        {doctor && (
          <div className="text-xs font-medium opacity-90">{doctor}</div>
        )}
      </div>
    </div>
  );
}
