import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from 'react'
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Unable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode("dark");
      setModeText("Dark Mode unabled");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has beem unabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "This is first Textutils";
      // },1000);
      // setInterval(()=>{
      //   document.title = "This is second titles";
      // },2000);
    }
    else{
      setMode("light");
      setModeText("Light Mode unabled");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has beem unabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
