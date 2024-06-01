"use client";

import React from "react";

interface Props {
  item: string;
  active: boolean;
  handleChangeState: (newState: string) => void;
}

const NavigationButton = ({ item, active, handleChangeState }: Props) => {
  const isActive = active ? "btn-active  glass btn-disabled" : "btn-neutral";
  const classes = "btn  flex-1 m-1 " + isActive;
  return (
    <button className={classes} onClick={() => handleChangeState(item)}>
      {item}
    </button>
  );
};

export default NavigationButton;
