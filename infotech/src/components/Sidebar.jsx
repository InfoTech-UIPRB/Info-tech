// Sidebar.js
import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Example for a collapsible sidebar

  return (
    <aside className={`bg-gray-800 text-whitebg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0
        duration-300 ease-in-out md:fixed md:translate-x-0 w-65`}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">App Name</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? 'Collapse' : 'Expand'}
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;