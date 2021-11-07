import React from "react";

export default function TodoComponent() {
    const [newTask, setNewtask] = React.useState('')
    var [tasksList, setTasksList] = React.useState([])
 
    const updateTask = (e) => {
        setNewtask(e.target.value)
    }

    const resetNewTask = () => {
        setNewtask("")
    }

    const submitTask = (e) => {
        e.preventDefault();
        const setNewtask = newTask;
        if (setNewtask !== ""){
            setTasksList = tasksList.push(setNewtask)
            console.log(tasksList)
        }
        resetNewTask();
       }

    return(
        <>
        <h5>TODO FUNCTIONAL COMPONENT</h5>
        <form onSubmit={submitTask}>
            <input value={newTask} type="text" onChange={updateTask} placeholder="Enter Task"/>
            <button type="submit">Add Task</button>
        </form>
        <ul> <b>List of tasks</b>
            {
                tasksList.map((task, i) => (
                <li key = {i}>{task}</li>
                ))
            }
        </ul>
        </>
    )
}