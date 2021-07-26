import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Navbar from'./components/Navbar'
import AddTask from './components/AddTask';
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <Navbar/>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/add"><AddTask/></Route>
          <Route path="/edit"></Route>
          <Route path="/delete"></Route>
          <Route path="/done"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
