import React, { useState } from 'react';
import { IonPage, IonText, IonRow, IonInput, IonCheckbox, IonButton, IonCol, IonAlert, IonIcon } from '@ionic/react';
import Cookies from '../utils/cookies';
import { Route, Redirect } from 'react-router';
import { star } from 'ionicons/icons';

const Login: React.FC = () => {
    var style = {
        select: {
            width: "40vw",
        },
        text: {
            width: "40vw"
        },
        cb: {
            marginTop: "1.05vh",
            marginRight: "2vw"
        }
        
    }

    const [showWarn, setShowWarn] = useState(false);
    
    return (        
        <IonPage className="theme-page theme-page-pad">
            {Cookies.getCookie(Cookies.loggedCookie) ? <Route exact render={() => <Redirect to="/main" />} /> : <Route exact render={() => <Redirect to="/login" />} />}}
            <IonText className="theme-text-1 theme-title theme-font-1">Let's get you back in</IonText>

            <IonAlert
				isOpen={showWarn}
				onDidDismiss={() => setShowWarn(false)}
				cssClass="theme-alert"
				message={'Pls fill all fields marked with a star.'}
				buttons={['OK']}
			/>

            <IonCol className="theme-object">
            <IonText className="theme-text-3 theme-font-1 theme-subtitle">Phone number: <IonIcon icon={star}></IonIcon></IonText>
                <IonInput className="theme-input theme-font-1" autocomplete="on" pattern="(([0-9]+)|(\d+@\d+\.\d+))" placeholder="Phone number"></IonInput>
            </IonCol>
            <IonCol className="theme-object">
            <IonText className="theme-text-3 theme-font-1 theme-subtitle">Password: <IonIcon icon={star}></IonIcon></IonText>
                <IonInput className="theme-input theme-font-1" type="password" autocomplete="on" placeholder="You're in safe hands"></IonInput>
            </IonCol>

            <IonRow className="theme-object">
                <IonCheckbox style={style.cb}></IonCheckbox>
                <IonText className="theme-font-1 theme-subtitle theme-text-2">Remember me.</IonText>
            </IonRow>
            <IonText className="theme-font-1 theme-text-3 theme-subtitle">Don't have an account yet? <a className="theme-link" href="/signup">Create one</a></IonText>
            <IonButton onClick={() => {
					setShowWarn(true);
					Cookies.setCookie(Cookies.loggedCookie,true)

					window.location.href = "/main"
			}}>Sign in</IonButton>
        </IonPage>
    );
}

export default Login;