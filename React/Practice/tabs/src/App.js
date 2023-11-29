import "./App.css";
import DisplayTabs from "./components/DisplayTabs";
import Tabs from "./components/Tabs";
import React, { useState, useEffect } from "react";

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" },
  ];
  const [tabsbox, setTabsbox] = useState(0);
  const [indexclicked, setIndexclicked] = useState(tabsArray);
  const [clicked, setClicked] = useState(false);
  const onClickHandler = (e, item, key) => {
    e.preventDefault();
    console.log(key);
    setIndexclicked(key);
    console.log(indexclicked);
    setTabsbox(item.content);
    console.log(tabsbox);
    //setTabsbox("");
    //setIndexclicked("");
    setClicked(true);
  };
  useEffect(() => {
    // This will run after the render cycle, and you can perform actions
    // based on the updated state here.
    console.log("Updated indexclicked:", indexclicked);
    console.log("Updated tabsbox:", tabsbox);
    console.log("Updated clicked:", clicked);
  }, [indexclicked, tabsbox, clicked]);
  return (
    <div className="App">
      <Tabs
        tabsArray={tabsArray}
        onClickHandler={onClickHandler}
        indexclicked={indexclicked}
      />
      <DisplayTabs clicked={clicked} tabsbox={tabsbox} />
    </div>
  );
}

export default App;
