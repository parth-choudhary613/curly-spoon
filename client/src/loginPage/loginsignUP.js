import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import video from '../assets/porsche 911 - Made with Clipchamp.mp4';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setAuth }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: isSignUp ? 0x007bff : 0xff5733,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    let frameId;
    const animate = () => {
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [isSignUp]);

  const validateForm = () => {
    const newErrors = {};
    if (isSignUp && formData.name.trim().length < 5) {
      newErrors.name = 'Name must be at least 5 characters.';
    }
    if (isSignUp && (formData.phone.trim().length !== 10 || !/^\d{10}$/.test(formData.phone))) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)
    ) {
      newErrors.password =
        'Password must contain at least 8 characters, including an uppercase letter, a number, and a special character.';
    }
    if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isSignUp) {
        const response = await axios.post('http://localhost:5000/api/signup', formData);
        alert('Sign Up Successful!');
        setIsSignUp(false);
      } else {
        const response = await axios.post('http://localhost:5000/api/login', {
          email: formData.email,
          password: formData.password,
        });
        alert('Login Successful!');
        setAuth(true);
        navigate('/home');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0" ref={containerRef}></div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="p-8 rounded w-full md:w-1/2 lg:w-1/3 glassmorphism mx-4 bg-white bg-opacity-20 shadow-2xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h1>
          <form onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
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
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
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
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
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
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
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
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            )}
            <div className="mb-6">
              <button
                className={`${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
                } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`}
                type="submit"
                disabled={loading}
              >
                {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Login'}
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-blue-500 underline focus:outline-none"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrors({});
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  });
                }}
              >
                {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
