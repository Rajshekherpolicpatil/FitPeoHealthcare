import { activityData, days } from "../../data/activityData";


export default function ActivityFeed() {
  return (
    <div className="bg-blue-50/80 p-3 rounded-3xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 md:mb-3">
        <h2 className="text-lg lg:text-lg md:text-3xl font-semibold text-[#00008B]">
          Activity
        </h2>
        <span className="text-sm text-gray-400 md:text-xl lg:text-sm">
          3 appointment on this week
        </span>
      </div>
      <div className="flex flex-col h-30 pt-2 pl-0.5 lg:pl-6">
        <div className="flex gap-[5.5px] lg:gap-3 md:gap-3.5 h-20 items-end ">
          {activityData.map((bar, index) => (
            <div key={index} className="flex-shrink-0">
              {bar.length === 2 ? (
                <div
                  className={`flex flex-col gap-1 ${
                    bar[0].height === 4 ? "mb-4" : ""
                  }`}
                >
                  <div
                    className={`w-1 md:w-1.5 lg:w-1 ${bar[0].color} rounded-full`}
                    style={{ height: `${bar[0].height * 4}px` }}
                  />
                  <div
                    className={`w-1 md:w-1.5 lg:w-1 ${bar[1].color} rounded-full`}
                    style={{ height: `${bar[1].height * 4}px` }}
                  />
                </div>
              ) : (
                <div
                  className={`w-1 md:w-1.5 lg:w-1 ${bar[0].color} rounded-full ${
                    bar[0].height === 10 ? "mb-5" : ""
                  }`}
                  style={{ height: `${bar[0].height * 4}px` }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-5.5 md:gap-15 lg:gap-12.5 md:pl-3 pl-1 py-2 lg:px-4 lg:py-2">
          {days.map((day) => (
            <span className="text-xs md:text-lg lg:text-xs text-gray-400 font-medium flex-shrink-0">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
