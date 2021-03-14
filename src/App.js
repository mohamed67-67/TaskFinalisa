import Table from './Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LogIn from './layOut/LogIn'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' > <Table/> </Route>
          <Route path='/login'>  <LogIn/> </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
