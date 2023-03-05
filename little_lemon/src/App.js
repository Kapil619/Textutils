import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import React, {useState} from 'react';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

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
<Router>
<Navbar title="Title here" /* mode={mode} */ />
{/* <Alert alert= {alert} /> */}
<div className="container my-3">
  <Switch>
      <Route exact path="/about" component={About}>
          <About />
      </Route>
        <Route exact path="/">
          <TextForm heading = "Enter text: "/>
        </Route>
  </Switch>
</div>
</Router>
</>
);}
export default App;
