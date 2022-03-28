import React, {useState} from 'react'

export default function Textfrom(props) {
const[text,setText]= useState('Enter text here');
const handleupClick =()=>{
  //console.log("uppercase was clicked = text");
  let newText = text.toUpperCase();
  setText(newText)
}
const handleLoClick =()=>{
  //console.log("uppercase was clicked = text");
  let newText = text.toLowerCase();
  setText(newText)
}
const handleClearClick =()=>{
  //console.log("uppercase was clicked = text");
  let newText = '';
  setText(newText)
}
const handleOnChange =(event)=>{
 // console.log("on change");
  setText(event.target.value);
}


  return (
    <>
    <div className="containar">
        <h1>Enter the text to analyize </h1>
       
  <div className="mb-3">
      <textarea className="form-control" value ={text}onChange={handleOnChange} id ="myBox" rows="8"></textarea>
  </div>
  <button className="btn.btn-primary mx-1" onClick={handleupClick}>convert to upercase</button>
  <button className="btn.btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
  <button className="btn.btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="containar" my-3>
      <h1>your text summary </h1>
      <p>{text.split(" ").length} words and{text.length}characters</p>
      <p>{0.008 *  text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  )
  
}
