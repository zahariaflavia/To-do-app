        import { useState,useEffect } from "react";
        import EditIcon from '@material-ui/icons/Edit';
        import DatePicker from "react-datepicker";
        import moment from 'moment'
        
        const EditTask=()=>{
            const [tasks,setTasks]=useState([]);
            const [edit,setEdit]=useState("");
            const [editText,setEditText]=useState("");
            const [dateEdit,setDateEdit]=useState(new Date());
            
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
        const handleSave=(id)=>{
            let aux=[...tasks];
            let elementIndex=tasks.findIndex((task)=>task.id===id)
            aux[elementIndex]={...aux[elementIndex],name:editText,date:dateEdit.toJSON()}
            setTasks(aux);
            setEditText("");
            setEdit("");
            setDateEdit(new Date());
            
        }
        const handleEdit=(name,id,date)=>{
            setEditText(name);
            setEdit(id);
            let d=moment.utc(date).toDate();
            setDateEdit(d);
            console.log(d);
        }
        
            return (
                <div>
                    <div className="items">
                    {tasks.filter((task)=>task.status==="incomplete").length===0?(<h3>There are no incomplete activities to be displayed</h3>):(<table className="table">
                        <tbody>
                            
                {tasks.filter((task)=>task.status==='incomplete').sort(compareDates).map((task)=>{
                    const {id,name,date}=task;
                    return(
                        <tr key={id}>
                        <td>{edit===id?(<DatePicker selected={dateEdit} onChange={(d) => setDateEdit(d)} />):(<td>{date.slice(0,10)}</td>)}</td>   
                        {/* <td>{date.slice(0,10)}</td>    */}
                        <td>{edit===id?(<input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/>):(<td>{name}</td>)}</td>
                        <td>{edit===id?(<button className="button" onClick={()=>handleSave(id)}>Save</button>):(<EditIcon onClick={()=>handleEdit(name,id,date)}/>)}</td> 
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