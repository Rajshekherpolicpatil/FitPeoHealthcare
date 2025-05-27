import ActivityFeed from "./components/DashboardMainContent/ActivityFeed/ActivityFeed";
import CalendarView from "./components/DashboardMainContent/CalendarView/CalendarView";
import DashboardOverview from "./components/DashboardMainContent/DashboardOverview/DashboardOverview";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import UpcomingSchedule from "./components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule";

function App() {
  return (
    <div className="bg-blue-200/40 backdrop-blur-md p-2 lg:p-4 min-h-screen absolute right-0 left-0">
      <div className="bg-white rounded-2xl lg:rounded-4xl shadow-2xl p-2  flex min-h-screen">
        <Sidebar />

        <div className="flex flex-col lg:flex-row w-full min-w-0">
          <div className="w-full lg:w-1/2 pl-3 lg:pl-6 flex flex-col gap-4 lg:gap-6 pr-2 lg:pr-4 mb-6 lg:mb-10">
            <Header />
            <DashboardOverview />
            <ActivityFeed />
          </div>

          <div className="flex flex-col w-full lg:w-1/2 p-2 lg:p-4 bg-blue-50/90 rounded-2xl  md:rounded-2xl lg:rounded-r-4xl lg:rounded-l-none  transform transition-transform duration-300 ease-in-out">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
