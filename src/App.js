import './index.css'
import Filter from './components/Filter'
import Form from './components/Form'
import Todo from './components/Todo'
import { useState } from 'react'

const Filter_map = {
  All: () => true,
  Done: (task) => task.completed,
  Active: (task) => !task.completed
}

const Filter_name = Object.keys(Filter_map)

function saveDoc(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

const initialTask = JSON.parse(localStorage.getItem("tasks") || "[]")

export default function App() {

  const [tasks, setTasks] = useState(initialTask)
  const [filter, setFilter] = useState("All")

  function addTask(name) {
    const newTask = {
      id: `todo-${Date.now()}`,
      name,
      completed: false
    }

    const updatedTasks = [...tasks, newTask]
    saveDoc(updatedTasks)
    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    const remainTask = tasks.filter(task => task.id !== id)

    setTasks(remainTask)
    saveDoc(remainTask)
  }

  function toggleCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    saveDoc(updatedTasks)
    setTasks(updatedTasks)
  }

  function editTask(id, newName) {
    const editedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: newName }
      }
      return task
    })

    saveDoc(editedTasks)
    setTasks(editedTasks)
  }

  const Filters = Filter_name.map(name => (
    <Filter
      key={name}
      name={name}
      ispressed={filter === name}
      setFilter={setFilter} />
  ))

  const list = tasks.filter(Filter_map[filter]).map(task => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      editTask={editTask}
      deleteTask={deleteTask}
      toggleCompleted={toggleCompleted} />
  ))

  return (
    <div className='max-w-sm m-auto mt-8 p-8'>
      <h1 className='text-3xl font-semibold mb-4 text-center'>Todo-List🔥</h1>
      <Form addTask={addTask} />

      <div className='flex flex-nowrap mt-4 gap-1 mb-8'>
        {Filters}
      </div>

      <h2 className='text-xl mb-4'>
        <span className='font-semibold'>{list.length}</span>개의 할일이 있습니다.
      </h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}