import React, { useState } from "react";
import { FaUpload, FaImage, FaVideo } from "react-icons/fa";

export default function UploadMovie() {
  const [rating, setRating] = useState(5);
  const [posterPreview, setPosterPreview] = useState(null);
  const [backdropPreview, setBackdropPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [posterError, setPosterError] = useState("");
  const [backdropError, setBackdropError] = useState("");
  const [videoError, setVideoError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    releaseYear: "",
    ageRating: "",
    genre: "",
    contentType: "",
    releaseType: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImagePreview = (e, setPreview, setError, maxMB) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > maxMB * 1024 * 1024) {
        setError(`File size should be less than ${maxMB}MB`);
        setPreview(null);
        return;
      }
      setError("");
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleVideoValidation = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024 * 1024) {
        setVideoError("Video file must be less than 500MB");
        setVideoPreview(null);
      } else {
        setVideoError("");
        const videoURL = URL.createObjectURL(file);
        setVideoPreview(videoURL);
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = (e) => {
    if (e) e.preventDefault();
    setFormData({
      title: "",
      description: "",
      duration: "",
      releaseYear: "",
      ageRating: "",
      genre: "",
      contentType: "",
      releaseType: "",
    });
    setPosterPreview(null);
    setBackdropPreview(null);
    setVideoPreview(null);
    setPosterError("");
    setBackdropError("");
    setVideoError("");
    setRating(5);
    setMessage("");
  };

  const handleSubmit = () => {
    if (!posterPreview || !backdropPreview || !videoPreview) {
      setMessage("Please upload all files: poster, backdrop, and video.");
      return;
    }
    if (
      !formData.title ||
      !formData.description ||
      !formData.duration ||
      !formData.releaseYear ||
      !formData.ageRating ||
      !formData.genre ||
      !formData.contentType ||
      !formData.releaseType
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setMessage("Movie uploaded successfully!");
    setTimeout(() => {
      setLoading(false);
      resetForm();
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-6 text-white w-full max-w-7xl mx-auto min-h-screen border border-yellow-400 rounded-xl">
      <h2 className="text-center text-3xl mb-10 text-yellow-400 font-bold">
        Upload Movie
      </h2>
      <div className="w-full space-y-8 mb-10">
        <div>
          <label className="text-yellow-400 text-base font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter movie title"
            className="w-full mt-2 px-4 py-4 rounded-md bg-black border border-yellow-400"
          />
        </div>

        <div>
          <label className="text-yellow-400 text-base font-medium">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter movie description"
            className="w-full mt-2 px-4 py-4 rounded-md bg-black border border-yellow-400"
            rows="5"
          ></textarea>
        </div>
      </div>

      {message && (
        <div className="text-center mb-4 text-green-400 font-semibold w-full max-w-4xl">
          {message}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6 mt-2 w-full max-w-6xl">
        <div className="bg-black border-2 border-dashed border-yellow-400 p-10 text-center rounded-lg shadow-lg">
          <p className="text-yellow-400 font-semibold flex justify-center items-center gap-2 text-lg">
            <FaImage className="text-yellow-400 text-xl" /> Poster Image
          </p>
          <p className="text-sm text-gray-400 mb-2">
            PNG, JPG, WEBP up to 10MB
          </p>
          <input
            type="file"
            className="hidden"
            id="poster"
            onChange={(e) =>
              handleImagePreview(e, setPosterPreview, setPosterError, 10)
            }
          />
          <label
            htmlFor="poster"
            className="cursor-pointer text-sm text-gray-300"
          >
            Click to browse or drag & drop
          </label>
          {posterError && (
            <p className="text-red-500 text-xs mt-1">{posterError}</p>
          )}
          {posterPreview && (
            <img
              src={posterPreview}
              alt="Poster Preview"
              className="mt-3 w-full h-96 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="bg-black border-2 border-dashed border-yellow-400 p-10 text-center rounded-lg shadow-lg">
          <p className="text-yellow-400 font-semibold flex justify-center items-center gap-2 text-lg">
            <FaImage className="text-yellow-400 text-xl" /> Backdrop Image
          </p>
          <p className="text-sm text-gray-400 mb-2">
            PNG, JPG, WEBP up to 10MB
          </p>
          <input
            type="file"
            className="hidden"
            id="backdrop"
            onChange={(e) =>
              handleImagePreview(e, setBackdropPreview, setBackdropError, 10)
            }
          />
          <label
            htmlFor="backdrop"
            className="cursor-pointer text-sm text-gray-300"
          >
            Click to browse or drag & drop
          </label>
          {backdropError && (
            <p className="text-red-500 text-xs mt-1">{backdropError}</p>
          )}
          {backdropPreview && (
            <img
              src={backdropPreview}
              alt="Backdrop Preview"
              className="mt-3 w-full h-96 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="bg-black border-2 border-dashed border-yellow-400 p-10 text-center rounded-lg shadow-lg">
          <p className="text-yellow-400 font-semibold flex justify-center items-center gap-2 text-lg">
            <FaVideo className="text-yellow-400 text-xl" /> Video File
          </p>
          <p className="text-sm text-gray-400 mb-2">
            MP4, AVI, MOV, WEBM up to 500MB
          </p>
          <input
            type="file"
            className="hidden"
            id="video"
            onChange={handleVideoValidation}
          />
          <label
            htmlFor="video"
            className="cursor-pointer text-sm text-gray-300"
          >
            Click to browse or drag & drop
          </label>
          {videoError && (
            <p className="text-red-500 text-xs mt-1">{videoError}</p>
          )}
          {videoPreview && (
            <video
              className="mt-3 w-full h-96 object-cover rounded-lg"
              controls
            >
              <source src={videoPreview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>

      <div className=" grid md:grid-cols-2 gap-6 w-full mt-8">
        <div>
          <label className="text-yellow-400 text-base font-medium">
            Duration (minutes)
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="e.g., 120"
            className="w-full mt-2 px-4 py-3 rounded-md bg-black border border-yellow-400"
          />
        </div>

        <div>
          <label className="text-yellow-400 text-base font-medium">
            Release Year
          </label>
          <input
            type="text"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleInputChange}
            placeholder="e.g., 2024"
            className="w-full mt-2 px-4 py-3 rounded-md bg-black border border-yellow-400"
          />
        </div>
      </div>

      <div className="mt-8 w-full ">
        <label className="text-yellow-400 block mb-2 text-base font-medium">
          Average Rating (1-10)
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full"
        />
        <p className="text-right text-yellow-400 text-sm">{rating}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-8 w-full ">
        <select
          name="ageRating"
          value={formData.ageRating}
          onChange={handleInputChange}
          className="bg-black border border-yellow-400 px-4 py-3 rounded-md text-white"
        >
          <option className="text-white bg-black">Select Age Rating</option>
          <option className="text-white bg-black">10+</option>
          <option className="text-white bg-black">13+</option>
          <option className="text-white bg-black">16+</option>
          <option className="text-white bg-black">18+</option>
        </select>

        <select
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
          className="bg-black border border-yellow-400 px-4 py-3 rounded-md text-white"
        >
          <option className="text-white bg-black">Select Genre</option>
          <option className="text-white bg-black">Action</option>
          <option className="text-white bg-black">Adventure</option>
          <option className="text-white bg-black">Comedy</option>
          <option className="text-white bg-black">Drama</option>
          <option className="text-white bg-black">Fantasy</option>
          <option className="text-white bg-black">Horror</option>
        </select>

        <select
          name="contentType"
          value={formData.contentType}
          onChange={handleInputChange}
          className="bg-black border border-yellow-400 px-4 py-3 rounded-md text-white"
        >
          <option className="text-white bg-black">Select Content Type</option>
          <option className="text-white bg-black">Movie</option>
          <option className="text-white bg-black">TV Show</option>
          <option className="text-white bg-black">Web Series</option>
        </select>

        <select
          name="releaseType"
          value={formData.releaseType}
          onChange={handleInputChange}
          className="bg-black border border-yellow-400 px-4 py-3 rounded-md text-white"
        >
          <option className="text-white bg-black">Select Release Type</option>
          <option className="text-white bg-black">Theatrical</option>
          <option className="text-white bg-black">OTT</option>
          <option className="text-white bg-black">TV Premiere</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-3 text-lg ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
          }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-black"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            <>
              <FaUpload /> Upload Movie
            </>
          )}
        </button>

        <button
          onClick={resetForm}
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg font-bold flex items-center justify-center gap-3 text-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
