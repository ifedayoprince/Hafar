import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCol, IonRow, IonAvatar, IonButtons, IonButton, IonIcon, IonBadge } from '@ionic/react';
import { thumbsUp, thumbsDown } from 'ionicons/icons'

import './HafarPost.scss'
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
        <IonCard className="hafar-post">
            <IonCardHeader className="hafar-header">
                <IonRow>
                    <IonAvatar className="hafar-avatar" />
                    <IonCol>
                        <IonCardTitle className={`theme-font-1 theme-text-${c}`}>{getProfilename(props.profile)}</IonCardTitle>
                        <IonCardSubtitle>{getDateDistance(props.date, new Date())}</IonCardSubtitle>
                    </IonCol>
                    <IonButtons className="hafar-btns">
                        <IonButton className="theme-badge-good">
                            <IonIcon icon={thumbsUp} />
                        </IonButton>
                        <IonBadge className="hafar-badge theme-badge-good" style={{ marginRight: "2vw" }}>543</IonBadge>
                        <IonBadge className="hafar-badge theme-badge-bad">4</IonBadge>
                        <IonButton className="theme-badge-bad">
                            <IonIcon icon={thumbsDown} />
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
    name = name.substring(0, 15);
    if (name.length >= 15) {
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