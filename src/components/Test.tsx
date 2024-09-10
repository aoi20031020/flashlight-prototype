import Content from "./Contents/Content";

const Test = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Content text="HelloWorld" fontsize="64px" />
    </div>
  );
};

export default Test;
