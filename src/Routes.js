import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing';
import Timeline from './components/timeline/Timeline';
import Signup from './components/auth/Signup';
import Profile from './components/profile/Profile';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/timeline" component={Timeline} />
        <Route path='/profile' component={Profile} />
    </Switch>
  )
}
  

export default Routes
