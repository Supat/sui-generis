import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Contact from './Components/Contact';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
