import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import React, {useState} from 'react';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';


function App() {
 // const [mode, setmode] = useState('light');

//  const [alert, setAlert] = useState(null);

//  const showAlert = (message, type)=>{
//   setAlert({
//     msg: message,
//     type: type
//   })
//  }

return (
  <>
<Navbar title="Title here" /* mode={mode} */ />
{/* <Alert alert= {alert} /> */}
<div className="container my-3">
<TextForm heading = "Enter text: "/>
{/* <About/> */}

</div>
</>
);}
export default App;
