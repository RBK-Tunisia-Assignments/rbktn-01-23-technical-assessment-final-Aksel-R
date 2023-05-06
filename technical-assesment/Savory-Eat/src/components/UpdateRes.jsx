import React, { useState } from "react";
import "../App.css";
import axios from "axios";
const UpdateRes = ({id,data,changeChecker}) => {

const [name,setName]=useState("")
const [Cook,setCook]=useState(0)
const [Prep,setPrep]=useState(0)
const [Serves,setServes]=useState(0)
const [img,setimg]=useState("")
const [Description,setDescription]=useState("")
const [Ingredients,setIngredients]=useState("")
const [categorie,setcategorie]=useState("")


var filtredData=data.filter((e)=>{
    console.log(data)
    return e.recepie_Id===id})
    console.log(filtredData)

var recepie={
   
    recepie_Name:name ,
    Cook_Time:Cook ,
    Prep_Time: Prep,
    Serves:Serves ,
    recepie_Ingredients:Ingredients ,
    recepie_Image:img ,
    categorie:categorie ,
    recepie_Description:Description ,
   users_user_Id: 1
  
}


const update=(event)=>{
  console.log('adding')
event.preventDefault()
  axios.patch(`http://localhost:4000/api/recepies/${id}`,recepie)
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))
  changeChecker(Math.floor(Math.random() *100))

}

  return (
   <>
<h2>update {filtredData[0].recepie_Name}</h2>
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input onChange={(event)=>setName(event.target.value)} type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input onChange={(event)=>setCook(event.target.value)} type="number" placeholder="Cooking Time" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input onChange={(event)=>setPrep(event.target.value)} type="number" placeholder="Preparation Time" />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input onChange={(event)=>setServes(event.target.value)} type="number" placeholder="serves" />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input onChange={(event)=>setcategorie(event.target.value)} type="text" placeholder="Category" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input onChange={(event)=>setDescription(event.target.value)} type="text" placeholder="Description" />
      </div>
      <div className="form-group">
        <label onChange={(event)=>setIngredients(event.target.value)}>Ingredients:</label>
        <input placeholder="Ingredients" />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input onChange={(event)=>setimg(event.target.value)} type="text" placeholder="Image URL" />
      </div>
      <button onClick={(event) => update(event)}>Update Recipe</button>
    </div>
    </>
  );
};
export default UpdateRes;
