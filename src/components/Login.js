import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { ArrowRight, Mail, Lock, User } from "lucide-react";
import Header from "./Header";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (newUser) {
        const username = e.target.username.value;
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, {
          displayName: username,
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      setError(getErrorMessage(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "An account with this email already exists";
      case "auth/invalid-email":
        return "Please enter a valid email address";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled. Please contact support.";
      case "auth/weak-password":
        return "Please enter a stronger password";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      default:
        return "An error occurred. Please try again.";
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Header />
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 transition-all duration-300">
              {newUser ? "Create Account" : "Welcome Back"}
            </h2>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-500 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              {newUser && (
                <div className="relative group">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300"
                    size={20}
                  />
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                    required
                  />
                </div>
              )}

              <div className="relative group">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300"
                  size={20}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300"
                  size={20}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium
                         hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-300
                         flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                <span>
                  {isLoading
                    ? "Processing..."
                    : newUser
                    ? "Create Account"
                    : "Sign In"}
                </span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            <div
              onClick={() => {
                setNewUser(!newUser);
                setError(null);
              }}
              className="mt-8 text-center cursor-pointer group"
            >
              <p className="text-gray-600">
                {newUser
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <span className="text-indigo-500 font-medium group-hover:text-indigo-600 border-b-2 border-transparent group-hover:border-indigo-500 transition-all duration-300">
                  {newUser ? "Sign In" : "Create One"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
