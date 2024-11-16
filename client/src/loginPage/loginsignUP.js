import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import video from '../assets/porsche 911 - Made with Clipchamp.mp4';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    // Create a Three.js scene
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create a rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: isSignUp ? 0x007bff : 0xff5733 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Animation function
    let frameId;
    const animate = () => {
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [isSignUp]); // Re-run when isSignUp changes

  return (
    <div className="relative h-screen">
      {/* Three.js Animation Container */}
      <div className="absolute inset-0 z-0" ref={containerRef}></div>

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 "
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Form container */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="p-8 rounded w-full md:w-1/2 lg:w-1/3 glassmorphism mx-4 bg-white bg-opacity-20 shadow-2xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h1>
          <form>
            {isSignUp && (
              <>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-200 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border-b-2 border-gray-300 rounded-full w-full py-2 px-3 text-gray-200 focus:outline-none focus:shadow-outline bg-transparent"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold text-gray-200 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="border-b-2 border-gray-300 rounded-full w-full py-2 px-3 text-gray-200 focus:outline-none focus:shadow-outline bg-transparent"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <label className="block font-semibold text-gray-200 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border-b-2 border-gray-300 rounded-full w-full py-2 px-3 text-gray-200 focus:outline-none focus:shadow-outline bg-transparent"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-gray-200 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border-b-2 border-gray-300 rounded-full w-full py-2 px-3 text-gray-200 focus:outline-none focus:shadow-outline bg-transparent"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <label className="block font-semibold text-gray-200 mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="border-b-2 border-gray-300 rounded-full w-full py-2 px-3 text-gray-200 focus:outline-none focus:shadow-outline bg-transparent"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <div className="mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                {isSignUp ? 'Sign Up' : 'Login'}
              </button>
            </div>
            <div className="text-center">
              <span className="text-gray-200">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </span>
              <button
                type="button"
                className="text-blue-400 ml-2 hover:underline"
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
