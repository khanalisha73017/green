import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  POST_LOGIN_ERROR,
  POST_LOGIN_LOADING,
  POST_LOGIN_SUCCESS,
} from "../redux/authReducer/actionType";
import { useDispatch } from "react-redux";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      let userObj = { email, password };
      console.log(userObj);
      loginUser(userObj, navigate);
    }
  };
  const loginUser = async (userObj, navigate) => {
    dispatch({ type: POST_LOGIN_LOADING });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        userObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, "LOGIN");
      console.log(response.data.existinguser.avatar, "login page avatar");
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        let user = response.data.existinguser; //images/asdfadfadsf.png
        console.log(user.avatar, "ogin1");
        let userWithProfile = {
          ...user,
          avatar: `${process.env.REACT_APP_API_URL}/${user.avatar}`, //http:locahost:8080/images/24123412341234/jp
        };
        localStorage.setItem("avatar", userWithProfile.avatar);
        localStorage.setItem("name", userWithProfile.name);
        localStorage.setItem("email", userWithProfile.email);
        console.log(userWithProfile.avatar, "login2");
        dispatch({
          type: POST_LOGIN_SUCCESS,
          payload: userWithProfile,
          isAuth: true,
        });

        navigate("/dashboard");

        alert("Login successful!");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: POST_LOGIN_ERROR });
      alert("Please Register yourSelf first ");
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary_green focus:border-primary_green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary_green focus:border-primary_green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary_green dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary_green dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary_green hover:underline dark:text-primary_green"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full  focus:outline-none focus:ring-primary_green font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/"
                  className="font-medium text-primary_green hover:underline dark:text-primary_green"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
