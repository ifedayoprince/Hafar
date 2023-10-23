import React from 'react';
import { IonPage, IonBackButton, IonTitle, IonRow, IonItem, IonToggle, IonRange, IonText, IonInput } from '@ionic/react';
import HafarHeader from '../components/HafarHeader';
import HafarAvatar from '../components/HafarAvatar';
import '../components/HafarChat.scss'

export const Settings: React.FC = () => {
    var d = document.getElementById("hafar-tab")
    if (d) {
        d.setAttribute("hidden", "true")
    }
    return (
        <IonPage onEmptiedCapture={() => { alert("Done") }} className="theme-page">
            <HafarHeader notext>
                <IonRow style={{ paddingLeft: "4vw" }}>
                    <IonBackButton defaultHref="/" />
                    <IonTitle className="theme-font-size" style={{ paddingLeft: "2vw", fontSize: "5vw" }}>Settings</IonTitle>
                </IonRow>
            </HafarHeader>
            <IonItem routerLink="settings/me" button className="hafar-chatitem">
                <HafarAvatar active={false} />
                <IonTitle>My Account</IonTitle>
            </IonItem>
            <IonItem routerLink="/settings/zero" button className="hafar-chatitem">
                <IonTitle>Zero Mode</IonTitle>
            </IonItem>
        </IonPage>
    );
}

export const ZeroMode: React.FC = () => {
    return (
        <IonPage>
            <HafarHeader notext>
                <IonRow style={{ paddingLeft: "4vw", alignItems: "center" }}>
                    <IonBackButton defaultHref="/" />
                    <IonTitle className="theme-font-size" style={{ paddingLeft: "2vw", fontSize: "5vw" }}>Zero Mode</IonTitle>
                    <IonToggle className="theme-toggle" />
                </IonRow>
            </HafarHeader>
            <IonRow>
                <IonText>Select how frequent ads should appear</IonText>
                <IonInput placeholder="mins" type="number" min="1" className="theme-input"/>
            </IonRow>
        </IonPage>
    );
}

export const MyAccount: React.FC = () => {
    return (
        <IonPage>

        </IonPage>
    );
}