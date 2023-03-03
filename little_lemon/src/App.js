import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
// import TextForm from './components/TextForm';

function App() {
return (
  <>
<Navbar title="Title here" />
<div className="container my-3">
{/* <TextForm heading = "Enter text: "/> */}
<About/>

</div>
</>
);}
export default App;
