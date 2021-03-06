import React, { useState, useEffect } from "react";
import ReactSwipe from "react-swipe";

const Carousel = () => {
  let reactSwipeEl;

  //   const value = document.querySelector(".item");
  const [value, setValue] = useState(document.querySelector(".item"));
  //   console.log(value);

  //   useEffect(() => {
  //     value.addEventListener("click", (e) => {
  //       console.log(e);
  //     });
  //   }, []);

  const moveCard = (e) => {
    // console.log(document.querySelector(".hs"));
    // document.querySelector(".hs").scrollBy(10, 0);
    // console.log(e);
  };

  return (
    <div className="app">
      <h1>Some headline</h1>
      <div className="ul-hold">
        <ul className="hs">
          <li className="item" onDragStart={(e) => moveCard(e)}>
            test1
          </li>
          <li className="item" onClick={(e) => moveCard(e)}>
            test2
          </li>
          <li className="item">test</li>
          <li className="item">test</li>
          <li className="item">test</li>
          <li className="item">test</li>
        </ul>
      </div>

      <div className="container">
        <div className="item">
          <h3>Block for context</h3>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
