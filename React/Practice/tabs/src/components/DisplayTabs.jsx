import React from "react";

const DisplayTabs = (props) => {
  const { clicked, tabsbox } = props;
  if (clicked)
    return (
      <div>
        <div style={{ height: "20px" }}></div>
        <div
          style={{
            backgroundColor: "purple",
            width: "360px",
            height: "250px",
            color: "black",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          {tabsbox}
        </div>
      </div>
    );
};

export default DisplayTabs;
