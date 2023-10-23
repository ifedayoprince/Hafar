import React, { useState } from 'react';
import { IonPage, IonContent, IonFabButton, IonIcon, IonFabList, IonFab, IonText, IonRow, IonTitle, IonSearchbar, IonBackdrop, IonButtons, IonButton } from '@ionic/react';

import HafarPost from '../components/HafarPost';
import { image, videocam, volumeLow, text, add, search, settings } from 'ionicons/icons';
import HafarHeader from '../components/HafarHeader';
import HafarMenu from '../components/HafarMenu';
import HafarScroll from '../components/HafarScroll';
import HafarAvatar from '../components/HafarAvatar';

const Home: React.FC = () => {

    return (
        <IonPage className="theme-page">
            {/* <HafarMenu>
                <HafarSettings/>
            </HafarMenu> */}
            <HafarHeader notext={true}>
                <IonRow style={{ paddingLeft: "4vw" }}>
                    <HafarAvatar active={false} style={{ width: "13vw", height: "13vw" }} />
                    <IonTitle className="theme-font-size" style={{ paddingLeft: "2vw", fontSize: "5vw" }}>Hafar</IonTitle>
                    <IonButtons>
                        <IonButton shape="round" className="theme-button"><IonIcon icon={search}/></IonButton>
                        <IonButton shape="round" className="theme-button" routerLink="/settings"><IonIcon icon={settings}/></IonButton>
                    </IonButtons>
                </IonRow>
            </HafarHeader>
            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton className="theme-button">
                    <IonIcon icon={add} />
                </IonFabButton>
                <IonFabList side="start">
                    <IonFabButton className="theme-button" href="/post#image">
                        <IonIcon icon={image} />
                    </IonFabButton>
                    <IonFabButton className="theme-button">
                        <IonIcon icon={videocam} />
                    </IonFabButton>
                    <IonFabButton className="theme-button">
                        <IonIcon icon={volumeLow} />
                    </IonFabButton>
                    <IonFabButton className="theme-button">
                        <IonIcon icon={text} />
                    </IonFabButton>
                </IonFabList>
            </IonFab>

            <HafarScroll text="More on the way">
                <HafarPost profileId="54313" postId="42053176" profile="Matthewdfgdfghfhgfdfgfdgdfdfgdfgdfdfgdfgfgdgdfgdfgdgdgdfgdfgdgdfg" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday </HafarPost>
                <HafarPost profileId="54313" postId="42053176" profile="Matthew Jingle" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday dffssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</HafarPost>
                <HafarPost profileId="54313" postId="42053176" profile="Matthew Jingle" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday </HafarPost>
                <HafarPost profileId="54313" postId="42053176" profile="Matthew Jingle" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday </HafarPost>
            </HafarScroll>
        </IonPage>
    );
}

export default Home;