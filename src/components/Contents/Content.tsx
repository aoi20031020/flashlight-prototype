import React, { useState } from "react";
import "./Content.css";

interface ContentProps {
  text?: string;
  fontsize?: string;
}

const Content: React.FC<ContentProps> = ({
  text = "Hello World",
  fontsize = "16px",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const getCharClass = (index: number) => {
    if (hoveredIndex === null) return "hidden";

    // ホバーされている文字とその周囲を表示
    const isHovered = Math.abs(index - (hoveredIndex ?? 0)) <= 1;
    return isHovered ? "visible" : "hidden";
  };

  return (
    <div className="content">
      {text?.split("").map((char, index) => (
        <span
          key={index}
          className={`char ${getCharClass(index)}`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          style={{ fontSize: fontsize }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Content;
