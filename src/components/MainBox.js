import React, {useState} from "react"
import MenuBar from "./MenuBar"
import {Profile, Photos, Cocktails, Pokemon} from "./pages"

// function Parent() {
//   const [childName, setChildName] = useState("Child1");

//   let componentToDisplay;
//   if (childName === "Child1") {
//     componentToDisplay = <Child1 />;
//   } else if (childName === "Child2") {
//     componentToDisplay = <Child2 />;
//   }
//   // etc
// }

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [selectedTab, setSelectedTab] = useState("profile")

  let detailsToDisplay = <div>Hi, I'm a div!</div>
  if (selectedTab === "profile") {
    detailsToDisplay = <Profile />
  } else if (selectedTab === "photos") {
    detailsToDisplay = <Photos />
  } else if (selectedTab === "cocktails") {
    detailsToDisplay = <Cocktails />
  } else if (selectedTab === "pokemon") {
    detailsToDisplay = <Pokemon />
  }
  return (
    <div>
      <MenuBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      {detailsToDisplay}
    </div>
  )
}

export default MainBox
