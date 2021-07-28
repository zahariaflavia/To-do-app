import {useState} from 'react'
const UpcomingActivities=()=>{
        let data=JSON.parse(localStorage.getItem("tasks"))||[];
        let today = new Date();
        let month=today.getMonth()+1
        let month1=month<=10?('0'+month):(month)
        let currentDate=today.getFullYear()+'-'+month1+'-'+today.getDate();
        const [tasks,setTasks]=useState(data);
        const compareDates=(t1,t2)=>t1.date.localeCompare(t2.date);
            
    return(
        <div className="items">
            <table className="table">
                <tbody>
                    {tasks.filter((task)=>task.date.slice(0,10)!==currentDate).sort(compareDates).map((task)=>{
                        const {id,name,date}=task;
                        return (
                            <tr key={id}>
                                <td>{date.slice(0,10)}</td>
                                <td>{name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default UpcomingActivities;