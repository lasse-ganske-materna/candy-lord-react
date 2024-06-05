"use client";

import React from "react";
import { Candy } from "../../enums/Candy";

interface Props {
  candy: Candy;
  price: number;
  dialogId: string;
}

const StreetItem = ({ candy, price, dialogId }: Props) => {
  return (
    <button
      className="btn btn-outline btn-accent"
      onClick={() => document.getElementById(dialogId).showModal()}
    >
      {candy} {price}
    </button>
  );
};

export default StreetItem;
