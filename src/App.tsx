import React from 'react';
import { IonApp, setupConfig } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/hafar.css'
import './theme/darktheme.css'

import Routes from './routes';

setupConfig({
	animated: true
})

const hafarConfig = {
	apiId: "18608202",
	apiHash: "7bd78cc3ce5d4789873c28385823b914"
}

// const hafar = new TelegramClient(new StringSession(''),hafarConfig.apiId, hafarConfig.apiHash,{});

const App: React.FC = () => {
	return (
		<IonApp>
			<Routes/>
		</IonApp>
	);
};

export default App;