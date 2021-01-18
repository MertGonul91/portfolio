import Home from './screens/Home';
import Projects from './screens/Projects';
import Architecture from './screens/Architecture';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import Contact from './screens/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location.key);
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' component={Home} exact />
          <Route path='/projects' component={Projects} />
          <Route path='/architecture' component={Architecture} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
