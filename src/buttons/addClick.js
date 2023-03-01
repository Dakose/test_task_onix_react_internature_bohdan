import React from "react";

handleAddClick = () => {
  const newFate = { name: "", dateOfBirth: "", ... };
  this.setState(prevState => {
    const newFates = prevState.fates.concat(newFate);
    return { fates: newFates };
  });
};