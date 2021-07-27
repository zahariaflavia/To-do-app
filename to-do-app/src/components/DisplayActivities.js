    import {useState} from 'react'
    import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
            {tasks.filter((task)=>task.status==='incomplete').length===0?(<h2>Congratulations! You completed all your activities!</h2>):(<h3>Activities to be completed: {tasks.filter((task)=>task.status==='incomplete').length}</h3>)}
            <table className="table">
                <tbody>
        {tasks.filter((task)=>task.status==='incomplete').map((task)=>{
            const {id,name,status}=task;
            return(
                <tr key={id}>
                <td>{name}</td>
                <td><button className="button" onClick={()=>handleChange(id)}>Done</button></td>
                </tr>
                
            );
        })}
        {tasks.filter((task)=>task.status==='complete').map((task)=>{
            const {id,name}=task;
            return(
                <tr key={id}>
                <td>{name}</td>
                <td><CheckCircleOutlineIcon/></td>
                </tr>
                
            );
        })}
        </tbody>
        </table> 
        </div>
    }

    export default DisplayActivities