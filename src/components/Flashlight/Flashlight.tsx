import React, { useState, useEffect } from "react";
import "./Flashlight.css";

const Flashlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flashlight"
      style={{
        left: mousePosition.x - 100, // 光の中心をカーソルに合わせる
        top: mousePosition.y - 100,
      }}
    />
  );
};

export default Flashlight;
