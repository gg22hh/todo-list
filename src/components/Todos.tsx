import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
    changeAllStatus,
    toggleItem,
    deleteTodo,
    deleteTodos,
    fetchTodos,
} from "../store/TodoSlice";
import loadingGif from "../assets/loading.gif";
import { Todo } from "./Todo";

export const Todos: FC = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const loading = useAppSelector((state) => state.todos.loading);
    const [isTodosSelected, setIsTodoSelected] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        setIsTodoSelected(
            todos.some((todo) => {
                return todo.completed;
            })
        );
    }, [todos]);
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    const todosList = todos?.map((todo, index) => {
        return (
            <Todo
                key={todo.title}
                title={todo.title}
                completed={todo.completed}
                changeStatus={() => dispatch(toggleItem(todo))}
                deleteTodo={() => dispatch(deleteTodo(index))}
            />
        );
    });
    return (
        <div className="todos">
            <h3 className="todos__title">Tasks</h3>
            {loading ? (
                <img className="loading" src={loadingGif} alt="Loading..." />
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
