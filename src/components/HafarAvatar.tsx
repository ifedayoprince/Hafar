import React from 'react';
import './HafarAvatar.scss'
import { IonicReactProps } from '@ionic/react/dist/types/components/IonicReactProps';
import { IonAvatar, IonImg, IonBadge, IonRow } from '@ionic/react';

interface HafarAvatarProps {
    active: boolean,
    ratio?: number,
    img?: string
}

const HafarAvatar: React.FC<IonicReactProps & HafarAvatarProps> = (props) => {
    return (
        <>
            <IonRow style={{height:"min-content", width:"min-content", paddingTop: "1vh"}}>
                <IonAvatar style={props.ratio ? {width:`${props.ratio}vw`, height:`${props.ratio}vw`} : {}} className={`hafar-avatar ${props.className ? props.className : ""}`}>{
                    props.img ?
                        <IonImg src={props.img} /> :
                        <></>
                }</IonAvatar>
                {props.active ?
                    <IonBadge className="theme-badge-good hafar-badge" /> :
                    <IonBadge className="theme-badge-good hafar-badge" style={{visibility:"hidden"}} />
                }
            </IonRow>
        </>
    );
}

export default HafarAvatar;