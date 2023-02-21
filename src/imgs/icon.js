import React from "react";
import { Renderer } from "react-dom";
import logo from './icon.png'; // Tell webpack this JS file uses this image

console.log(logo);

function Logo() {
  return <img src={logo} alt="Logo" />;
}

export default logo;