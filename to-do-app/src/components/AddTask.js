import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddTask=()=>{

    const [name,setName]=useState('');
    const data=JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks,setTasks]=useState(data);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
          
            const newTask={id:uuidv4(),name:name,status:'incomplete'};
            setTasks([...tasks,newTask])
            window.localStorage.setItem("tasks",JSON.stringify([...tasks,newTask]));
            setName('');
        }
        
    }
    return <div className="items">
        <h2>Add activity</h2>
        <form onSubmit={handleSubmit} className="form">
        <div className='form-control'>
            <label htmlFor='name'>Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            </div>
            <button type='submit' className='button' >
            add 
          </button>
            </form>
            
    </div>
}

export default AddTask;