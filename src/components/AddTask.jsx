import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
function AddTask() {
  const { createTask } = useContext(TaskContext);
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Ingrese su tarea"
          className="task bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <input
          type="text"
          placeholder="Descripcion de su tarea"
          className="descrip bg-slate-300 p-3 w-full mb-2"
        />
        <button
          className="bg-indigo-500 px-3 py-1 text-white m-auto"
          onClick={(e) => {
            e.preventDefault();
            const tittle = document.querySelector(".task");
            const descrition = document.querySelector(".descrip");
            createTask(tittle.value, descrition.value);
            tittle.value = "";
            descrition.value = "";
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
export default AddTask;
