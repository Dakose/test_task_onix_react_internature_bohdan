import React from "react";

function testButton () {
    const clickHandle = () => console.log("test button");
    return(
        <button onClick={clickHandle}>Test Button</button>
    );
}

export default testButton;