import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    console.log("Lowercase clicked clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClrClick = ()=>{
    let newText = " ";
    setText(newText);
  }


  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }


const[text, setText] = useState('');


  return (
    <>
<div>
    <h1>{props.heading}</h1>
        <div className="  mb-3">
        <textarea className="form-control" placeholder='Enter text here: ' value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear text</button>

  </div>
  <div className="container">
    <h1 className='my-3'>Your Text Summary: </h1>
    <p> {text.split(" ").filter((element)=>{return element.length !==0}).length} words & {text.length} characters. </p>
    <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read. </p>
    <h2>Preview: </h2>
    <p>{text}</p>
  </div>
  </>

  )
}
