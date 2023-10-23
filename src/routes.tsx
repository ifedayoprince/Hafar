import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';

import Welcome from "./pages/Welcome/Welcome"
import Features from "./pages/Welcome/Features"

import Tabs from './pages/Tabs';

import Signup from './pages/Signup';
import Login from './pages/Login';

import Cookies from './utils/cookies';

const Routes: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>

                <Route path="/main" component={Tabs} exact={true} />

                <Route path="/welcome" component={Welcome} exact={true} />
                <Route path="/welcome/page2" component={Features} exact={true} />

                <Route path="/signup" component={Signup} exact={true} />
                <Route path="/login" component={Login} exact={true} />

                {Cookies.getCookie(Cookies.loggedCookie) ? <Route exact path="/" render={() => <Redirect to="/main" />} /> : <Route exact path="/" render={() => <Redirect to="/welcome" />} />}
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

export default Routes;