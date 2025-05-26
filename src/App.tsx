import ActivityFeed from "./components/ActivityFeed/ActivityFeed";
import CalendarView from "./components/CalendarView/CalendarView";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import SimpleAppointmentCard from "./components/SimpleAppointmentCard/SimpleAppointmentCard";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";

function App() {
  return (
    <div className="bg-blue-200/40 backdrop-blur-md p-4 w-full">
      <div className="bg-white rounded-4xl shadow-2xl p-3 flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-1/2 pl-6 flex flex-col gap-6 pr-4 mb-10">
          <Header />
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className="flex flex-col w-1/2 p-4 bg-blue-50/90 rounded-r-4xl">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default App;
