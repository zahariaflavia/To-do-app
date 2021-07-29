    import {useState,useEffect} from 'react'
    import { v4 as uuidv4 } from 'uuid';
    import DatePicker from "react-datepicker";
    import "react-datepicker/dist/react-datepicker.css";
    const AddTask=()=>{

        const [name,setName]=useState('');
        const [tasks,setTasks]=useState([]);
        const [date, setDate] = useState(new Date());
        const [error,setError]=useState("");
        let today = new Date();
        let currentDate=today.toJSON().slice(0,10);
        useEffect(()=>{
          const data=JSON.parse(localStorage.getItem("tasks"));
          if(data){
              setTasks(data);
          }
      },[])
      
      useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
      },[tasks])
        const handleSubmit=(e)=>{
            e.preventDefault();
            let aux=date.toJSON().slice(0,10);
            if(aux.localeCompare(currentDate)<0)
            { setError("Please choose a valid date")
              setTimeout(() => {
                setError("");
              }, 3000);
            }
            else
            if(name&&aux.localeCompare(currentDate)>=0){
              
                const newTask={id:uuidv4(),name:name,status:'incomplete',date:date};
                setTasks([...tasks,newTask])
                setName('');
                setDate(new Date());
            }
            
        }
        return <div className="items c">
            
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
                  <div>
                  <label htmlFor='date'>Choose a date: </label>
                  </div>
                <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(d) => setDate(d)} />
                <div>{error&&<h3>{error}<br/>Today is {currentDate}</h3>}</div>
                </div>
                <div>
                <button type='submit' className='button' >Add </button>
              </div>
                </form>
                
        </div>
    }

    export default AddTask;