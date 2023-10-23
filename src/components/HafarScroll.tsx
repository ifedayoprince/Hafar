import React from 'react';
import { IonInfiniteScroll, IonInfiniteScrollContent, IonContent } from '@ionic/react';
import './HafarPost.scss'

interface HafarScrollProps {
    text: string,
    chat?: boolean,
    style?: object
}
const HafarScroll: React.FC<HafarScrollProps> = (props) => {
    return (
        <IonContent className={`theme-content ${props.chat ? "scroll-end" : ""}`} >
            <IonInfiniteScroll>
                <IonInfiniteScrollContent loadingSpinner="circles" loadingText={props.text} className="theme-content">
                    {props.children}
                </IonInfiniteScrollContent>
            </IonInfiniteScroll>
        </IonContent>
    );
}

export default HafarScroll;