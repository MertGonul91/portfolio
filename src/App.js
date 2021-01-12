import './App.css';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Architecture from './screens/Architecture';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/projects' component={Projects} />
      <Route path='/architecture' component={Architecture} />
    </Router>
  );
}

export default App;
