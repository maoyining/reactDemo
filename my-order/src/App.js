import React from 'react';
import './App.css';
import DatePicker from './components/Datepicker/index'
import SideBar from './components/Sidebar/index'
import Index from './views/index'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
     <Router>
       <Route path="/datePicker" component={DatePicker}></Route>
       <Route path="/sidebar" component={SideBar}></Route>
       <Route exact path="/" component={Index}></Route>
     </Router>
    </div>
  );
}

export default App;
