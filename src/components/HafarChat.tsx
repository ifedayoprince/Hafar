import React from 'react';
import { IonItem, IonAvatar, IonCol, IonTitle, IonText, IonIcon, IonBadge, IonRippleEffect } from '@ionic/react';
import { eye } from 'ionicons/icons';
import './HafarChat.scss'
import Algo from '../utils/Algo';
import { IonicReactProps } from '@ionic/react/dist/types/components/IonicReactProps';
import HafarAvatar from './HafarAvatar';

interface HafarChatProps {
    profile: string,
    profileId: string,
    chatId: string,
    lastMsg: string,
    active?: boolean,
    buffer?: number,
    data?: {},
}

const HafarChat: React.FC<HafarChatProps & IonicReactProps> = (props) => {
    return (
        <>
            <IonItem button className="hafar-chatitem ion-activatable" routerLink={`/chat/${props.chatId}`}>
                {props.active ?
                    <HafarAvatar active={props.active} className="hafar-avatar" /> :
                    <HafarAvatar active={false} className="hafar-avatar"/>
                }
                <IonCol>
                    <IonTitle style={{ paddingLeft: "0px", position: "unset", textAlign: "start" }} className="theme-font-size">{Algo.shorten(12, props.profile)}</IonTitle>
                    <IonText className="theme-font-size theme-text-1">{Algo.shorten(20, props.lastMsg)}</IonText>
                </IonCol>
                {!props.buffer ?
                    <></> :
                    <IonBadge slot="end" className="theme-badge-good theme-badge">{props.buffer}</IonBadge>
                }
            </IonItem>
        </>
    );
}

export default HafarChat;