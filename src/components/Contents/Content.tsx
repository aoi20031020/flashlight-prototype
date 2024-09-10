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
  const [hoveredContent, setHoveredContent] = useState<boolean>(false);
  const handleMouseOver = (contentId: boolean) => {
    setHoveredContent(contentId);
  };
  return (
    <div
      className={`content ${hoveredContent ? "visible" : "hidden"}`}
      onMouseOver={() => handleMouseOver(true)}
      onMouseOut={() => handleMouseOver(false)}
    >
      <div style={{ fontSize: fontsize }}>{text}</div>
    </div>
  );
};

export default Content;
