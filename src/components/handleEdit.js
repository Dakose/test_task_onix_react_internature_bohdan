import React from "react";
import BioYears from "../functions_index/bio_years";

handleEdit = (index, key, value) => {
    this.setState(prevState => {
      const newFates = [...prevState.fates].map((fate, i) => {
        if (i === index) {
          return { ...fate, [key]: value };
        } else {
          return fate;
        }
      });
      return { fates: newFates };
    });
  };

  export default handleEdit;