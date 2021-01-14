import './App.css';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Architecture from './screens/Architecture';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './screens/Contact';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/projects' component={Projects} />
      <Route path='/architecture' component={Architecture} />
      <Route path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
