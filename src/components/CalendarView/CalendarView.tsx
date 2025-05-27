import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import { FiPlus } from "react-icons/fi";

const timeSlots = {
  0: {
    times: ["10:00", "11:00", "12:00"],
    backgrounds: [],
  },
  1: {
    times: ["08:00", "09:00", "10:00"],
    backgrounds: ["", "bg-blue-900 text-white", ""],
  },
  2: {
    times: ["12:00", "", "13:00"],
    backgrounds: [],
  },
  3: {
    times: ["10:00", "11:00", ""],
    backgrounds: ["", "bg-blue-900 opacity-50 text-white", ""],
  },
  4: {
    times: ["", "14:00", "16:00"],
    backgrounds: [],
  },
  5: {
    times: ["12:00", "14:00", "15:00"],
    backgrounds: ["bg-blue-900 text-white opacity-50", "", ""],
  },
  6: {
    times: ["09:00", "10:00", "11:00"],
    backgrounds: ["bg-blue-900  text-white", "", ""],
  },
};

const days = [
  { name: "Mon", date: 25 },
  { name: "Tues", date: 26 },
  { name: "Wed", date: 27 },
  { name: "Thurs", date: 28 },
  { name: "Fri", date: 29 },
  { name: "Sat", date: 30 },
  { name: "Sun", date: 31 },
];
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
          <RiArrowLeftFill className="text-blue-900 cursor-pointer text-lg md:text-3xl lg:text-xl"  />
          <RiArrowRightFill
            className="text-blue-900 cursor-pointer text-lg md:text-3xl lg:text-xl"
            
          />
        </div>
      </div>
      <div className="bg-gray-50/80">
        <div className="bg-blue-50/80 overflow-hidden">
          <div className="grid grid-cols-7 gap-0">
            {days.map((day, i) => (
              <div
                key={i}
                className={`${day.name === "Sun" ? "opacity-50" : ""}`}
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
                        className={`${timeSlots[i].backgrounds[slotIndex]} rounded-xl py-1 lg:py-1.5 md:py-3 flex items-center justify-center text-xs lg:text-xs md:text-xl font-medium text-blue-950`}
                      >
                        <input
                          value={time}
                          placeholder="-----"
                          className="bg-transparent text-center outline-none w-full text-xs md:text-xl lg:text-xs"
                          readOnly
                        />
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
            icon="💪"
            current={false}
          />
        </div>
      </div>
    </div>
  );
}
