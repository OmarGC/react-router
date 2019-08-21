import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Nav from './nav/Nav'
import Dash from './dashboard/Dashboard'
import Reports from './reports/Reports'
import Settings from './settings/settings'
import Ciudad from './ciudades/Ciudades'
import TipoPropiedad from './tipoPropiedad/TipoPropiedad'

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <div>
        <Route path="/" exact component={Dash} />
        <Route path="/config" component={Settings} />
        <Route path="/reportes" component={Reports} />
        <Route path="/ciudad" component={Ciudad} />
        <Route path="/tipo" component={TipoPropiedad} />
      </div>
    </Router>
  );
}

export default App;
