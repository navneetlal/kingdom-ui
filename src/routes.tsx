import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginPage = React.lazy(() => import('./Pages/LoginPage'));
const HomePage = React.lazy(() => import('./Pages/HomePage'));

export default function RouterComponent() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}