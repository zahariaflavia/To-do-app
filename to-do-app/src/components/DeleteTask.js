    import { useState,useEffect } from "react";
    const DeleteTask=()=>{
        const data=JSON.parse(localStorage.getItem("tasks"))||[];
        //console.log(data);
        const [tasks,setTasks]=useState(data);
        // useEffect(()=>{
        //     const data=JSON.parse(localStorage.getItem("tasks"));
        //     setTasks(data);
        // },[])

        const removeTask=(id)=>{
            let aux=tasks.filter((task)=>task.id!==id)
            setTasks(aux);
            localStorage.setItem("tasks",JSON.stringify(aux));
            
        }
        return(<div className="items">
            {tasks.length===0?(<h2>There are no activities to pe displayed</h2>):( <table className="table">
        {tasks.map((task)=>{

            const {id,name}=task;
            return (
                <tr>
                    <td>{name}</td>
                    <td> <button  className="button" onClick={()=>removeTask(id)}>Delete</button></td>
                </tr>
            );
        })}
        </table>)}
           
        </div>);

    }
    export default DeleteTask;