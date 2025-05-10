import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';

const Calendar = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [activityInformation, setActivityInformation] = useState([
    { title: '', description: '', room: '' }
  ]);

  const Sidebar = () => {
    return (
      <div
      className="fixed inset-0 flex h-full w-full bg-black/40"
      onClick={toggleSideBar}
    >
      {/* Sidebar */}
      <div
        className="relative bg-white/80 backdrop-blur-md w-64 max-w-xs h-full p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside sidebar
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Information of Activity</h2>
          <button
            onClick={toggleSideBar}
            className="text-gray-500 hover:text-gray-800"
          >
            Close
          </button>
        </div>
          <ul className="space-y-4">
              <li>Title: {activityInformation.title}</li>
              <li>Room: {activityInformation.room}</li>
              <li>Description: {activityInformation.description}</li>
          </ul>
      </div>
    </div>
    )
  }
  
  const toggleSideBar = () =>{
    setIsSidebarOpen(!isSideBarOpen)
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = 31;
  const startingDay = 4; //In what day does the month start. For example may starts in Thrusday, soo that means Sun, Mon, Tues, Weds will be blanck.

  const blankDays = Array(startingDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  //Days that have activities
  //Example: 20
  const activitiesDates = [];

  //When the day is in the array(activitiesDates) then we will get the information of the activities
  //Example: 20: {title: 'Linux101', room: 'F201', description: 'I use Arch by the way'},
  const allActivityInformation = {

  }
  return (
  <>
    <NavBar />

    {/*Start of Calendar */}
    <div className="p-4 max-w-4xl mx-auto fadeInUp-animation">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">May 2025</h2>

      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center text-gray-300 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-semibold">{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty starting days */}
        {blankDays.map((_, idx) => (
          <div key={`blank-${idx}`} />
        ))}

        {/* Actual days */}
        {days.map((day) => (

          <div
            key={day}
            className={`p-2 rounded-lg ${activitiesDates.includes(day) ? "bg-green-600" : "bg-gray-700"} text-white hover:bg-blue-500 transition-colors cursor-pointer`}
            onClick={() => {
              if (activitiesDates.includes(day)) {
                setActivityInformation({
                  title: allActivityInformation[day].title,
                  description: allActivityInformation[day].description,
                  room: allActivityInformation[day].room,
                });
                toggleSideBar();
              }
            }}
          >
            {day}
          </div>

        ))}
      </div>
    </div>
    {/* End of Calendar */}

    {/* Sidebar */}
    {isSideBarOpen && (
      <Sidebar />
    )}

    <Footer />
  </>
  );
};

export default Calendar;
