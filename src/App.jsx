import './components/styles/App.css';
import MainPage from "./components/MainPage/MainPage";
import ToDo from "./components/ToDo/ToDo";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <div className="app-content">
                <Routes>
                    <Route path="app-main" element={<MainPage/>}/>
                    <Route path="app-todo" element={<ToDo/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
