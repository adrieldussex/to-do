import { useEffect, useState } from "react"
import AllTask from "./components/AllTask"
import Header from "./components/Header"
import NewTask from "./components/NewTask"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'See Movies', completed: false },
    { id: 2, title: 'Study', completed: true },
    { id: 3, title: 'Training', completed: false },
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const addTask = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1;

    const newTask = {
      id: lastId + 1,
      title,
      completed: false
    }

    const taskList = [...tasks]
    taskList.push(newTask);
    setTasks(taskList);
  }

  const handleSetComplete = (id) => {
    const updateList = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(updateList);
  }

  const handleDelete = (id) => {
    const updateList = tasks.filter(task => task.id !== id)
    setTasks(updateList);
  }

  const handleClearComplete = () => {
    const updateList = tasks.filter(task => !task.completed);
    setTasks(updateList);
  }

  const showAllTasks = () => {
    setActiveFilter('all')
  }

  const showActiveTasks = () => {
    setActiveFilter('active')
  }

  const showCompletedTasks = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if(activeFilter === 'all') {
      setFilteredTasks(tasks)
    } else if (activeFilter === 'active') {
      const activeTasks = tasks.filter(task => task.completed === false)
      setFilteredTasks(activeTasks)
    } else if (activeFilter === 'completed') {
      const completedTasks = tasks.filter(task => task.completed === true)
      setFilteredTasks(completedTasks)
    }
  }, [activeFilter, tasks])

  return (
    <div className="min-h-screen h-full text-slate-700 bg-slate-100 py-12">
      <div className="flex flex-col items-center justify-center max-w-2xl px-16 w-full mx-auto gap-4">
        <Header />
        <main className="flex flex-col w-full pl-8 pt-2">
          <NewTask addTask={addTask} />
          <AllTask
          tasks={filteredTasks}
          activeFilter={activeFilter}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
          showActiveTasks={showActiveTasks}
          showAllTasks={showAllTasks}
          showCompletedTasks={showCompletedTasks}
          />
        </main>
      </div>
    </div>
  )
}

export default App
