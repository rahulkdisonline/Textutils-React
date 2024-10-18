import React, { useState } from "react";

export default function TextForm(props) {
  const convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase", "success");
  };
  const convertToLowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lowercase", "success");
  }
  const clearText = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-outline-info" onClick={convertToUppercase}>Convert to Uppercase</button>
      <button className="btn btn-outline-info mx-3" onClick={convertToLowercase}>Covert to Lowercase</button>
      <button className="btn btn-outline-info" onClick={clearText}>Clear the text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Take {0.008 * text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
