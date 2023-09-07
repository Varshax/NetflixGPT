import React, { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isSignIn, updateIsSignIn] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className="relative">
        <img
          className="absolute object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-3/12 bg-black p-12 rounded-lg shadow-lg mx-5 my-12 bg-opacity-70">
          <h4 className="text-white font-bold text-3xl mb-10  mx-8">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isSignIn && (
              <>
                <div className="mb-4 mx-8">
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    className="w-full p-2  rounded align-middle bg-gray-800 text-white"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4 mx-8">
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    className="w-full p-2 bg-gray-800 rounded align-middle text-white"
                    placeholder="Last Name"
                  />
                </div>
              </>
            )}
            <div className="mb-4  mx-8">
              <input
                {...register("email", { required: true, maxLength: 20 })}
                className="w-full p-2 bg-gray-800 rounded text-white"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 mx-8">
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full p-2 bg-gray-800 rounded align-middle text-white"
                placeholder="Enter Password"
              />
            </div>
            <div className="mx-8">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer"
              >
                {isSignIn ? "Log In" : "Sign Up"}
              </button>
              <p
                className="text-white font-normal my-8 cursor-pointer"
                onClick={() => updateIsSignIn(!isSignIn)}
              >
                {!isSignIn
                  ? "Already Registered? Sign In now"
                  : "New to Netflix? Sign up now."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
