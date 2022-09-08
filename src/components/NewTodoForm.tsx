import React, { FC, useState } from "react";
import { useAppDispatch } from "../hooks";
import { addNewTodo } from "../store/TodoSlice";

export const NewTodoForm: FC = () => {
   const [newTodoValue, setNewTodoValue] = useState<string>("");
   const dispatch = useAppDispatch();

   const addTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      if (newTodoValue) {
         // dispatch(addNewTodo(newTodoValue));
         const newTodo = {
            title: newTodoValue,
            completed: false,
         };

         const response = await fetch(
            "https://todo-list-gg22hh.vercel.app/:3001/todos",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(newTodo),
            }
         );
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
