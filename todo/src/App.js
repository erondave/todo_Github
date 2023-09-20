import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [ addList, setList ] = useSate([]);
  const [ newTask, setNewTask ] = useState("");


  const handleChange = (event) => {
   
    setNewTask(event.target.value);
  }

  const addTask = () => {

    const task = {
      id: addList.length === 0 ? 1 : addList[addList.length - 1].id + 1,
      taskName: newTask,
    }


    setList([...addList, task])
  }
  
  const deleteTask = (id) => {
    setList(addList.filter((task) => task.id !== id));
  }



  return (
    <div className="App">
     <div className="putTask">
      < input onChange={handleChange}/>
      <button onClick={addTask}></button>
     </div>
     <div className="list">
      {addList.map((task) => {
        return (
          <div>
            <h1 className='task'>{task.taskName}</h1>
        <button onClick={() => deleteTask(task.id)}> X </button>
          </div>
        )
      })}
      </div>
      
     
    </div>
  );
}

export default App;
