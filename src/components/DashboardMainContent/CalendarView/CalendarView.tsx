import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import SimpleAppointmentCard from "../../SimpleAppointmentCard/SimpleAppointmentCard";
import { FiPlus } from "react-icons/fi";
import { days } from "../../../data/calenderData";
import { timeSlots } from "../../../data/calenderData";

export default function CalendarView() {
  return (
    <div>
      <div className="flex justify-end p-2 mb-4">
        <div className="flex gap-3 items-end">
          <div className="rounded-lg p-2 w-8 h-8 lg:w-10 lg:h-10 md:w-15 md:h-15 bg-cyan-400 flex items-center justify-center">
            <img
              src="/src/assets/image copy.png"
              alt="background"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="rounded-lg p-2 w-8 h-8 lg:w-10 lg:h-10 md:w-15 md:h-15 bg-blue-900 flex items-center justify-center">
            <FiPlus color="white" className="text-xl md:text-7xl" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-2">
        <h1 className="text-sm lg:text-[17px] md:text-2xl lg:font-bold font-medium text-blue-950">
          October 2021
        </h1>
        <div className="flex gap-2.5">
          <RiArrowLeftFill className="text-blue-900 cursor-pointer text-lg md:text-3xl lg:text-xl" />
          <RiArrowRightFill className="text-blue-900 cursor-pointer text-lg md:text-3xl lg:text-xl" />
        </div>
      </div>
      <div className="bg-gray-50/80">
        <div className="bg-blue-50/80 overflow-hidden">
          <div className="grid grid-cols-7 gap-0">
            {days.map((day, i) => (
              <div
                key={i}
                className={`${day.name === "Sun" ? "opacity-50" : ""} ${
                  day.name === "Tues" ? "bg-blue-100 rounded-2xl" : ""
                } `}
              >
                <div className="py-2 lg:py-4 md:py-8 text-center">
                  <div className="text-xs md:text-xl lg:text-xs text-blue-950 font-medium">
                    {day.name}
                  </div>
                  <div className="text-lg md:text-3xl lg:text-xl font-bold text-blue-950 mt-1">
                    {day.date}
                  </div>
                </div>
                <div className="p-1 lg:p-2">
                  {timeSlots[i].times.map((time, slotIndex) => (
                    <div key={slotIndex} className="mb-1 lg:mb-2 md:mb-4">
                      <div
                        className={`${timeSlots[i].backgrounds[slotIndex]} rounded-xl py-1 lg:py-1.5 md:py-3 flex flex-col items-center justify-center text-xs lg:text-xs md:text-xl font-medium text-blue-950`}
                      >
                        <span className="flex flex-col items-center gap-0 bg-transparent text-center outline-none text-xs md:text-xl lg:text-xs h-4 justify-center">
                          <span>{time ? time : "---"}</span>
                          <span className="h-1 flex items-center justify-center">
                            {timeSlots[i].dot === slotIndex ? "•" : ""}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 md:gap-6 pt-2.5 bg-blue-50/80 p-2">
          <SimpleAppointmentCard
            type="Dentist"
            doctor="Dr.Cameron Williamson"
            time="09:00-11:00"
            icon="🦷"
          />
          <SimpleAppointmentCard
            type="Physiotherapy Appoinment"
            time="11:00-12:00"
            doctor="Dr.Kevin Djones"
            icon=" 💪🏻"
            current={false}
          />
        </div>
      </div>
    </div>
  );
}
