import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Check if single user object or array
  if (user.role === "user") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-100 px-6">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-indigo-100">
          <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">
            Welcome, {user.name} 👋
          </h2>
          <p className="text-gray-600 text-center">
            <span className="font-medium">Role:</span>{" "}
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm ml-1">
              {user.role}
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    const userArr = user?.filter((u) => u._id === localStorage.getItem("id"));
    console.log(userArr);
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 border border-indigo-100">
          <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
            User Dashboard
          </h1>

          {userArr.length > 0 ? (
            <div className="flex flex-col items-center space-y-6">
              {userArr.map((user) => (
                <div
                  key={user._id}
                  className="w-full sm:w-2/3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                >
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="mt-2 text-sm">
                    Role:{" "}
                    <span className="bg-white text-indigo-600 font-medium px-2 py-0.5 rounded-md">
                      {user.role}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">No user found.</p>
          )}
        </div>
      </div>
    );
  }
};

export default Dashboard;
