import React from 'react';
import { IonPage, IonCol, IonText, IonTitle, IonRow, IonInput, IonButton, IonIcon } from '@ionic/react';
import './ChatPanel.scss'
import HafarHeader from '../components/HafarHeader';
import HafarAvatar from '../components/HafarAvatar';
import HafarScroll from '../components/HafarScroll';
import HafarChatPost from '../components/HafarChatPost';
import { attach, send } from 'ionicons/icons';

const ChatPanel: React.FC = () => {
    var d = document.getElementById("hafar-tab")
    if (d) {
        d.setAttribute("hidden", "true")
    }
    return (
        <IonPage>
            <HafarHeader notext>
                <IonRow style={{paddingLeft:"4vw"}}>
                    <HafarAvatar active={false} ratio={12} />
                    <IonCol style={{justifyContent: "start", display:"grid"}}>
                        <IonText style={{ padding: "0px" }}>Johny Stroup</IonText>
                        <IonText className="theme-font-size">online</IonText>
                    </IonCol>
                </IonRow>
            </HafarHeader>
            <HafarScroll text="More on the way..." chat>
                <HafarChatPost profile="Johny Stroup">Yo bro!</HafarChatPost>
                <HafarChatPost profile="Johny Stroup">Wanna chill with the big boyz.</HafarChatPost>
                <HafarChatPost me>Nop</HafarChatPost>
            </HafarScroll>
            <IonRow style={{ padding: "4vw" }}>
                <IonButton className="theme-button" style={{fontSize:"3vw", height:"inherit"}}>
                    <IonIcon icon={attach}/>
                </IonButton>
                <IonInput className="theme-input" placeholder="Type some text..." />
                <IonButton className="theme-button" style={{fontSize:"3vw", height:"inherit"}}>
                    <IonIcon icon={send}/>
                </IonButton>
            </IonRow>
        </IonPage>
    );
}

export default ChatPanel;