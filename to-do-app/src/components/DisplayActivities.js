import {useState} from 'react'
const DisplayActivities=()=>{
    const data=JSON.parse(localStorage.getItem("tasks"))||[];
    const [tasks,setTasks]=useState(data);
    const handleChange=(id)=>{
       const aux=[...tasks];
       const elementIndex=tasks.findIndex(element=>element.id===id)
       aux[elementIndex]={...aux[elementIndex],status:"complete"};
       setTasks(aux);
       window.localStorage.setItem("tasks",JSON.stringify(aux));
    }
    return <div className="items">
        <table className="table">
            <tbody>
    {tasks.map((task)=>{
        const {id,name,status}=task;
        return(
            <tr key={id}>
            <td>{name}</td>
            <td>{status}</td>
            <td><button className="button" onClick={()=>handleChange(id)}>Done</button></td>
            </tr>
            
        );
    })}
    </tbody>
    </table>
    </div>
}

export default DisplayActivities