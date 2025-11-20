import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/head-01-01.png";
import FloatingInput from "../components/FloatingInput";
import { toast } from "react-toastify";
import { localHost, renderAPI } from "../constants";
import { AdminContext } from "../context/AdminContext";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { setUser, setToken, user } = useContext(AdminContext);

  const allFieldsFilled = Object.values(loginData).every(
    (val) => val.trim() !== ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allFieldsFilled) return;

    setLoading(true);
    try {
      const res = await axios.post(
        `${
          location.origin.includes("localhost") ? localHost : renderAPI
        }/api/auth/login`,
        loginData
      );

      const { token, name, email, role } = res.data;

      // Check if user is admin
      if (role !== "admin") {
        toast.error("Access denied. Admin credentials required.");
        setLoading(false);
        return;
      }

      setUser(res.data);
      setToken(token);

      const expiry = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem(
        "bj_adminData",
        JSON.stringify({ token, name, email, role, expiry })
      );

      toast.success("Welcome back, Admin!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="bg-gray-800 flex flex-col min-h-screen items-center justify-center">
      <div className="text-center px-10 w-full">
        <img
          src={logo}
          className="w-[120px] h-[120px] object-contain m-auto mb-4"
          alt="BlueJag logo"
        />

        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-3 mb-6">
          <p className="text-blue-400 font-bold text-sm">🔐 ADMIN ACCESS</p>
          <p className="text-blue-300 text-xs mt-1">
            Authorized personnel only
          </p>
        </div>

        <p className="font-bold montserrat text-2xl mb-2 text-white">
          ADMIN LOGIN
        </p>
        <p className="px-8 mt-2 mb-6 text-gray-400 text-sm">
          Sign in to access the admin dashboard
        </p>

        <form onSubmit={handleSubmit} className="max-w-[500px] m-auto">
          <FloatingInput
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            label={"Admin Email"}
            type="email"
            className="text-white"
          />

          <FloatingInput
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            label={"Password"}
            isPassword
            className="text-white"
          />

          <button
            type="submit"
            disabled={!allFieldsFilled || loading}
            className={`mt-8 rounded-4xl ${
              allFieldsFilled
                ? "bg-blue-800 hover:bg-blue-900"
                : "bg-blue-300 cursor-not-allowed"
            } text-white montserrat font-bold px-8 py-4 text-sm m-auto w-[80%] max-w-[300px] transition-all duration-200`}
          >
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-sm">
          Not an admin?{" "}
          <strong
            onClick={() => navigate("/signin")}
            className="underline montserrat cursor-pointer text-white"
          >
            User Login
          </strong>
        </p>
      </div>
    </div>
  );
};

export default AdminSignIn;
