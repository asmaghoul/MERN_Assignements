import React from "react";

const Tabs = (props) => {
  const { tabsArray, onClickHandler, indexclicked } = props;
  console.log(indexclicked);

  return (
    <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
      {tabsArray.map((item, index) => (
        <button
          key={index}
          style={{
            backgroundColor: indexclicked === index ? "purple" : "pink",
            width: "80px",
            height: "30px",
            display: "inline-block",
          }}
          value="{item}"
          onClick={(e) => onClickHandler(e, item, index)}
          //(e) => onClickHandler(e, index)
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
export default Tabs;
