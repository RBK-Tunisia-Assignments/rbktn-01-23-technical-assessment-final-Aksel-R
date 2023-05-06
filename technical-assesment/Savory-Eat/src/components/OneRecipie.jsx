import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({ id,data }) => {

 var filtredData=data.filter((e)=>{
  console.log(data)
  return e.recepie_Id===id})
  console.log(filtredData)
  return (
    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
            <img className="img" src={filtredData[0].recepie_Image} alt="" />
         
          </div>
          <div className="text">
            <h1 className="food">{filtredData[0].recepie_Name}</h1>
            <i > 25 Mins</i>
            <i > Serves: 5 </i>

            <p className="info">{filtredData[0].recepie_Description}</p>
            <h3>Ingrediens :</h3>
            <p className="info">{filtredData[0].recepie_Ingredients}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Onerecepie;
