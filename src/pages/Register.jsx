import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    adminCode: "",
    imageUrl: "",
  });

  const nav = useNavigate();

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/register", form);
      console.log(res.data);
      alert("Registered successfully!");
      nav("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-100 px-6">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-indigo-100"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Create an Account
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            required
            value={form.name}
            name="name"
            placeholder="Enter your name"
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            required
            value={form.email}
            name="email"
            placeholder="Enter your email"
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            required
            value={form.password}
            name="password"
            placeholder="Enter your password"
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-200"
          />
        </div>

        {/* Image URL */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Profile Image URL
          </label>
          <input
            type="text"
            required
            value={form.imageUrl}
            name="imageUrl"
            placeholder="Paste your image URL"
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-200"
          />
        </div>

        {/* Image Preview */}
        {form.imageUrl && (
          <div className="flex justify-center mb-6">
            <img
              src={form.imageUrl}
              alt="Preview"
              className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md object-cover"
            />
          </div>
        )}

        {/* Role Selection */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Role</label>
          <select
            value={form.role}
            required
            name="role"
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Admin Code */}
        {form.role === "admin" && (
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Admin Code
            </label>
            <input
              type="text"
              required
              value={form.adminCode}
              name="adminCode"
              placeholder="Enter admin access code"
              onChange={change}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition duration-200"
        >
          Register
        </button>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => nav("/login")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline hover:text-indigo-700"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
