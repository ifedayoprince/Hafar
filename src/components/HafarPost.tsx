import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCol, IonRow, IonAvatar, IonButtons, IonButton, IonIcon, IonBadge } from '@ionic/react';
import { thumbsUp, thumbsDown } from 'ionicons/icons'

import './HafarPost.scss'
import Algo from '../utils/Algo';
import HafarAvatar from './HafarAvatar';
interface HafarPostProps {
    profileId: string,
    profile: string,
    postId: string,
    date: Date
}

var c = 0;

const HafarPost: React.FC<HafarPostProps> = (props) => {
    c++;
    if (c == 4) c = 1

    return (
        <IonCard className="hafar-post" mode="md">
            <IonCardHeader className="hafar-header">
                <IonRow style={{alignItems: "center"}}>
                    <HafarAvatar active={true}/>
                    <IonCol>
                        <IonCardTitle className={`theme-font-1 theme-font-size theme-text-${c}`} style={{maxWidth: "25vw"}}>{Algo.shorten(10,props.profile)}</IonCardTitle>
                        <IonCardSubtitle style={{fontSize:"2vw"}}>{getDateDistance(props.date, new Date())}</IonCardSubtitle>
                    </IonCol>
                    <IonButtons className="hafar-btns">
                        <IonButton className="theme-badge-gc theme-font-size">
                            <IonIcon icon={thumbsUp}/>
                        </IonButton>
                        <IonBadge className="theme-badge theme-badge-good" style={{ marginRight: "2vw" }} mode="ios">543</IonBadge>
                        <IonBadge className="theme-badge theme-badge-bad" mode="ios">4</IonBadge>
                        <IonButton className="theme-badge-bc theme-font-size">
                            <IonIcon icon={thumbsDown}/>
                        </IonButton>
                    </IonButtons>
                </IonRow>
            </IonCardHeader>

            <IonCardContent className="theme-font-pref">
                {props.children}
            </IonCardContent>

        </IonCard>
    );
}
function getProfilename(name: string) {
    name = name.substring(0, 10);
    if (name.length >= 10) {
        return name.trimEnd() + "...";
    } else {
        return name;
    }
}
function getDateDistance(then: Date, now: Date) {
    var t = ""

    if (now.getFullYear() > then.getFullYear()) {
        var s = (now.getFullYear() - then.getFullYear());
        t = s + (s === 1 ? " yr" : " yrs") + " ago"
    } else if (now.getMonth() > then.getMonth()) {
        s = (now.getMonth() - then.getMonth());
        t = s + (s === 1 ? " mth" : " mths") + " ago"
    } else if (now.getDate() > then.getDate()) {
        s = (now.getDate() - then.getDate());
        t = s + (s === 1 ? " d" : " ds") + " ago"
    } else if (now.getHours() > then.getHours()) {
        s = (now.getHours() - then.getHours());
        t = s + (s === 1 ? " hr" : " hrs") + " ago"
    } else if (now.getMinutes() > then.getMinutes()) {
        s = (now.getMinutes() - then.getMinutes());
        t = s + (s === 1 ? " min" : " mins") + " ago"
    } else {
        t = "just now";
    }

    return t;
}

export default HafarPost;