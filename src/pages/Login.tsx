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
    
	const [phoneno, setPhoneno] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [notfoundError, setNotfoundError] = useState(false);

	const signin = async (e: React.FormEvent) => {
		e.preventDefault();
        setFormSubmitted(true)

        setNotfoundError(true)
		if (!phoneno || !password) {
            setShowWarn(true)
            
            
		}

		if (phoneno && password) {
            
            Cookies.setCookie(Cookies.loggedCookie,true,365);
            window.location.href = "/"
		}
	};
    return (        
        <IonPage className="theme-page theme-page-pad">
            {Cookies.getCookie(Cookies.loggedCookie) ? <Route exact render={() => <Redirect to="/main" />} /> : <Route exact render={() => <Redirect to="/login" />} />}}
            <IonText className="theme-text-1 theme-title theme-font-1">Let's get you back in</IonText>

            <IonAlert
				isOpen={showWarn}
				onDidDismiss={() => setShowWarn(false)}
				cssClass="theme-alert"
				message={'All fields are required to proceed.'}
				buttons={['Try Again']}
			/>

        <form noValidate onSubmit={signin}>
            <IonCol className="theme-object">
            <IonText className="theme-text-3 theme-font-1 theme-subtitle">Phone number: </IonText>
                <IonInput className="theme-input theme-font-1" autocomplete="on" pattern="(([0-9]+)|(\d+@\d+\.\d+))" placeholder="Phone number" onIonChange={e => setPhoneno(e.detail.value!)}/>
            </IonCol>
            <IonCol className="theme-object">
            <IonText className="theme-text-3 theme-font-1 theme-subtitle">Password: </IonText>
                <IonInput className="theme-input theme-font-1" type="password" autocomplete="on" placeholder="You're in safe hands" onIonChange={e => setPassword(e.detail.value!)}/>
            </IonCol>
            {formSubmitted && notfoundError && <IonText color="danger" style={{marginTop: "0px", fontSize:"0.4em", marginBottom: "5px", padding: "0px"}}>
            Account wasn't found here or on Telegram. Try again.<br/>
            </IonText>}
            <IonText className="theme-font-1 theme-text-3 theme-subtitle">Don't have an account yet? <a className="theme-link" href="/signup">Create one</a></IonText>
            <IonButton type="submit" expand="block" className="theme-button" style={{height: "6vh", fontSize: "4vw"}}>Sign In</IonButton>
			</form>
        </IonPage>
    );
}

export default Login;