import React, { useState } from 'react';
import video from '../assets/porsche 911 - Made with Clipchamp.mp4';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="bg-cover bg-center bg-fixed h-screen relative">
      {/* Background video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={video} type="video/mp4" />
      </video>

      {/* Form container */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="p-8 rounded w-full md:w-1/2 lg:w-1/3 glassmorphism mx-4">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h1>
          <form>
            {isSignUp && (
              <>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-900 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border-b-2 border-grey-500 rounded-full w-full py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline bg-transparent"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-900 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="border-b-2 border-grey-500 rounded-full w-full py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline bg-transparent"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <label className="block font-semibold text-gray-900 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border-b-2 border-grey-500 rounded-full w-full py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline bg-transparent"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-gray-900 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border-b-2 border-grey-500 rounded-full w-full py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline bg-transparent"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <label className="block font-semibold text-gray-900 mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="border-b-2 border-grey-500 rounded-full w-full py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline bg-transparent"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <div className="mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-900 text-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                {isSignUp ? 'Sign Up ' : 'Login'}
              </button>
            </div>
            <div className="text-center">
              <span className="text-gray-900">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </span>
              <button
                type="button"
                className="text-blue-500 ml-2 hover:underline"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
