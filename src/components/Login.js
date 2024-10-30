import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="Netflix-Login-Bg-Img"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <form className="bg-black/50 p-16 rounded-lg w-full max-w-md mx-4">
          <h2 className="text-white text-4xl font-bold mb-12">
            {newUser ? "Sign Up" : "Sign In"}
          </h2>
          {newUser && (
            <>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-4 mb-4 rounded text-white bg-zinc-800"
              />
            </>
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-4 mb-4 rounded text-white bg-zinc-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded bg-zinc-800 text-white"
          />
          <button className="w-full bg-red-600 text-white p-4 rounded font-semibold hover:bg-red-700">
            {newUser ? "Sign Up" : "Sign In"}
          </button>
          <div
            className="my-8 cursor-pointer group"
            onClick={() => setNewUser(!newUser)}
          >
            {!newUser ? (
              <>
                <span className="text-zinc-400">New to Netflix? </span>
                <span className="text-white border-b-2 border-transparent group-hover:border-b-white">
                  Sign up now.
                </span>
              </>
            ) : (
              <>
                <span className="text-zinc-400">Already Registered? </span>
                <span className="text-white border-b-2 border-transparent group-hover:border-b-white">
                  Sign in.
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
