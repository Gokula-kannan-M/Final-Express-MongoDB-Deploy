import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-100 px-6 text-center">
      {/* 404 Heading */}
      <h1 className="text-9xl font-extrabold text-indigo-600 mb-4">404</h1>

      {/* Subtext */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Go Home Button */}
      <button
        onClick={() => nav("/")}
        className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:opacity-90 transition duration-200"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
