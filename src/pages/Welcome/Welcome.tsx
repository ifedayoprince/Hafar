import { IonPage, IonImg, IonText, IonRow, IonButton, IonFab } from '@ionic/react';
import './../../theme/welcome.css'
import React from 'react';
import Cookies from '../../utils/cookies';
import { Route, Redirect } from 'react-router';

const Welcome: React.FC = () => {
	return (
		<IonPage className="theme-page-center">
			{Cookies.getCookie(Cookies.loggedCookie) ? <Route exact render={() => <Redirect to="/main" />} /> : <Route exact render={() => <Redirect to="/welcome" />} />}}
			<IonImg src="/assets/icon/favicon.png" className="welcome_icon"></IonImg>
			<IonRow className="theme-splashtext">
				<IonText className="theme-text-1 theme-font-1">Hafar</IonText>
				<IonText className="theme-text-2 theme-font-1">&nbsp;is</IonText>
				<IonText className="theme-text-3 theme-font-1">&nbsp;the</IonText>
				<IonText className="theme-text-1 theme-font-1">&nbsp;new</IonText>
				<IonText className="theme-text-2 theme-font-1">&nbsp;way</IonText>
				<IonText className="theme-text-3 theme-font-1">&nbsp;to</IonText>
				<IonText className="theme-text-1 theme-font-1">&nbsp;meet</IonText>
				<IonText className="theme-text-2 theme-font-1">&nbsp;new</IonText>
				<IonText className="theme-text-3 theme-font-1">&nbsp;people</IonText>
				<IonText className="theme-text-1 theme-font-1">.</IonText>
			</IonRow>
			<IonFab vertical="bottom" horizontal="end">
				<IonButton shape="round" color="green" className="theme-button welcome_btn" href="/welcome/page2">NEXT >></IonButton>
			</IonFab>
		</IonPage>
	)
};

export default Welcome