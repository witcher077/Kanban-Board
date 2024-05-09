import { useState } from 'react'
import './App.css'
import Column from './component/Column'

function App() {

  const [taskToBeDone, setTaskToBeDone] = useState(["Then Learn React and make project"])
  const [taskInProgress, setWorkInProgress] = useState([ "Second Learn basics of Js and slowly go to advance"])
  const [completedTask, setCompletedTask] = useState(["First learn Html and Css and make some project on it"])
  const [newTask, setNewTask] = useState('')

  const changeHandler = (e) => {
    setNewTask(e.target.value)

  }

  const clickHandler = (e) => {

    if (newTask)
      setTaskToBeDone(() => [...taskToBeDone, newTask])
    setNewTask("")
  }

  const HandleDragStart = (e, task, sourceCol) => {
    e.dataTransfer.setData("task", task)
    e.dataTransfer.setData("sourceCol", sourceCol)
  }
  const HandleDrop = (e, targetCol) => {

    const task = e.dataTransfer.getData("task")
    const sourceCol = e.dataTransfer.getData("sourceCol")


    if (targetCol != sourceCol) {

      switch (targetCol) {
        case "WORK TO BE DONE... 🕥": setTaskToBeDone([...taskToBeDone, task]);
          break;
        case "WORK IN PROGRESS... 🚀": setWorkInProgress([...taskInProgress, task]);
          break;
        case "WORK IS COMPLETED... ✓✓": setCompletedTask([...completedTask, task]);
          break;
        default:
          break;
      }
      switch (sourceCol) {
        case "WORK TO BE DONE... 🕥": setTaskToBeDone(taskToBeDone.filter(t=>t!==task));
          break;
        case "WORK IN PROGRESS... 🚀": setWorkInProgress(taskInProgress.filter(t=>t!==task));
          break;
        case "WORK IS COMPLETED... ✓✓": setCompletedTask(completedTask.filter(t=>t!==task));
          break;
        default:
          break;
      }
    }

  }
  return (<>
    <div className='mb-5 bg-slate-500 w-full p-5'>
      <input onChange={changeHandler} className='bg-gray-300 rounded-full outline-none py-2 px-5 mr-10 w-[50%]' value={newTask} />
      <button onClick={clickHandler} className=' bg-green-800 text-white px-3 py-2 rounded-lg '>Add It</button>
    </div>
    <div className='flex'>
      <Column title={"WORK TO BE DONE... 🕥"} logo={"🕥"} bgCol={"bg-white"} onDragStart={HandleDragStart} onDrop={(e) => HandleDrop(e, "WORK TO BE DONE... ⏰")} Tasks={taskToBeDone} />
      <Column title={"WORK IN PROGRESS... 🚀"} logo={"🚀"} bgCol={"bg-green-300"} onDragStart={HandleDragStart} onDrop={(e) => HandleDrop(e, "WORK IN PROGRESS... 🚀")} Tasks={taskInProgress} />
      <Column title={"WORK IS COMPLETED... ✓✓"} logo={"✓✓"} bgCol={"bg-red-300"} onDragStart={HandleDragStart} onDrop={(e) => HandleDrop(e, "WORK IS COMPLETED... ✓✓")} Tasks={completedTask} />
    </div>
  </>
  )
}

export default App
