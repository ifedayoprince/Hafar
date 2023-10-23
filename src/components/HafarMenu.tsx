import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';

import './HafarHeader.scss'

interface HafarMenuProps {
    title?: string;
}

const HafarMenu: React.FC<HafarMenuProps> = (props) => {
    return (
        <IonMenu side="start" className="hafar-menu" contentId="main-content" menuId="sidetools">
            {
                props.title ?
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonTitle>Start Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader> :
                    <></>
            }
            <IonContent id="content" className="theme-content">
                {props.children}
            </IonContent>
        </IonMenu>
    );
}

export default HafarMenu;