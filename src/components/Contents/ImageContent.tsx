import React, { useState } from "react";
import "./ImageContent.css";

interface ContentProps {
  src: string;
}

const ImageContent: React.FC<ContentProps> = ({ src }) => {
  const [hoveredContent, setHoveredContent] = useState<boolean>(false);
  const handleMouseOver = (contentId: boolean) => {
    setHoveredContent(contentId);
  };
  return (
    <div
      className={`image-content ${hoveredContent ? "visible" : "hidden"}`}
      onMouseOver={() => handleMouseOver(true)}
      onMouseOut={() => handleMouseOver(false)}
    >
      <img src={src} alt="" />
    </div>
  );
};

export default ImageContent;
