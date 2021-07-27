    import { useState } from "react";
    import HighlightOffIcon from '@material-ui/icons/HighlightOff';
    const DeleteTask=()=>{
        const data=JSON.parse(localStorage.getItem("tasks"))||[];
        const [tasks,setTasks]=useState(data);

        const removeTask=(id)=>{
            let aux=tasks.filter((task)=>task.id!==id)
            setTasks(aux);
            localStorage.setItem("tasks",JSON.stringify(aux));
            
        }
        return(<div className="items">
            {tasks.filter((task)=>task.status==="incomplete").length===0?(<h2>There are no activities to pe displayed</h2>):( <table className="table">
        {tasks.filter((task)=>task.status==="incomplete").map((task)=>{

            const {id,name,date}=task;
            return (
                <tr key={id}>
                    <td>{date.slice(0,10)}</td>
                    <td>{name}</td>
                    <td><HighlightOffIcon onClick={()=>removeTask(id)}/></td>
                </tr>
            );
        })}
        </table>)}
           
        </div>);

    }
    export default DeleteTask;