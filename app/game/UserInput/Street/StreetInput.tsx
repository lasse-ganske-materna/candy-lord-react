import React, { Children } from "react";
import { Candy } from "../../enums/Candy";

interface Props {
  children: React.ReactNode;
}

export const StreetInput = ({ children }: Props) => {
  return <ul>{children}</ul>;
};
