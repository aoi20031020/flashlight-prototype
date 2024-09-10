import React, { useState, useEffect } from "react";
import "./Flashlight.css";

const Flashlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false); // マウスがクリックされているかどうかを保持

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`flashlight ${isMouseDown ? "flashlight-active" : ""}`}
      style={{
        left: mousePosition.x - 100, // 光の中心をカーソルに合わせる
        top: mousePosition.y - 100,
      }}
    />
  );
};

export default Flashlight;
