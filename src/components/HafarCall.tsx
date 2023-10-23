import React from 'react';
import './HafarCall.scss'
import { IonItem, IonRippleEffect, IonCol, IonTitle, IonText, IonIcon, IonRow, IonButton, IonButtons } from '@ionic/react';
import Algo from '../utils/Algo';
import { videocam, volumeLow, chatbubble } from 'ionicons/icons';
import HafarAvatar from './HafarAvatar';

interface HafarCallProps {
    active: boolean,
    profile: string,
    bio: string
}

const HafarCall: React.FC<HafarCallProps> = (props) => {
    return (
        <>
            <IonItem className="hafar-callitem ion-activatable" mode="md">
                <IonRippleEffect type="unbounded"></IonRippleEffect>
                <HafarAvatar active={props.active} className="hafar-avatar" />
                <IonCol>
                    <IonTitle style={{ paddingLeft: "0px", position: "unset", textAlign: "start" }} className="theme-font-size">{Algo.shorten(12, props.profile)}</IonTitle>
                    <IonText className="theme-font-size theme-text-1">{Algo.shorten(19, props.bio)}</IonText>
                </IonCol>
                <IonButtons>
                    <IonButton className="theme-badge-gc theme-font-size">
                        <IonIcon icon={videocam} />
                    </IonButton>
                    <IonButton className="theme-badge-gc theme-font-size">
                        <IonIcon icon={chatbubble} />
                    </IonButton>
                    <IonButton className="theme-badge-gc theme-font-size">
                        <IonIcon icon={volumeLow} />
                    </IonButton>
                </IonButtons>
            </IonItem>
        </>
    );
}

export default HafarCall;