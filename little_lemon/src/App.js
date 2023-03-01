import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
return (
  <>
<Navbar title="Title here" />
<div className="container my-3">
<TextForm heading = "Enter text to analyse"/>
</div>
</>
);}
export default App;
