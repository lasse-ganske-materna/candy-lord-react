"use client";

import React from "react";
import State from "../enums/State";

interface Props {
  state: State;
  active: boolean;
  handleChangeState: (newState: State) => void;
}

const NavigationButton = ({ state, active, handleChangeState }: Props) => {
  const isActive = active ? "btn-active  glass btn-disabled" : "btn-neutral";
  const classes = "btn  flex-1 m-1 " + isActive;
  return (
    <button className={classes} onClick={() => handleChangeState(state)}>
      {state}
    </button>
  );
};

export default NavigationButton;
