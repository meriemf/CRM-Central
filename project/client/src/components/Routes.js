import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddClient from './AddClients';
import ClientList from './ClientList';
import EditClient from './EditClient';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

const Routes = () => {
return (
  <Switch >
    <Route exact path='/' component ={ClientList} />
    <Route exact path='/clients' component = {ClientList} />
    <Route exact path='/clients/new' component = {AddClient} />
    <Route exact path='/clients/:id/edit' component = {EditClient} />
    <Route exact path='/projects' component={ProjectList} />
    <Route exact path='/projects/new' component={AddProject} />
  </Switch>
)
}

export default Routes;
