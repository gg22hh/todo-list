import React from "react";
import "./App.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { Todos } from "./components/Todos";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1 className="App__title">Tasks list</h1>
                <NewTodoForm />
                <Todos />
            </div>
        </div>
    );
}

export default App;
