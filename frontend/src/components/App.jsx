import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CalendarLayout from 'components/calendar/CalendarLayout';
import HomeLayout from 'components/home/HomeLayout';
import ProjectLayout from 'components/project/ProjectLayout';
import NotFound from 'components/base/NotFound';

const App = () => {
  return (  
    <React.Fragment>
      <ToastContainer />
      <main>
        <Switch>
          <Route path="/calendar" component={CalendarLayout} />
          <Route path="/project" component={ProjectLayout} />
          <Route path="/" exact component={HomeLayout} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;