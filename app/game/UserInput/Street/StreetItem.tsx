"use client";

import React from "react";
import Candy from "../../enums/Candy";

interface Props {
  candy: Candy;
  dialogId: string;
}

const StreetItem = ({ candy, dialogId }: Props) => {
  return (
    <button
      className="btn btn-outline btn-accent"
      onClick={() => document.getElementById(dialogId).showModal()}
    >
      {candy.name + " (" + candy.price + " CC)"}
    </button>
  );
};

export default StreetItem;
