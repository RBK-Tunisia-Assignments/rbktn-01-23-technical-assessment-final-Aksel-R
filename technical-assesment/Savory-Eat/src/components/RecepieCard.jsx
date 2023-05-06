import React from "react";
import "../App.css";
import axios from "axios" ;
const RecepieCard = ({e,changingView,changeChecker}) => {

const deleting=(event)=>{
event.preventDefault()
axios.delete(`http://localhost:4000/api/recepies/${e.recepie_Id}`)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
changeChecker(Math.floor(Math.random() *100))
}


  return (
    <>
      <div className="card">
        <button onClick={(event)=>deleting(event)} className="delete">delete</button>
        <button onClick={(event)=>changingView(event,"update",e.recepie_Id)} className="update">update </button>

        <>
          <div className="header">
            <img onClick={(event)=>changingView(event,"Onerecepie",e.recepie_Id)}
              className="img"
              src={e.recepie_Image}
              alt=""
            />
          </div>
          <div className="text">
            <h1  className="food">{e.recepie_Name}</h1>
            <i> {e.Cook_Time} Mins</i> <br />
            <i>Serves:{e.Serves}</i>
          </div>
        </>
      </div>
     
    </>
  );
};

export default RecepieCard;
