
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [task,setTask] = useState(["Coding"]);
  const [inputTask, setInputTask] = useState("");

  const addTask= ()=>{
    setTask([...task,inputTask]);
    setInputTask("");
  }

  const deleteTask =(taskToBeDeleted)=>{
    let remainingTask = task.filter((data)=>data!=taskToBeDeleted)
    setTask(remainingTask);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <input type="text" 
          placeholder="Enter Task"
          value={inputTask}
          onChange={(e)=>setInputTask(e.target.value)}
        />
        <button onClick={addTask}>Add Todo</button>
        <div className="list">
          <ul>
          {
            task.map((item)=>{
              return(
                <li>
                  <span>{item}</span>
                  <button onClick={()=>deleteTask(item)}>Delete</button>
                </li>
              )
            })
          }
          
          </ul>
        </div>
        
    </div>
  )
}

export default App
