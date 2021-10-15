import './App.css';
import { Home, Class, Student } from "./pages/Index";
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';
import Navbar from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        ASP React JS Frontend UI
      </h3>

      <Navbar />
      <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/class'>
              <Class />
            </Route>
            <Route exact path='/student'>
              <Student />
            </Route>
          </Switch>

      </div>
      </BrowserRouter>
  );
}

export default App;
