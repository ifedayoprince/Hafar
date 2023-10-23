import React, { useState } from 'react';
import { IonPage, IonModal, IonText, IonInput, IonButton, IonCol, IonAlert, IonRow, IonPopover } from '@ionic/react';
import Cookies from '../utils/cookies';
import { Route, Redirect } from 'react-router';

const Signup: React.FC = () => {
	var style = {
		t: {
			textAlign: "center",
			display: "none"
		},
		select: {
			width: "50%",
			maxWidth: "50%"
		},
		text: {
			width: "46vw"
		}
	}

	const [showWarn, setShowWarn] = useState(false);
	const [showOTP, setShowOTP] = useState(false);

	const [username, setUsername] = useState('');
	const [phoneno, setPhoneno] = useState('');
	const [password, setPassword] = useState('');

	const signup = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!username || !phoneno || !password) {
			setShowWarn(true)
		}

		if (username && phoneno && password) {
			setShowOTP(true)
		}
	};

	const done = async ()=>{
		Cookies.setCookie(Cookies.loggedCookie,true,365)
		window.location.href = "/"
	}

	return (
		<IonPage className="theme-page theme-page-pad">
			{Cookies.getCookie(Cookies.loggedCookie) ? <Route exact render={() => <Redirect to="/main" />} /> : <Route exact render={() => <Redirect to="/signup" />} />}}
			<IonText className="theme-text-1 theme-title theme-font-1">Let's get you started</IonText>

			<IonAlert
				isOpen={showWarn}
				cssClass="theme-alert"
				onDidDismiss={() => setShowWarn(false)}
				buttons={["Try Again"]}
				message="All fields are required to proceed."
			/>
			<IonPopover isOpen={showOTP} onDidDismiss={() => setShowOTP(false)}>
				<IonRow style={{ justifyContent: "space-between", diplay: "flex", backgroundColor:"black" }}>
					<IonText className="otp-picker">665755</IonText>
					<IonText className="otp-picker" onClick={done}>902268</IonText>
					<IonText className="otp-picker">433683</IonText>
				</IonRow>
			</IonPopover>

			<form noValidate onSubmit={signup}>
				<IonCol className="theme-object">
					<IonText className="theme-text-2 theme-font-1 theme-subtitle" style={style.text}>Username: </IonText>
					<IonInput id="fname" className="theme-input theme-font-1" autocomplete="on" placeholder="Username" onIonChange={e => setUsername(e.detail.value!)} />
				</IonCol>

				<IonCol className="theme-object">
					<IonText className="theme-text-3 theme-font-1 theme-subtitle">Phone number: </IonText>
					<IonInput id="epno" className="theme-input theme-font-1" autocomplete="on" pattern="(([0-9]+)|(\d+@\d+\.\d+))" placeholder="Phone number" onIonChange={e => setPhoneno(e.detail.value!)} />
				</IonCol>

				<IonCol className="theme-object">
					<IonText className="theme-text-3 theme-font-1 theme-subtitle">Password: </IonText>
					<IonInput id="pword" className="theme-input theme-font-1" type="password" autocomplete="on" placeholder="You're in safe hands" onIonChange={e => setPassword(e.detail.value!)} />
				</IonCol>
				<IonButton type="submit" expand="block" className="theme-button" style={{ height: "6vh", fontSize: "4vw" }}>Create Account</IonButton>
			</form>
			<IonText className="theme-font-1 theme-subtitle theme-text-3">Already have an account? <a className="theme-link" href="/login">Login</a></IonText>
		</IonPage>
	);
}

export default Signup;