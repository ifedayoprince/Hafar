import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import './HafarHeader.scss'

interface HafarHeaderProps {
    href?: string,
    notext?: boolean
}
const HafarHeader: React.FC<HafarHeaderProps> = (props) => {
    return (
        <>
            <IonHeader className="hafar-header" mode="md">
                <IonToolbar className="hafar-toolbar theme-font-1">
                    {
                        props.href ?
                            <IonButtons slot="start">
                                <IonBackButton defaultHref={props.href} />
                            </IonButtons> :
                            <></>
                    }
                    {
                        props.notext ?
                            props.children :
                            <IonTitle>{props.children}</IonTitle>
                    }
                </IonToolbar>

            </IonHeader>

        </>
    );
}

export default HafarHeader; 