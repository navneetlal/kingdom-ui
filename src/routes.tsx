import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const LoginPage = lazy(() => import('./Pages/LoginPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const ClanPage = lazy(() => import('./Pages/ClanPage'));

export default function RouterComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/clans">
          <ClanPage />
        </Route>
      </Switch>
    </Suspense>
  )
}