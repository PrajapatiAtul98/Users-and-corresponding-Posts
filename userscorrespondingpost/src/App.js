import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Home from './components/Home'
import { useEffect, useState } from 'react';

function App() {

 
      
const [isAboutVisible,setIsAboutVisible] = useState(true)

const handlerAbout = () => {
  setIsAboutVisible(!isAboutVisible)
}
  return (
    <div className="App">
    <button onClick={handlerAbout}>Click Me!</button>
    {isAboutVisible === true ? <About/> : <Home/>}
    </div>
  );
}

export default App;
