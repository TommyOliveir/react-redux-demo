import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
import { ChromePicker } from "react-color";

function ChangeColor() {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <div className="colorPicker">
        {" "}
        <ChromePicker className="colorPickerChild"
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)} disableAlpha 
        />
      </div>

      {/* {color} */}
      {/* <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      /> */}
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ChangeColor;
