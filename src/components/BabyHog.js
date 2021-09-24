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

  // this object has key-value pairs with color pointing to image path
  const eyeColorMapper = {
    "normal": normalBaby,
    "sun": SunBaby,
    "blue": BlueBaby,
    "glowing": GlowingBaby
  };

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.value === 'Increase Weight') {
      // setter function to set weight
      setWeight(weight + 20);
    } else { // "Decrease weight" button is clicked
      setWeight(weight - 20);
    }
  }

  return (
    <li className="hogbabies">
      <h1>Name</h1>
      <h3>Weight:</h3>
      <h3>Hobby:</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+">Increase Weight</button>
      <button name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.banana]}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
