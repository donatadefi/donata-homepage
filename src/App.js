import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
