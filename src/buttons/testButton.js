import React from "react";
import '../index.css';

export default function App() {
    const clickHandle = () => console.log("test button");
    return(
        <button onClick={clickHandle}>Test Button</button>
    );
}