import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { CiCircleRemove } from "react-icons/ci";
import { BiSolidEdit } from "react-icons/bi";
import { toast } from 'react-toastify';
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';
const List = () => {
    const [tasks,setTasks]=useState([])
    const [todo,setTodo]=useState([])
    const [progress,setprogress]=useState([])
    const [complete,setComplete]=useState([])
    const [count,setCount]=useState(0)
    const {user}=useContext(AuthContext)
    useEffect(()=>{
     fetch(`https://task-management-server-nine-woad.vercel.app/userAddedtask?email=${user?.email}`)
     .then(res=>res.json())
     .then(data=>{
        console.log("from user added task",data)
        setTasks(data)
     })
    },[user?.email])
    useEffect(()=>{
       const fTodo=tasks ? tasks.filter((task)=>task.status=== 'todo') : []
       const fProgress=tasks ? tasks.filter((task)=>task.status=== 'progress') : []
       const fComplete=tasks ? tasks.filter((task)=>task.status=== 'complete') : []
    setTodo(fTodo)
    setprogress(fProgress)
    setComplete(fComplete)
    },[tasks])
    const status=['todo','progress','complete']
    return (
        <div className='flex flex-col lg:flex-row gap-16'>
            {status.map((status,index)=><Section key={index}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            todo={todo}
            progress={progress}
            complete={complete}></Section>)}
        </div>
    );
};

export default List;

const Section=({status,tasks,setTasks,todo,progress,complete})=>{
    
    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop:(item)=>{addItemToSection(item.id)},
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))
    
    let text="TODO"
    let bg="bg-slate-500"
    let taskToMap=todo
    if(status=== 'progress'){
        text="In Progress"
        bg="bg-purple-500"
        taskToMap=progress
    }
    if(status=== 'complete'){
        text="Completed"
        bg="bg-green-500"
        taskToMap=complete
    }


// const addItemToSection=(id)=>{
// // console.log("droped",id,status)
// setTasks((prev)=>{
//     // console.log("previous",prev)
//     const modifiedTask=prev.map((task)=>{
//         if(task._id===id){
//             return {...task,status:status}
//         }
//         return task
//     })
//     return modifiedTask
// })
// }
const addItemToSection = (id) => {
    fetch(`https://task-management-server-nine-woad.vercel.app/updateTaskStatus/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ status: status })
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to update task status');
    }
    return response.json();
  })
  .then(() => {
    // Update the task status in the state
    setTasks((prev) => {
      const modifiedTask = prev.map((task) => {
        if (task._id === id) {
          return { ...task, status: status };
        }
        return task;
      });
      return modifiedTask;
    });
    toast.success("Task status changed");
  })
  .catch((error) => {
    console.error('Error updating task status:', error);
    toast.error('Failed to update task status');
  });
  };
    return( 
    <div
    ref={drop}
    className={`w-64 ${isOver ? "bg-slate-200" :""}`}>
    <Header text={text} bg={bg} count={taskToMap.length}></Header> 
    {taskToMap.length >0 && taskToMap.map((task)=><Task 
    key={task._id}
    task={task}
    tasks={tasks}
    setTasks={setTasks}></Task>)}
    </div>)
}
const Header=({text,bg,count})=>{
    return( 
    <div className={`${bg} flex items-center h-12 pl-4`}>
    {text} <div className='ml-2 bg-blue-200 w-5 h-5 text-black rounded-full flex items-center justify-center'>{count}</div>
    </div>
)}
const Task=({task,setTasks,tasks})=>{
    // console.log("task",task)
    // console.log("tasksss",tasks)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:{id:task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    const handleRemove=async(id)=>{
console.log(id)
const res=await fetch(`https://task-management-server-nine-woad.vercel.app/deletetask/${id}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    // Remove the deleted task from the state
    setTasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
  } else {
    console.error('Failed to delete task');
  }

toast.success("Task Deleted Successfully")
    }
    
    return( 
    <div ref={drag} 
    className={`relative border p-3
     rounded-lg my-2 bg-slate-100
    cursor-grab shadow-md ${isDragging ? "opacity-25" : "opacity-100"}`}>
   <p>{task.title}</p>
   <p>{task.description}</p>
   <div className='flex justify-between'>
    <div>priority: {task.priority}</div>
    <div>{task.deadline}</div>
    
   </div>
   <div>
        <button 
        onClick={(()=>handleRemove(task._id))}
        className='absolute top-1 right-1 text-slate-400 hover:text-black text-2xl'><CiCircleRemove></CiCircleRemove></button>
    </div>
   <div>
       
       <Link to={`/dashboard/updatetask/${task._id}`}> 
       <button 
        className='absolute top-8 right-1 text-slate-400 hover:text-black text-2xl'><BiSolidEdit></BiSolidEdit>
        </button>
   </Link>
        </div>
   </div>
)}