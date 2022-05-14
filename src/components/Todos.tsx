import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
    changeAllStatus,
    changeStatus,
    deleteTodo,
    deleteTodos,
} from "../store/TodoSlice";
import { Todo } from "./Todo";

export const Todos: FC = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const [isTodosSelected, setIsTodoSelected] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        setIsTodoSelected(
            todos.some((todo) => {
                return todo.completed;
            })
        );
    }, [todos]);
    const todosList = todos?.map((todo, index) => {
        return (
            <Todo
                key={todo.title}
                title={todo.title}
                completed={todo.completed}
                changeStatus={() => dispatch(changeStatus(todo))}
                deleteTodo={() => dispatch(deleteTodo(index))}
            />
        );
    });
    return (
        <div className="todos">
            <h3 className="todos__title">Tasks</h3>
            <button
                className="todos__select"
                onClick={() => dispatch(changeAllStatus())}
            >
                Select all
            </button>
            {todos.length !== 0 ? (
                <div className="todos__list">{todosList}</div>
            ) : (
                <div>There is no tasks to do</div>
            )}

            {isTodosSelected && (
                <button
                    className="todos__button"
                    onClick={() => dispatch(deleteTodos())}
                >
                    Delete todos
                </button>
            )}
        </div>
    );
};
