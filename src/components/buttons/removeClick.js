import React from "react";

handleRemoveClick = (index) => {
  this.setState(prevState => {
    const newFates = [...prevState.fates].filter((fate, i) => i !== index);
    return { fates: newFates };
  });
};