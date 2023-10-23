import React from 'react';
import { IonPage, IonInfiniteScroll, IonInfiniteScrollContent, IonContent, IonFabButton, IonIcon, IonFabList, IonFab, IonTitle, IonHeader, IonToolbar, IonSearchbar, IonItem, IonAvatar, IonItemGroup } from '@ionic/react';

import HafarPost from '../components/HafarPost';
import { image, videocam, volumeLow, text, add } from 'ionicons/icons';
import HafarHeader from '../components/HafarHeader';
import HafarMenu from '../components/HafarMenu';

const Home: React.FC = () => {
    return (
        <IonPage className="theme-page">
            <HafarMenu>
                <IonAvatar className="hafar-avatar"/>                
            </HafarMenu>
            <HafarHeader>Home</HafarHeader>
            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton className="theme-button">
                    <IonIcon icon={add} />
                </IonFabButton>
                <IonFabList side="start">
                    <IonFabButton className="theme-button">
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

            <IonContent className="theme-content">
                <IonInfiniteScroll>
                    <IonInfiniteScrollContent loadingSpinner="circles" loadingText="More on the way..." className="theme-content">
                        <HafarPost profileId="54313" postId="42053176" profile="Matthewdfgdfghfhgfdfgfdgdfdfgdfgdfdfgdfgfgdgdfgdfgdgdgdfgdfgdgdfg" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday </HafarPost>
                        <HafarPost profileId="54313" postId="42053176" profile="Matthew Jingle" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday dffssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</HafarPost>
                        <HafarPost profileId="54313" postId="42053176" profile="Matthew Jingle" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday </HafarPost>
                        <HafarPost profileId="54313" postId="42053176" profile="Matthew Jingle" date={new Date(2021, 12, 24, 1, 35, 26, 2)}>It's my bday </HafarPost>
                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage >
    );
}

export default Home;