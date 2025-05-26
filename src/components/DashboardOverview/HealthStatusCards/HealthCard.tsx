export default function HealthCard({
  icon,
  title,
  date,
  progress,
  color,
}: {
  icon: string;
  title: string;
  date: string;
  progress: string;
  color: string;
}) {
  return (
    <div className="space-y-4 ">
      <div className="rounded-2xl py-4 pr-6 pl-4 cursor-pointer bg-blue-50/90">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
          </div>
        </div>
        <p className="py-2 text-xs text-gray-300 font-bold">Date: {date}</p>
        <div className="mb-3">
          <div className="w-[150px] bg-gray-400/30 rounded-full h-2">
            <div
              className={`${color} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
