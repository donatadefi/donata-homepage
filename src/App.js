import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home';
import FrontPage from './FrontPage/FrontPage';
import User from './User/User';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/front-page" component={FrontPage} />
        <Route path="/user/:id" component={User} />
      </BrowserRouter>
    </div>
  );
}

export default App;
