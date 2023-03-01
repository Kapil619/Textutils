import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

const[text, setText] = useState('Enter some text: ');


  return (
<div>
    <h1>_{props.heading} - </h1>
        <div className="  mb-3">
        <label htmlFor="myBox" className="form-label">Example Textarea</label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upppercase</button>
  </div>

  )
}
