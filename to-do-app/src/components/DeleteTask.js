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
    return(<div>
      {tasks.map((task)=>{

          const {id,name}=task;
          return (
              <div key={id}>

                  <h4>{name}</h4>
                  <button onClick={()=>removeTask(id)}>delete</button>
              </div>
          );
      })}




    </div>);

}
export default DeleteTask;