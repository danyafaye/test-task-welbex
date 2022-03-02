import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import ToDo from "./components/ToDo/ToDo";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";

const App = () => {
  return (
      <div className="App-wrapper">
        <Navbar/>
          <div className="App-content">
              <Route path="/app-main" render={()=><MainPage/>}/>
              <Route path="/app-todo" render={()=><ToDo/>}/>
          </div>
      </div>
  )
}

export default App;
