import React, { FC, useState } from "react";
import { useAppDispatch } from "../hooks";
import { addNewTodo } from "../store/TodoSlice";

export const NewTodoForm: FC = () => {
    const [newTodoValue, setNewTodoValue] = useState<string>("");
    const dispatch = useAppDispatch();

    const addTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (newTodoValue) {
            dispatch(addNewTodo(newTodoValue));
        }
        setNewTodoValue("");
    };
    return (
        <form className="todo__form" onSubmit={addTodo}>
            <input
                type="text"
                placeholder="New task"
                value={newTodoValue}
                onChange={(e) => setNewTodoValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};
