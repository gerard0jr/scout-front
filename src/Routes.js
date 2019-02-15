import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './landing/Landing';

const Routes = () => {
  return (
    <Switch>
        <Route path="/" component={Landing} />
    </Switch>
  )
}
  

export default Routes