// //
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     setTimeout(() => {
//       setLoading(false);
//       if (email === "ganashivagana2001@gmail.com" && password === "gana123") {
//         localStorage.setItem("auth", "true"); // ✅ store auth token first
//         navigate("/dash"); // ✅ then redirect to dashboard
//       } else {
//         setError("Invalid credentials. Try admin@example.com / admin123");
//       }
//     }, 1000);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg w-80 border border-yellow-600"
//       >
//         <h2 className="text-2xl text-white mb-6 text-center font-bold">
//           Admin Login
//         </h2>
//         {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="mb-4 w-full px-4 py-2 rounded bg-[#2a2a2a] text-white"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="mb-6 w-full px-4 py-2 rounded bg-[#2a2a2a] text-white"
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 disabled:opacity-50"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your real authentication logic
    if (email === "ganashivagana2001@gmail.com" && password === "gana123") {
      dispatch(login({ email }));
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
