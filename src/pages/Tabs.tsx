import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs, IonRouterOutlet } from '@ionic/react';
import { chatbubble, home } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

import Home from './Home';
import Chat from './Chat';

const Tabs: React.FC = () => {
    return (
        <IonTabs className="theme-page theme-page-pad">
            <IonRouterOutlet>
                <Redirect exact path="/main" to="/home" />

                <Route path="/home" component={Home} exact={true} />
                <Route path="/chat" component={Chat} exact={true} />
            </IonRouterOutlet>
            <IonTabBar className="theme-tab" id="hafar-tab" slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel className="theme-text-1 theme-font-1">Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="chat" href="/chat">
                    <IonIcon icon={chatbubble} />
                    <IonLabel className="theme-text-2 theme-font-1">Chat</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

export default Tabs;