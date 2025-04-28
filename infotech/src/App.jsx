// App.jsx
import { BrowserRouter as RouterProvider, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directive from "./pages/Directive.jsx";
import Page404 from "./pages/404Page.jsx";
import Achievement from "./pages/Achievement.jsx"
import Activity from "./pages/Activity.jsx";
import Calendar from "./pages/Calendar.jsx";

function App() {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/pages" element={<Home />} />
        <Route path="/pages/directive" element={<Directive />}/>
        <Route path="/pages/achievement" element={<Achievement />}/>
        <Route path="/pages/activity" element={<Activity />} />
        <Route path="/pages/calendar" element={<Calendar />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
