import './App.css';
import Home from './screens/Home';
import Projects from './screens/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/projects' component={Projects} />
    </Router>
  );
}

export default App;
