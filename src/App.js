import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import OpinionDetails from './OpinionDetails';
import Notfound from './NotFound';
function App() {
  // const likes = 50;
  // const title = "Welcome to the OpinionBox";
  // const Person = {name:"Viraj", Age:20};
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route  path="/create">
            <Create/>
          </Route>

          <Route  path="/opinions/:id">
            <OpinionDetails/>
          </Route>

          <Route path='*' >
            <Notfound/>
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
