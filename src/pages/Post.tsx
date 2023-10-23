import React from 'react';
import { IonPage, IonRow, IonBackButton, IonTitle, IonInput } from '@ionic/react';
import HafarHeader from '../components/HafarHeader';
import HafarAvatar from '../components/HafarAvatar';
import './ChatPanel.scss'
import ''
const Post: React.FC = () => {
   
    return (
        <IonPage className="theme-page">
            <HafarHeader notext>
                <IonRow style={{ paddingLeft: "4vw", alignItems: "center" }}>
                    <IonBackButton defaultHref="/" />
                    <IonTitle className="theme-font-size" style={{ paddingLeft: "2vw", fontSize: "5vw" }}>Post</IonTitle>
                </IonRow>
            </HafarHeader>
            <IonRow>
                <HafarAvatar active={false}/>
                <IonInput className="theme-input post-input" placeholder="Type and hit post..."/>
            </IonRow>
        </IonPage>
    );
}
 
export default Post;