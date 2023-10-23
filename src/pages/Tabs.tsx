import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs, IonRouterOutlet } from '@ionic/react';
import { chatbubble, home, call } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

import Home from './Home';
import Chat from './Chat';
import Call from './Call';
import ChatPanel from './ChatPanel';
import * as Settings from './Settings';

const Tabs: React.FC = () => {
    return (
        <IonTabs className="theme-page theme-page-pad">
            <IonRouterOutlet>
                <Redirect exact path="/main" to="/home" />

                <Route path="/home" component={Home} exact={true} />
                <Route path="/chat" component={Chat} exact={true} />
                <Route path="/chat/:id" component={ChatPanel} exact={true} />
                <Route path="/call" component={Call} exact={true} />
                <Route path="/settings" component={Settings.Settings} exact={true} />
                <Route path="/settings/me" component={Settings.MyAccount} exact={true} />
                <Route path="/settings/zero" component={Settings.ZeroMode} exact={true} />
                
            </IonRouterOutlet>
            <IonTabBar className="theme-tab" id="hafar-tab" slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel className="theme-text-1 theme-font-1">Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="chat" href="/chat">
                    <IonIcon icon={chatbubble} />
                    <IonLabel className="theme-text-1 theme-font-1">Chat</IonLabel>
                </IonTabButton>
                <IonTabButton tab="call" href="/call">
                    <IonIcon icon={call} />
                    <IonLabel className="theme-text-1 theme-font-1">Call</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

export default Tabs;