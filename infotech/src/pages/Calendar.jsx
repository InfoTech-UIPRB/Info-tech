import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer";

const Calendar = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [activityInformation, setActivityInformation] = useState([
    { title: "", description: "", time: "", room: "" },
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
            <li>Time: {activityInformation.time}</li>
            <li>Room: {activityInformation.room}</li>
            <li>Description: {activityInformation.description}</li>
          </ul>
        </div>
      </div>
    );
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSideBarOpen);
  };

  const dateInfo = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //Getting current Month Index
  const currentMonthIndex = dateInfo.getMonth();

  //Getting current Month String
  const currentMonth = month[currentMonthIndex];

  //Getting current Year. Number not a string
  const currentYear = dateInfo.getFullYear();

  //Getting the last day of the previous month. Thats why we are adding a plus one.
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  //In what day does the month start. For example may starts in Thrusday, soo that means Sun, Mon, Tues, Weds will be blanck.
  const startingDay = new Date(currentYear, currentMonthIndex, 1).getDay();

  //I what day does the month start. If the day of the month start at Wed that means that Sun, Mon and Tue will be blank
  const blankDays = Array(startingDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  //Days that have activities
  //Example: 20
  const activitiesDates = [18];

  //When the day is in the array(activitiesDates) then we will get the information of the activities
  //Example: 20: {title: 'Linux101', room: 'F201', description: 'I use Arch by the way'},
  const allActivityInformation = {
    // Noviembre
    18: {
      title: "Taller de Git/GitHub",
      time: "4:30pm - 5:30pm",
      room: "F-201",
      description:
        "🎓 Aprende los fundamentos de Git y GitHub: su historia 🧭, configuración inicial ⚙️ y flujo de trabajo real 💻. Participa en ejercicios prácticos para commit, push, pull y clone 🚀, y descubre cómo resolver merge conflicts y crear pull requests 🤝. Ideal para principiantes y entusiastas de la colaboración en equipo 👥.",
    },
  };
  return (
    <>
      <NavBar />

      {/*Start of Calendar */}
      <div className="p-4 max-w-full mx-auto fadeInUp-animation">
        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-4 text-white">
          {currentMonth} {currentYear}
        </h2>

        {/* Days of the week */}
        <div className="grid grid-cols-7 gap-2 text-center xl:text-3xl lg:text-2xl md:text-xl text-gray-300 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
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
              className={`p-2 rounded-lg ${
                activitiesDates.includes(day) ? "bg-green-600" : "bg-gray-700"
              } text-white hover:bg-blue-500 transition-colors cursor-pointer xl:h-50 lg:h-40 md:h-30 sm:h-20 h-15`}
              onClick={() => {
                if (activitiesDates.includes(day)) {
                  setActivityInformation({
                    title: allActivityInformation[day].title,
                    time: allActivityInformation[day].time,
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
      {isSideBarOpen && <Sidebar />}

      <Footer />
    </>
  );
};

export default Calendar;
