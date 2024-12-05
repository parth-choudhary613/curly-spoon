import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Page1 = () => {
  const pageRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={pageRef} style={{ height: "100vh", background: "#ff6f61" }}>
      <h1>Page 1</h1>
      <p>Welcome to Page 1!</p>
    </div>
  );
};

export default Page1;
