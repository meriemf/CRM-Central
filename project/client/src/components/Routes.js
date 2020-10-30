import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddClient from './AddClient';
import ClientList from './ClientList';
import EditClient from './EditClient';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import EditProject from './EditProject';

const Routes = () => {
return (
  <Switch >
    <Route exact path='/' component ={ClientList} />
    <Route exact path='/clients' component = {ClientList} />
    <Route exact path='/clients/new' component = {AddClient} />
    <Route exact path='/clients/:id/edit' component = {EditClient} />
    <Route exact path='/projects' component={ProjectList} />
    <Route exact path='/projects/new' component={AddProject} />
    <Route exact path='/projects/:id/edit' component = {EditProject} />
    {/* <Route exact path='/projects/:id/edit' component={EditProject} /> */}
  </Switch>
)
}

export default Routes;