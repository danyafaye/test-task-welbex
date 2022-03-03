import React from "react";
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="app-main-content">
            <img src="https://www.amocrm.ru/uploads/2021/04/wCqLD-Frame-2-45.jpg" alt='' className="app-logo"/>
            <div className="app-main-content-text">
                <h2>
                    Test task by WelbeX
                </h2>
                <p>
                    Vacancy: React.js Web-developer
                </p>
                <p>
                    Need to develop an todo app with two pages (main page and todo list) in the SPA format using these technologies:
                </p>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React Router</li>
                    <li>Axios</li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage;