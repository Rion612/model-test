
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { getAllUser, getCourses } from "./Actions";
import './App.css';
import Header from './Component/Header/Header';
import { useDispatch } from 'react-redux';
import  Dashboard  from './Container/Dashboard/Dashboard'
import Course from "./Container/Course/Course";
import Payment from "./Container/Payment/Payment";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses())
  }, [])
  useEffect(() => {
    dispatch(getAllUser())
  }, [])
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/user/payments" exact component={Payment} />
          <Route path="/courses" exact component={Course} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
