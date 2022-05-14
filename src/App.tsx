import React, { useEffect } from "react";
import "./App.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { Todos } from "./components/Todos";
import { useAppDispatch } from "./hooks";
import { fetchTodos } from "./store/TodoSlice";

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

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
