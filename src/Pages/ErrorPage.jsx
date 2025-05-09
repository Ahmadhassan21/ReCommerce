import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 ">
      <h1
        className="text-8xl  font-bold"
        style={{ textShadow: "4px 4px 2px rgba(0, 0, 0, 0.6)" }}
      >
        404
      </h1>
      <p className="text-xl text-gray-600 mt-4">OOPs! Page not found.</p>
      <Link to={"/"}  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
