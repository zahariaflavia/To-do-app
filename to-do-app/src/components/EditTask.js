import { useState } from "react";
import EditIcon from '@material-ui/icons/Edit';
 
const EditTask=()=>{
    const data=JSON.parse(localStorage.getItem("tasks"))||[];
    const [tasks,setTasks]=useState(data);
    const handleChange=()=>{
        console.log("uwe");
    }

const compareDates=(t1,t2)=>t1.date.localeCompare(t2.date);
   
    return (
        <div>
            <div className="items">
            {tasks.filter((task)=>task.status==="incomplete").length===0?(<h3>There are no incomplete activities to be displayed</h3>):(<table className="table">
                <tbody>
                    
        {tasks.filter((task)=>task.status==='incomplete').sort(compareDates).map((task)=>{
            const {id,name,date}=task;
            return(
                <tr key={id}>
                    <td>{date.slice(0,10)}</td>
                <td>{name}</td>
                <td><EditIcon /></td>
                </tr>
                
            );
        })}
        </tbody>
        </table> )}
        
        </div>
        </div>
    );

}

export default EditTask;