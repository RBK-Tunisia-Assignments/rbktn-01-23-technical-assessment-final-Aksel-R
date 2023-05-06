import React from "react";
import "../index.scss";

import RecepieCard from "./RecepieCard";
const AllRecepies = ({data,changingView,changeChecker}) => {
  return (
    <>
    {data.map((e,i)=>{
      return <RecepieCard changeChecker={changeChecker} changingView={changingView} key={i} e={e}/>
    })}
    </>
  );
};

export default AllRecepies;
