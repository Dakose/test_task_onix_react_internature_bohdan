import React from "react";
import { ReactDOM } from "react";
import { render } from "react-dom";
import "./themeSwitcher.css";
import "./Theme_Switcher.js";

export function ThemeSwitcher () {
    return(
        <div className="theme-switcher">
        <input type="checkbox" id="switcher"></input>
        <label for="switcher">Switch</label>
        <script src="./Theme_Switcher.js"></script>
        </div>
    );
}