import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import DeleteTask from "./components/DeleteTask";
import DisplayActivities from "./components/DisplayActivities";
import EditTask from "./components/EditTask";
import UpcomingActivities from "./components/UpcomingActivities";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <DisplayActivities />
          </Route>
          <Route path="/add">
            <AddTask />
          </Route>
          <Route path="/edit">
            <EditTask />
          </Route>
          <Route path="/delete">
            <DeleteTask />
          </Route>
          <Route path="/upcoming">
            <UpcomingActivities />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
