import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";

export default function UpcomingSchedule() {
  return (
    <div className="p-3">
    <h1 className="text-base lg:text-lg text-blue-950 font-bold py-4 md:text-3xl">The Upcoming Schedule</h1>
    <div className="py-2 mb-4">
      <span className="text-gray-400 text-sm md:text-xl lg:text-sm lg:font-semibold">On Thursday</span>
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2.5 md:gap-6">
        <SimpleAppointmentCard
          type="Health checkup complete"
          time="11:00 AM"
          icon="💉"
          current={false}
        />
        <SimpleAppointmentCard
          type="Ophthalmologist"
          time="14:00 PM"
          icon="👁️"
          current={false}
        />
      </div>
    </div>
    <div className="py-2 mb-4">
      <span className="text-gray-400 text-sm  md:text-xl lg:text-sm lg:font-semibold">On Saturday</span>
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2.5 md:gap-6">
        <SimpleAppointmentCard
          type="Cardiologist"
          time="12:00 AM"
          icon="❤️"
          current={false}
        />
        <SimpleAppointmentCard
          type="Neurologist"
          time="16:00 PM"
          icon="👨‍⚕️"
          current={false}
        />
      </div>
    </div>
  </div>
  );
}
