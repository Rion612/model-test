
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { getCourses } from "./Actions";
import './App.css';
import Header from './Component/Header/Header';
import { useDispatch } from 'react-redux';
import  Dashboard  from './Container/Dashboard/Dashboard'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses())
  }, [])
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
