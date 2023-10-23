import React from 'react';
import './HafarChatPost.scss'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonText } from '@ionic/react';
import HafarAvatar from './HafarAvatar';

interface HafarChatPostProps {
    me?: boolean,
    profile?: string
}
const HafarChatPost: React.FC<HafarChatPostProps> = (props) => {
    return (
        <>
            <IonRow style={props.me ? { justifyContent: "end", paddingLeft:"2vw" } : { justifyContent: "start", paddingLeft:"2vw" }}>
                {!props.me ?
                    <HafarAvatar active={false} /> :
                    <></>
                }
                <div className={props.me ? "hf-chat-u" : "hf-chat"}>
                    {props.me ?
                        <IonText className="theme-font-1" style={{ color: "red", fontSize:"2vw", fontWeight: "bolder" }}>You</IonText> :
                        <IonText className="theme-font-1" style={{ color: "grey", fontSize:"2vw", fontWeight: "bolder" }}>{props.profile}</IonText>
                    }
                    <br />
                <IonText style={{ fontFamily: "Font1", fontSize:"4vw"}}>{props.children}</IonText>
                </div>
            </IonRow>
        </>
    );
}

export default HafarChatPost;