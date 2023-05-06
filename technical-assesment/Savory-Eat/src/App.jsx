//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useEffect, useState}from "react";
import "./App.css";
import axios from "axios" ;
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import Onerecepie from "./components/OneRecipie";
import Add from "./components/Add";
import UpdateRes from "./components/UpdateRes";
function App() {
  const [data,setData]=useState([])
  const [checker,setchecker]=useState(0)
const [view,setView]=useState('Home')
const [id,setId]=useState(0)
  let changeView = (view) => {
    setView(view);
  };

  const fetchData=()=>{
    axios.get("http://localhost:4000/api/menuItems")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
    
  }

const changingView=(event,view,id)=>{
  event.preventDefault()
  console.log(id,"pass")
  if(id){
 setId(id)
 return setView(view)
 
  }

   fetchData()
  setView(view)
  console.log(data)
 
}
useEffect(() => {
  fetchData()
}, [checker]);

const changeChecker=(n)=>{
  setchecker(n)
  changeView('Allrecepies')
}


  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={(event) => changingView(event,"Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies changeChecker={changeChecker} changingView={changingView} data={data} />}
      {view === "Onerecepie" && <Onerecepie id={id} data={data} />}
      {view === "Addrecepie" && <Add changeChecker={changeChecker} id={id} data={data} />}
      {view === "update" && <UpdateRes changeChecker={changeChecker} id={id} data={data} />}
      <div></div>
    </div>
  );
}

export default App;
