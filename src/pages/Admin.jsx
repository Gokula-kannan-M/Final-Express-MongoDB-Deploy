import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      await api.delete(`/${id}`);
      alert("User deleted successfully!");
      loadUsers();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          User Management Dashboard
        </h1>

        {/* Users Grid */}
        {users.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white shadow-md rounded-xl p-5 border border-indigo-100 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h2>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.role === "admin"
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-violet-100 text-violet-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => nav(`/edit/${user._id}`)}
                    className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium px-4 py-1.5 rounded-md hover:opacity-90 transition duration-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white font-medium px-4 py-1.5 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-10">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Admin;
