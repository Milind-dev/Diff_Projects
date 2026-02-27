import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  description: string;
  amount: number;
  completed: boolean;
}


export function useTodo(){
    const [todos, setTodos] = useState<Todo[]>([]);

     const addTodo = (title: string, description: string, amount: number): void => {
      const newTodo: Todo = {
        id: Date.now(),
        title,
        description,
        amount,
        completed: false,
      }; 
       setTodos((prev) => [...prev, newTodo]); 
       //[ ...prev, { id,title, description, amount,completed } ]
     };


     const removeTodo = (id:number) : void  => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
     }

     const toggle = (id:number) => {
        setTodos((prev) =>
                 prev.map((todo) => todo.id === id  ?
                         { ...todo, completed: !todo.completed }
                                :todo)    
        );
     } 


    return { todos, addTodo, removeTodo, toggle };
}