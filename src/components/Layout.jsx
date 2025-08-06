// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex">
//       <button
//         className="md:hidden absolute top-4 left-4 z-50 p-2 bg-gray-700 rounded"
//         onClick={() => setOpen(true)}
//       >
//         {" "}
//         ☰{" "}
//       </button>
//       {open && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setOpen(false)}
//         />
//       )}
//       {/* Sidebar */}
//       <Sidebar open={open} setOpen={setOpen} />

//       {/*  Main Content */}
//       <main className="flex-1 p-6 z-10 relative md:static">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-700 rounded focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Overlay when sidebar is open on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-y-auto z-10 relative md:static transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
    </div>
  );
}
