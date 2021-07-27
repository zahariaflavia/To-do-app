import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddTask=()=>{

    const [name,setName]=useState('');
    const data=JSON.parse(window.localStorage.getItem("tasks")) || [];
    
    const [tasks,setTasks]=useState(data);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
          
            const newTask={id:uuidv4(),name:name,status:'incomplete'};
            setTasks([...tasks,newTask])
            window.localStorage.setItem("tasks",JSON.stringify([...tasks,newTask]));
           // window.localStorage.clear();
            setName('');
        }
        
    }
    return <div className="items">
        <h2>Add activity</h2>
        <form onSubmit={handleSubmit} className="form">
          <h3>What are your activities for today?</h3>
        <div>
            <label htmlFor='name'>Activity Description: </label>
            </div>
            <div>
            <input 
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            </div>
            <div>
            <button type='submit' className='button' >Add </button>
          </div>
            </form>
            
    </div>
}

export default AddTask;