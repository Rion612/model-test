
import './App.css';
import Home from './Conatiner/Home/Home';
import {
  Switch,
  Route
} from "react-router-dom";
import SignIn from './Conatiner/SignIn/signin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCourse, getPaymentDetails, isUSerLoggedin } from './Actions';

import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Profile from './Conatiner/Profile/Profile';
import PrivateRoute from './Components/Hook/privateRoute'
import Course from './Conatiner/Course/Course';
import Register from './Conatiner/Register/Register';
import RegisterCourse from './Conatiner/Registered Course/registerCourse';
import ModeltestUnit from './Conatiner/ModelTestUnit/modeltest.unit';
import ModelTest from './Conatiner/ModelTest/modeltest';
import Question from './Conatiner/Question/questions';
import Result from './Conatiner/Result/Result';
import Summary from './Conatiner/Summary/Summary';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  useEffect(()=>{
    if(!user.authenticate){
      dispatch(isUSerLoggedin());
    }
  },[]);

  useEffect(()=>{
    dispatch(getAllCourse());
  },[]);

  useEffect(()=>{
    dispatch(getPaymentDetails());
  },[]);
  return (
    <div>
      <div>
      <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/signup" exact component={Register} />
          <PrivateRoute path="/myProfile" exact component={Profile} />
          <PrivateRoute path="/enrolled/courses" exact component={RegisterCourse} />
          <PrivateRoute path="/course/:slug" exact component={Course} />
          <PrivateRoute path="/model-tests/:slug/:unitId" exact component={ModeltestUnit} />
          <PrivateRoute path="/model-tests/:slug" exact component={ModelTest} />
          <PrivateRoute path="/model-tests/:slug/:modelId/questions" exact component={Question} />
          <PrivateRoute path="/all/model-tests/result/:userId" exact component={Result} />
          <PrivateRoute path="/model-test/exam/summary" exact component={Summary} />
        </Switch>
    </div>
    </div>
  );
}

export default App;
