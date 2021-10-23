// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
  
function App() {
  return (
    <>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <Navbar title="TextUtils" aboutText="About"/>

    <div className="container my-3">
      <TextForm heading="Enter Text to Analyse:"/>
    </div>
    
    </>
  );
}

export default App;
