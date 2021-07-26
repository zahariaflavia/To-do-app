import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Navbar from'./components/Navbar'
import Content from './components/Content'
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <Navbar/>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/add"></Route>
          <Route path="/edit"></Route>
          <Route path="/delete"></Route>
          <Route path="/done"></Route>
        </Switch>
      </Router>
      <Content/>
    </div>
  );
}

export default App;
