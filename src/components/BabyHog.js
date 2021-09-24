import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) { 

  // destructuring array returned from the useState hook
  const [weight, setWeight] = useState(100);
  const [height, setHeight] = useState("200px");

  // this object has key-value pairs with color pointing to image path
  const eyeColorMapper = {
    "normal": normalBaby,
    "sun": SunBaby,
    "blue": BlueBaby,
    "glowing": GlowingBaby
  };

  function handleChangeWeightAndHeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"

    const heightAsNumber = parseInt(height.replace('px', '')); // 200

    if (e.target.innerText === 'Increase Weight') {
      // setter function to set weight and height
      setWeight(weight + 20);
      setHeight((heightAsNumber + 20) + 'px');
    } else { // when "Decrease weight" button is clicked
      setWeight(weight - 20);
      setHeight((heightAsNumber - 20) + 'px');
    }
  }

  // function handleChangeHeight(e) {
  //   const heightAsNumber = parseInt(height.replace('px', '')); // 200

  //   if (e.target.innerText === 'Increase Weight') {
  //     // setter function to set height
  //     setHeight((heightAsNumber + 20) + 'px');
  //   } else { // "Decrease weight" button is clicked
  //     setHeight((heightAsNumber - 20) + 'px');
  //   }
  // }

  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeightAndHeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeightAndHeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eyeColor]}
          style={{ height: height }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
