import { IonPage, IonImg, IonText, IonButton, IonCol, IonFab } from '@ionic/react';
import React from 'react';
import Cookies from '../../utils/cookies';
import { Redirect, Route } from 'react-router';

var style = {
    wicon: {
        marginTop: "30vh"
    },
    wbtn: {
        top: "-2vh"
    },
    splash: {
        paddingLeft: "10vw"
    },
    wlist: {
        paddingLeft: "15vw"
    }
}
const Features: React.FC = () => {
    return (
        <IonPage className="theme-page-center">
            {Cookies.getCookie(Cookies.loggedCookie) ? <Route exact render={() => <Redirect to="/main" />} /> : <Route exact render={() => <Redirect to="/welcome/page2" />} />}}
            <IonImg src="/assets/icon/favicon.png" className="welcome_icon" style={style.wicon}></IonImg>
            <IonCol className="theme-splashtext" style={style.splash}>
                <IonText className="theme-text-1 theme-font-1">Its:</IonText>
                <ul style={style.wlist}>
                    <li className="theme-text-2 theme-font-1">Fast and Efficient.</li>
                    <li className="theme-text-3 theme-font-1">Safe and Secure.</li>
                </ul>
            </IonCol>
            <IonFab vertical="bottom" horizontal="end">
                <IonButton shape="round" style={style.wbtn} color="green" className="theme-button welcome_btn" href="/signup">NEXT >></IonButton>
            </IonFab>
        </IonPage>
    )
};

export default Features