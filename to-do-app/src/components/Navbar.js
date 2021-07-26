import {Link} from 'react-router-dom'
const Navbar=()=>{
    return <div className="items nav">
     <ul className="nav-container">
         <li className="nav-items"><Link className="link" to="/">Tasks For Today</Link></li>
         <li className="nav-items"><Link className="link" to="/add">Add Task</Link></li>
         <li className="nav-items"><Link className="link" to="/edit">Edit Task</Link></li>
         <li className="nav-items"><Link className="link" to="/delete">Delete Task</Link></li>
         <li className="nav-items"><Link className="link" to="/done">Completed Tasks</Link></li>
     </ul>
    </div>
}

export default Navbar;