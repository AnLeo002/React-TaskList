import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


//rfce me permite crear componentes de manera rapida por medio de una extencion es7 react
function App() {  
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <AddTask/>
      <TaskList/>
      </div>
    </main>
  )
}

export default App