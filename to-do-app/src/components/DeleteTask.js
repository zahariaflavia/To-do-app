    import { useState,useEffect } from "react";
    import HighlightOffIcon from '@material-ui/icons/HighlightOff';
    const DeleteTask=()=>{
        const [tasks,setTasks]=useState([]);

        useEffect(()=>{
            const data=JSON.parse(localStorage.getItem("tasks"));
            if(data){
                setTasks(data);
            }
        },[])
        
        useEffect(()=>{
          localStorage.setItem("tasks",JSON.stringify(tasks));
        },[tasks])
        
        const compareDates=(t1,t2)=>t1.date.localeCompare(t2.date);
        const removeTask=(id)=>{
            let aux=tasks.filter((task)=>task.id!==id)
            setTasks(aux);
            
        }
        return(<div className="items">
            
        {tasks.filter((task)=>task.status==="incomplete").length===0?(<h2>There are no activities to pe displayed</h2>):( <table className="table">
        <tbody>
        {tasks.filter((task)=>task.status==="incomplete").sort(compareDates).map((task)=>{

            const {id,name,date}=task;
            return (
                <tr key={id}>
                    <td>{date.slice(0,10)}</td>
                    <td>{name}</td>
                    <td><HighlightOffIcon onClick={()=>removeTask(id)}/></td>
                </tr>
            );
        })}
        </tbody>
        </table>)}
           
        </div>);

    }
    export default DeleteTask;