import Home from './screens/Home';
import Projects from './screens/Projects';
import Architecture from './screens/Architecture';
import { Route, Switch, useLocation } from 'react-router-dom';
import Contact from './screens/Contact';
import { AnimatePresence } from 'framer-motion';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Container maxW='100vw' minW='auto' key={Math.random()}>
          <Flex direction='column' h='100vh'>
            <Header />
            <Spacer />
            <Switch location={location} key={location.pathname}>
              <Route path='/' component={Home} exact />
              <Route path='/projects' component={Projects} />
              <Route path='/architecture' component={Architecture} />
              <Route path='/contact' component={Contact} />
            </Switch>
            <Spacer />
            <Footer />
          </Flex>
        </Container>
      </AnimatePresence>
    </>
  );
}

export default App;
