import { createContext } from "react";
import { tareas } from "../task";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks,setTasks]=useState([]);

  useEffect(()=>{
    setTasks(tareas)
  },[]);
  function createTask(tittle,description){
    setTasks([...tasks,{
      id:tasks.length,
      tittle,
      description
    }])
  }
  function deleteTask(taskId){
    setTasks(tasks.filter(task=>task.id!==taskId))
    
  }

  return (
    <TaskContext.Provider value={{
      tasks:tasks,
      createTask:createTask,
      deleteTask:deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
