        import {useState,useEffect} from 'react'
        import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
        const DisplayActivities=()=>{
            let today = new Date();
            let currentDate=today.toJSON().slice(0,10);
            const [tasks,setTasks]=useState([]);

            useEffect(()=>{
                const data=JSON.parse(localStorage.getItem("tasks"));
                if(data){
                    let aux=data.filter((d)=>d.date.slice(0,10).localeCompare(currentDate)>=0)
                    setTasks(aux);
                }
            },[])
            
            useEffect(()=>{
              localStorage.setItem("tasks",JSON.stringify(tasks));
            },[tasks])
            const handleChange=(id)=>{
                const aux=[...tasks];
                const elementIndex=tasks.findIndex(element=>element.id===id)
                aux[elementIndex]={...aux[elementIndex],status:"complete"};
                setTasks(aux);
            }
           console.log(tasks);
            return <div className="items">
                 <h1 >Welcome to Your Day</h1>
                
                {(tasks.filter((task)=>task.date.slice(0,10)===currentDate).length!==0) && tasks.filter((task)=>{return task.status==='incomplete'&&
                task.date.slice(0,10)===currentDate}).length===0?(<h2>Congratulations! You completed all your activities for today!</h2>):
                (<h3>Activities to be completed today: {tasks.filter((task)=>{return task.status==='incomplete'&&task.date.slice(0,10)===currentDate}).length}</h3>)} 
                <table className="table">
                    <tbody>
            {tasks.filter((task)=>{return task.status==='incomplete'&&task.date.slice(0,10)===currentDate}).map((task)=>{
                const {id,name,date}=task;
                return(
                    <tr key={id}>
                        <td>{date.slice(0,10)}</td>
                    <td>{name}</td>
                    <td><button className="button" onClick={()=>handleChange(id)}>Done</button></td>
                    </tr>
                    
                );
            })}
            {tasks.filter((task)=>{return task.status==='complete'&& task.date.slice(0,10)===currentDate}).map((task)=>{
                const {id,name,date}=task;
                return(
                    <tr key={id}>
                        <td>{date.slice(0,10)}</td>
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