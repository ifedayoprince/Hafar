import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import HafarHeader from '../components/HafarHeader';
import HafarChat from '../components/HafarChat';
import Chats from '../utils/Chats';
import HafarScroll from '../components/HafarScroll';

const Chat: React.FC = () => {
    return (
        <IonPage className="theme-page">
            <HafarHeader>Chat</HafarHeader>
            <HafarScroll text="More on the way">
                <HafarChat key={53453186} profile="Johny Bells" active={true} profileId="32054" data={Chats.jbells} chatId="53453186" lastMsg="Okay!." />
                <HafarChat profile="Acers Group" profileId="53963" chatId="45976369" lastMsg="I love how we Ace stuff." buffer={60} />
                <HafarChat profile="Michael Stroup" profileId="13554" chatId="32069674" lastMsg="I don't want to work." />
                <HafarChat profile="Andrew J" profileId="23455" chatId="12439659" lastMsg="The secret project has been completed." buffer={5} />
                <HafarChat profile="White Hackers" profileId="32236" chatId="53453186" lastMsg="My linux termux ain't working." buffer={300} />
            </HafarScroll>
        </IonPage>
    );
}

export default Chat;