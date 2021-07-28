import {Link} from 'react-router-dom'
const Navbar=()=>{
    return <div className="items nav">
     <ul className="nav-container">
         <li className="nav-items"><Link className="link" to="/">Tasks For Today</Link></li>
         <li className="nav-items"><Link className="link" to="/add">Add Activity</Link></li>
         <li className="nav-items"><Link className="link" to="/edit">Edit Activity</Link></li>
         <li className="nav-items"><Link className="link" to="/delete">Delete Activity</Link></li>
         <li className="nav-items"><Link className="link" to="/upcoming">Upcoming Activities</Link></li>
     </ul>
    </div>
}

export default Navbar;