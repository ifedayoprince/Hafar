import React, { useState } from 'react';
import { IonPage, IonModal, IonText, IonRow, IonInput, IonSelect, IonSelectOption, IonButton, IonCol, IonIcon, IonAlert } from '@ionic/react';
import { star } from 'ionicons/icons'

import Cookies from '../utils/cookies';
import { Route, Redirect } from 'react-router';

const Signup: React.FC = () => {
	var style = {
		t: {
			textAlign: "center",
			display: "none"
		},
		select: {
			width: "40vw",
		},
		text: {
			width: "46vw"
		}
	}

	const [showWarn, setShowWarn] = useState(false);
	const [showOTP, setShowOTP] = useState(false);

	return (
		<IonPage className="theme-page theme-page-pad">
			{Cookies.getCookie(Cookies.loggedCookie) ? <Route exact render={() => <Redirect to="/main" />} /> : <Route exact render={() => <Redirect to="/signup" />} />}}
			<IonText className="theme-text-1 theme-title theme-font-1">Let's get you started</IonText>

			<IonAlert
				isOpen={showWarn}
				onDidDismiss={() => setShowWarn(false)}
				cssClass="theme-alert"
				message={'Pls fill all fields marked with a star.'}
				buttons={['OK']}
			/>

			<IonModal swipeToClose={true} isOpen={showOTP} onDidDismiss={() => setShowOTP(false)} cssClass="theme-alert">
				<IonInput className="theme-input theme-font-1" placeholder="6-digit OTP" maxlength={6} type="number"/>
			</IonModal>

			<IonCol className="theme-object">
				<IonRow>
					<IonText className="theme-text-2 theme-font-1 theme-subtitle" style={style.text}>First Name: <IonIcon icon={star}></IonIcon></IonText>
					<IonText className="theme-text-2 theme-font-1 theme-subtitle">Last Name: <IonIcon icon={star}></IonIcon></IonText>
				</IonRow>
				<IonRow>
					<IonInput id="fname" className="theme-input theme-font-1" autocomplete="on" placeholder="First name"/>
					<IonInput id="lname" className="theme-input theme-font-1" autocomplete="on" placeholder="Last name"/>
				</IonRow>
			</IonCol>

			<IonCol className="theme-object">
				<IonText className="theme-text-3 theme-font-1 theme-subtitle">Phone number: <IonIcon icon={star}></IonIcon></IonText>
				<IonInput id="epno" className="theme-input theme-font-1" autocomplete="on" pattern="(([0-9]+)|(\d+@\d+\.\d+))" placeholder="Phone number"/>
			</IonCol>

			<IonCol className="theme-object">
				<IonText className="theme-text-3 theme-font-1 theme-subtitle">Password: <IonIcon icon={star}></IonIcon></IonText>
				<IonInput id="pword" className="theme-input theme-font-1" type="password" autocomplete="on" placeholder="You're in safe hands"/>
			</IonCol>
			<IonCol className="theme-object">
				<IonRow>
					<IonText className="theme-text-2 theme-font-1 theme-subtitle" style={style.text}>Birthdate:</IonText>
					<IonText className="theme-text-2 theme-font-1 theme-subtitle">Gender:</IonText>
				</IonRow>
				<IonRow>
					<IonInput id="bday" type="date" className="theme-input theme-font-1" style={style.select} autocomplete="on" placeholder="Birthdate"/>
					<IonSelect id="gender" className="theme-input theme-font-1" style={style.select}>
						<IonSelectOption value="male">Male</IonSelectOption>
						<IonSelectOption value="female">Female</IonSelectOption>
						<IonSelectOption value="none">Rather not say</IonSelectOption>
					</IonSelect>
				</IonRow>
			</IonCol>
			<IonText className="theme-font-1 theme-subtitle theme-text-3">Already have an account? <a className="theme-link" href="/login">Login</a></IonText>

			<IonButton onClick={() => {
				setShowWarn(true);
				setShowOTP(true);
				Cookies.setCookie(Cookies.loggedCookie, true)

				window.location.href = "/main"
			}}>Create Account</IonButton>

		</IonPage>
	);
}

export default Signup;