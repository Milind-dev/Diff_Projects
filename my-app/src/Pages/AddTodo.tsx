import { useState } from "react";
import { useTodo } from "../hooks/useTodo";


export default function AddTodo() {
      const { todos,addTodo,removeTodo,toggle } = useTodo();

      const [title, setTitle] = useState<string>("");
      const [description, setDescription] = useState<string>("");
      const [amount, setAmount] = useState<number>(0);

      const handleAdd = () : void => {
            addTodo(title,description,amount);
            setTitle("")
            setDescription("");
            setAmount(0);
      }

      
    
 return (
   <div>
     <h1>Todo App</h1>

     <input
       placeholder="Title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
     />

     <input
       placeholder="Description"
       value={description}
       onChange={(e) => setDescription(e.target.value)}
     />

     <input
       type="number"
       value={amount}
       onChange={(e) => setAmount(Number(e.target.value))}
     />

     <button onClick={handleAdd}>handle Add </button>

     <hr></hr>
     {/* <button onClick={() => addTodo}>Add</button>
     <button onClick={() => removeTodo}>Add</button>
     <button onClick={() => toggle}>Add</button> */}
     {/* <button onClick={() => removeTodo}>Add</button> */}

     {todos.map((item) => (
       <div key={item.id}>
         <p
           onClick={() => toggle(item.id)}
           style={{
             textDecoration: item.completed ? "line-through" : "none",
             cursor: "pointer",
           }}
         >
           {item.title} - ₹{item.amount}
         </p>

         <button onClick={() => removeTodo(item.id)}>Delete</button>
       </div>
     ))}
   </div>
 );
}
