import { useState } from "react";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";
import CalendarView from "./components/CalendarView/CalendarView";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";

function App() {
 const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-blue-200/40 backdrop-blur-md p-2 lg:p-4 min-h-screen absolute right-0 left-0">
      <div className="bg-white rounded-2xl lg:rounded-4xl shadow-2xl p-2 lg:p-3 flex min-h-screen">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <div className="flex flex-col lg:flex-row w-full min-w-0">
          <div className="w-full lg:w-1/2 pl-3 lg:pl-6 flex flex-col gap-4 lg:gap-6 pr-2 lg:pr-4 mb-6 lg:mb-10">
            <Header onMenuToggle={() => setSidebarOpen(true)} />
            <DashboardOverview />
            <ActivityFeed />
          </div>
          
          <div className="flex flex-col w-full lg:w-1/2 p-2 lg:p-4 bg-blue-50/90 rounded-2xl lg:rounded-r-4xl">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
