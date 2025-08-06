// import React, { useState } from "react";

// const dummyGenres = [
//   "Romance",
//   "Mystery",
//   "Fantasy",
//   "Thriller",
//   "Adventure",
//   "Horror",
// ];

// export default function GenreManager() {
//   const [genres, setGenres] = useState(dummyGenres);
//   const [editIndex, setEditIndex] = useState(null);
//   const [genreName, setGenreName] = useState("");

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setGenreName(genres[index]);
//   };

//   const handleUpdate = () => {
//     const updated = [...genres];
//     updated[editIndex] = genreName;
//     setGenres(updated);
//     setEditIndex(null);
//     setGenreName("");
//   };

//   const handleDelete = (index) => {
//     const updated = genres.filter((_, i) => i !== index);
//     setGenres(updated);
//     setEditIndex(null);
//     setGenreName("");
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg">
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-2">Edit Genre</h2>
//         <input
//           type="text"
//           className="w-full p-2 rounded bg-gray-700 text-white mb-4"
//           value={genreName}
//           onChange={(e) => setGenreName(e.target.value)}
//         />
//         <button
//           className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
//           onClick={handleUpdate}
//         >
//           Update Genre
//         </button>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-2">Existing Genres</h2>
//         <div className="grid gap-3">
//           {genres.map((g, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-700 px-4 py-2 rounded flex justify-between items-center"
//             >
//               <span>{g}</span>
//               <div className="space-x-2">
//                 <button
//                   onClick={() => handleEdit(idx)}
//                   className="bg-yellow-500 px-2 py-1 rounded"
//                 >
//                   ✏️
//                 </button>
//                 <button
//                   onClick={() => handleDelete(idx)}
//                   className="bg-red-600 px-2 py-1 rounded"
//                 >
//                   🗑️
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <p className="mt-4 text-yellow-400">Total Genres: {genres.length}</p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaMusic, FaEdit, FaTrash, FaTimes, FaUser } from "react-icons/fa";

const dummyGenres = [
  "Romance",
  "Mystery",
  "Fantasy",
  "Thriller",
  "Adventure",
  "Horror",
];

export default function GenreManager() {
  const [genres, setGenres] = useState(dummyGenres);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (input.trim()) {
      setLoading(true);
      setTimeout(() => {
        setGenres([...genres, input.trim()]);
        setInput("");
        setLoading(false);
        setMessage("Genre added successfully!");
        setTimeout(() => setMessage(null), 3000);
      }, 500);
    }
  };

  const handleDelete = (index) => {
    setLoading(true);
    setTimeout(() => {
      const update = genres.filter((_, i) => i !== index);
      setGenres(update);
      setMessage("Genre deleted successfully!");
      setTimeout(() => setMessage(null), 3000);
    }, 500);
  };

  const handleUpdate = () => {
    if (editValue.trim()) {
      setLoading(true);
      setTimeout(() => {
        const updated = [...genres];
        updated[editIndex] = editValue.trim();
        setGenres(updated);
        setEditIndex(null);
        setLoading(false);
        setMessage("Genre updated successfully!");
        setTimeout(() => setMessage(null), 3000);
      }, 500);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Add Genres</h1>
        <div className="bg-yellow-500 text-black px-4 py-2 rounded-full flex items-center gap-2 shadow">
          <FaUser />
          <span>Admin User</span>
        </div>
      </div>

      <p className="text-gray-300 mb-8">
        Organize content by genres and themes
      </p>

      {message && (
        <div className="mb-4 bg-green-500 text-black px-4 py-2 rounded shadow-md text-center">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Edit/Add Genre */}
        <div className="col-span-1 bg-[#1f1f1f] p-6 rounded-lg shadow-lg border border-yellow-600">
          <h2 className="text-xl font-bold mb-4">🎵 Edit Genre</h2>
          <label className="text-yellow-400 block mb-1">Genre Name</label>
          <div className="flex items-center bg-[#2a2a2a] rounded px-3 py-2 mb-4">
            <FaMusic className="mr-2 text-yellow-400" />
            <input
              type="text"
              className="bg-transparent focus:outline-none flex-1 text-white"
              placeholder="Enter genre"
              value={editIndex !== null ? editValue : input}
              onChange={(e) =>
                editIndex !== null
                  ? setEditValue(e.target.value)
                  : setInput(e.target.value)
              }
            />
          </div>

          {editIndex !== null ? (
            <div className="flex gap-3">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-yellow-500 text-black py-2 rounded shadow flex items-center justify-center gap-2 disabled:opacity-50"
                disabled={loading}
              >
                <FaEdit /> {loading ? "Updating..." : "Update Genre"}
              </button>
              <button
                onClick={() => setEditIndex(null)}
                className="bg-gray-600 px-4 py-2 rounded"
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className="w-full bg-yellow-500 text-black py-2 rounded shadow hover:bg-yellow-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Adding..." : "➕ Add Genre"}
            </button>
          )}
        </div>

        {/* Total Count */}
        <div className="col-span-1 bg-[#1f1f1f] rounded-lg p-6 flex flex-col justify-center items-center shadow border border-yellow-600">
          <h3 className="text-lg text-white">Total Genres</h3>
          <div className="text-4xl font-bold text-yellow-400 mt-2">
            {genres.length}
          </div>
          <p className="text-gray-400 text-sm mt-1">Manage content genres</p>
        </div>

        {/* Existing Genres */}
        <div className="col-span-1 md:col-span-1 bg-[#1f1f1f] p-6 rounded-lg shadow border border-yellow-600">
          <h2 className="text-xl font-bold mb-4">🎵 Existing Genres</h2>
          <ul className="space-y-3">
            {genres.map((genre, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-[#2a2a2a] px-4 py-2 rounded text-yellow-300"
              >
                <span>{genre}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditIndex(idx);
                      setEditValue(genre);
                    }}
                    className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600 text-black"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
