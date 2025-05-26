import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";

export default function UpcomingSchedule() {
  return (
    <div className="p-3">
      <h1 className="text-lg text-blue-950 font-bold py-4">The Upcoming Schedule</h1>
      <div className="py-2 mb-4">
        <span className="text-gray-500">On Thursday</span>
        <div className="flex gap-4 pt-2.5">
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
        <span className="text-gray-500">On Saturday</span>
        <div className="flex gap-4 pt-2.5">
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
