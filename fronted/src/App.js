import './App.css';
import react, {useEffect, useState} from 'react';
import Navbar from './components/navbar'
import Routing from './components/menubar'
import "./style.css";

const App=()=> {
  const [login, setLogin]= useState("")

  useEffect(()=>{
    let userInf= localStorage.getItem('user')
    userInf= JSON.parse(userInf)
    setLogin(userInf)
}, [])  


  return (
    <>
    <div className="App">
      <Navbar login={login}/>
      <Routing/>
    </div>
    </>
  );
}

export default App;
