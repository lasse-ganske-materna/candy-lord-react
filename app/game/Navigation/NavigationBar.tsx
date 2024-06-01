import React, { useId } from "react";
import NavigationButton from "./NavigationButton";

interface Props {
  items: string[];
  activeItem: string;
  handleChangeState: (newState: string) => void;
}

const NavigationBar = (props: Props) => {
  const navItems = props.items.map((item) => {
    const active = item === props.activeItem;
    return (
      <NavigationButton
        key={item}
        item={item}
        active={active}
        handleChangeState={props.handleChangeState}
      />
    );
  });

  return (
    <div className="navbar ">
      <div className="flex-0">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {navItems}
    </div>
  );
};

export default NavigationBar;
