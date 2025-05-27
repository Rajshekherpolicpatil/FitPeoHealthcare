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
    <div className="space-y-4">
      <div className="rounded-2xl py-4 pr-4 lg:pr-6 pl-4 cursor-pointer bg-blue-50/90">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-3">
            <div className="text-4xl lg:text-3xl md:text-6xl">{icon}</div>
            <div>
              <h3 className="text-lg md:text-3xl lg:text-[18px] font-bold  text-gray-800">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <p className="py-2 text-xs md:text-lg md:pl-2.5 lg:pl-0 lg:text-xs text-gray-400 font-bold">Date: {date}</p>
        <div className="mb-3">
          <div className="w-full lg:w-[150px] md:h-4 lg:h-2 bg-gray-400/30 rounded-full h-2">
            <div
              className={`${color} h-2 md:h-4  lg:h-2 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
