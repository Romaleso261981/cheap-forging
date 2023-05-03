import React from "react";
import { useState } from "react";
import { Header } from "../../components/header";
import { DropDown } from "../../components/DropDown";
import { Planes } from "../../components/planes";

export const HomePage = () => {
  const [change, setChange] = useState();
  const getFilter = (filter) => {
    setChange(filter);
  };
  console.log(change);
  return (
    <React.Fragment>
      <Header />
      <DropDown getFilter={getFilter} />
      <Planes />
    </React.Fragment>
  );
};
