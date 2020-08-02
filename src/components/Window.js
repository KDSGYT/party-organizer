import React from 'react';
import ChatList from './ChatList';
import './Window.scss';

function Window() {

    return(
        <section className="window">
            <div className="chat-area">
                <ChatList />
            </div>
        </section>
    )
}

export default Window;