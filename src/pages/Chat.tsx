import React from 'react';
import { IonPage, IonList, IonItem, IonAvatar, IonText, IonIcon, IonCol, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import { eye } from 'ionicons/icons';
import HafarHeader from '../components/HafarHeader';

const Chat: React.FC = () => {
    return (
        <IonPage className="theme-page">
            
            <HafarHeader>Chat</HafarHeader>
            <IonList className="hafar-list">
                <IonContent className="theme-content">
                    <IonInfiniteScroll>
                        <IonInfiniteScrollContent loadingSpinner="circles" loadingText="More on the way..." className="theme-content">
                            <IonItem style={{ backgroundColor: "grey" }}>
                                <IonAvatar style={{ backgroundColor: "red", marginRight: "2vw" }} slot="start"></IonAvatar>
                                <IonCol>
                                    <IonTitle style={{ paddingLeft: "0px" }}>Jack</IonTitle>
                                    <IonText>Hello Andrew</IonText>
                                </IonCol>
                                <IonIcon slot="end" icon={eye} />
                            </IonItem>
                        </IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </IonContent>

            </IonList>
        </IonPage>
    );
}

export default Chat;