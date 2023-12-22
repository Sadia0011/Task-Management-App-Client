import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddedTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const{user}=useContext(AuthContext)
const email=user?.email
  const onSubmit = (data) => {
    console.log(data);
    const taskData = {
        title: data.titles,
        description: data.descriptions,
        deadline: data.deadlines,
        priority:data.priority,
        email:email,
        status:"todo"
      };
      fetch("https://task-management-server-nine-woad.vercel.app/addtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Task added successfully:", data);
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
        toast("Congratulations,Task Added");
        reset()
  };

  return (
    <div>
        <div>
            <h2 className='flex justify-center items-center text-2xl font-semibold'>Add A New Task</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Titles</label>
          <input type="text" {...register('titles', { required: true })} className="mt-1 p-2 border rounded w-full" />
          {errors.titles && <span className="text-red-500 text-sm">Titles is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Descriptions</label>
          <input type="text" {...register('descriptions', { required: true })} className="mt-1 p-2 border rounded w-full" />
          {errors.descriptions && <span className="text-red-500 text-sm">Descriptions is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Deadlines</label>
          <input type="date" {...register('deadlines', { required: true })} className="mt-1 p-2 border rounded w-full" />
          {errors.deadlines && <span className="text-red-500 text-sm">Deadlines is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Priority</label>
          <select {...register('priority', { required: true })} className="mt-1 p-2 border rounded w-full">
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <span className="text-red-500 text-sm">Priority is required</span>}
        </div>
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
    </form>
    <ToastContainer />
    </div>
  );
};

export default AddedTask;
