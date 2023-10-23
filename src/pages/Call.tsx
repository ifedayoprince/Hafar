import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import HafarHeader from '../components/HafarHeader';

import './Chat.scss'
import HafarScroll from '../components/HafarScroll';
import HafarCall from '../components/HafarCall';

const Call: React.FC = () => {
    return (
        <IonPage className="theme-page">
            <HafarHeader>Friends</HafarHeader>
            <IonContent className="theme-content">
                <HafarScroll text="More on the way">
                    <HafarCall bio="Work at Tegribyte Corp." profile="Andrew J" active={true}/>
                    <HafarCall bio="An international photographer." profile="Johny Ken" active={true}/>
                </HafarScroll>
            </IonContent>
        </IonPage>
    );
}

export default Call;