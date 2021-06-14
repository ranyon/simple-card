import logo from './logo.svg';
import './App.css';
import {Title} from './components/title'
import Image from './components/image'
import Desc from './components/desc'
import Simplecard from './components/simplecard';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <Simplecard/>

    </div>
  );
}

export default App;
