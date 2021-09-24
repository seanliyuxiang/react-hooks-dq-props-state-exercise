import React, { useState } from "react";
import Master from "../assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

console.log(offspring);

function MasterHog() {
  const [eyeColor, setEyeColor] = useState("blue");

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Master Blaster</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="masters-domicile">
        <img id="master-blaster" src={Master} alt="" />
      </div>
      <ul className="hoglist">
        {/* <BabyHog banana={eyeColor} />
        <BabyHog banana={eyeColor} />
        <BabyHog banana={eyeColor} /> */}

        { offspring.map(singleBabyHog => <BabyHog
                                          key={singleBabyHog.id}
                                          name={singleBabyHog.name}
                                          hobby={singleBabyHog.hobby}
                                          eyeColor={eyeColor}
                                          />
                        )
        }

      </ul>
    </div>
  );
}

export default MasterHog;
