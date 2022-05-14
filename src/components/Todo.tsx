import React, { FC } from "react";

interface TodoProps {
    title: string;
    completed: boolean;
    changeStatus: () => void;
    deleteTodo: () => void;
}

export const Todo: FC<TodoProps> = ({
    title,
    completed,
    changeStatus,
    deleteTodo,
}) => {
    return (
        <div className="todo">
            <div className="todo__box">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={changeStatus}
                />
                <div className="todo__name">{title}</div>
            </div>

            <button className="todo__button" onClick={deleteTodo}>
                Delete
            </button>
        </div>
    );
};
