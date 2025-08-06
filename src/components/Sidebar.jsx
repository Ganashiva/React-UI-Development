import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`
        fixed md:static z-50 top-0 left-0 h-full bg-gray-800 text-white w-64 p-6 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={() => setOpen(false)} className="text-white text-2xl">
          ✕
        </button>
      </div>

      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/dash"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400"
          >
            {" "}
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/genres"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400"
          >
            Manage Genres
          </Link>
        </li>
        <li>
          <Link
            to="/upload"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400"
          >
            Manage Movies
          </Link>
        </li>

        {/* <li>
          <Link
            to="/watch-age"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400"
          >
            Manage Watch Age
          </Link>
        </li> */}
        <li>
          <Link
            to="/logout"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
