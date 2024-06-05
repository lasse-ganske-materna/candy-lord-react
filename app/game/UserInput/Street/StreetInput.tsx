import React, { Children } from "react";


interface Props {
  children: React.ReactNode;
}

export const StreetInput = ({ children }: Props) => {
  return <ul>{children}</ul>;
};
