import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditUser = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await api.get(`/profile/${id}`);
        setForm(res.data);
        console.log(res.data);
      } catch (error) {
        alert("Failed to load user details");
      }
    };
    getUser();
  }, [id]);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${id}`, form);
      alert("User updated successfully!");
      nav("/admin");
    } catch (error) {
      alert("Error updating user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-100 px-6">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-indigo-100"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Edit User Information
        </h2>

        {/* Name Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter user name"
            name="name"
            value={form.name}
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          />
        </div>

        {/* Image URL Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Profile Image URL
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            name="imageUrl"
            value={form.imageUrl}
            onChange={change}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-200"
          />
        </div>

        {/* Preview Image */}
        {form.imageUrl && (
          <div className="flex justify-center mb-6">
            <img
              src={form.imageUrl}
              alt="Preview"
              className="w-24 h-24 rounded-full border-4 border-indigo-200 shadow-md object-cover"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition duration-200"
        >
          Save Changes
        </button>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => nav("/admin")}
          className="w-full mt-3 bg-gray-100 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-200 transition duration-200"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
