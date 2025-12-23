import { Menu, X, Home, Settings } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white p-2 rounded-lg shadow"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40
          w-64 bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">

          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition">
      {icon}
      <span>{label}</span>
    </div>
  );
}
