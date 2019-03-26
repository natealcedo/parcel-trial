import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Suspense>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
