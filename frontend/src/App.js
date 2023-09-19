// import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [singleTodo, setSingleTodo] = useState({
    id: "",
    todo: "",
    status: "pending"
  });
  const [todos, setTodos] = useState([]);
  const [changes, setChanges] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((array) => [...array, singleTodo]);
    setSingleTodo({ id: "", todo: "", status: "pending" });
  };
  const idToPut = uuidv4();

  const handleChange = (e) => {
    setSingleTodo({
      ...singleTodo,
      [e.target.name]: e.target.value,
      ["id"]: idToPut
    });
  };
  const handlePendingState = (id) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id && item.status === "pending") {
          return { ...item, status: "completed" };
        }
        return item;
      })
    );
  };
  const handleDeleteState = (id) => {
    const filter = todos.filter((item) => item.id !== id);
    setTodos(filter);
  };
  const updateChanges = (e) => {
    setChanges(e.target.value);
  };
  const handleUpdateState = (id) => {
    const filter = todos.filter((items) => {
      if (items.id === id) {
        items.todo = changes;
      }
      return items;
    });
    setTodos(filter);
  };
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="todo"
          type="text"
          placeholder="Enter your todo"
        />
        <input type="submit" value="Add" />
      </form>

      <div>
        <h1>To Do List</h1>
        {todos?.length ? (
          <>
            {todos &&
              todos.map((e, i) => (
                <div key={i}>
                  {e.status === "pending" ? (
                    <>
                      <input
                        onChange={updateChanges}
                        type="text"
                        placeholder={e.todo}
                      />
                      <button onClick={() => handlePendingState(e.id)}>
                        Pending
                      </button>
                      <button onClick={() => handleUpdateState(e.id)}>
                        update
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{e.todo}</p>
                      <button>Completed</button>
                      <button onClick={() => handleDeleteState(e.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              ))}
          </>
        ) : (
          <div>No Todos found.</div>
        )}
      </div>
    </>
  );
}





// import { useState } from 'react';
// import './App.css';
// import {v4 as uuidv4} from "uuid";

// function App() {
//   const [todo, setTodo] = useState();
//   const [todos, setTodos] = useState([]);

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   }

//   function addTodo(e) {
//     e.preventDefault();
//     const newTodo = { id: Date.now(), data: todo, status: false };
//     setTodos([...todos, newTodo]);

//     setTodo("");
//   }

//   const handleEdit = () => {

//   }

//   const handleDelete = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   }


//   const changeStatus = (id) => {
//     setTodos((x) => x.map((item) => (
//       item.id === id && item.status === false && { ...item, status: true } 
//     )))
//   }

//   console.log(todos);

//   return (
//     <>
//       <div>
//         <input onChange={handleChange} type="text" placeholder="Enter todo" value={todo} />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <div>
//         {todos?.length ? (
//           <div>
//             {todos.map((todo) => (
//               <div style={{ display: "flex", width: "300px", height: "60px", alignItems: "center", justifyContent: "space-evenly", }} key={todo.id}>
//                 <p style={{ width: "50%" }}>{todo.data}</p>
//                 {!todos.status ? (<><button onClick={() => changeStatus(todo.id)}>Pending...</button></>): (<><button></button></>) }
//                 {!!todos.status &&(
//                   <>
//                     <button onClick={() => handleEdit(todo.id)} style={{ height: "30px", width: "22%" }} > Edit  </button>
//                     <button onClick={() => handleDelete(todo.id)} style={{ height: "30px", width: "22%" }}> Delete</button>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div>
//             <p>No Todo Found</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;




