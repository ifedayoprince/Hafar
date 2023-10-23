import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';

import './HafarHeader.scss'

interface HafarMenuProps {
    title?: string;
}

const HafarMenu: React.FC<HafarMenuProps> = (props) => {
    return (
        <IonMenu side="start" type="overlay" className="hafar-menu" contentId="content" menuId="sidetools">
            {
                props.title ?
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonTitle>Start Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader> :
                    <></>
            }
            <IonContent id="content">
                {props.children}
            </IonContent>
        </IonMenu>
    );
}

export default HafarMenu;