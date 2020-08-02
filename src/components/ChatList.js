import React from 'react';
import Chat from './Chat';
import './ChatList.scss';

function ChatList() {
    return(
        <ul className="chat-list">
            <li><Chat /></li>
            <li><Chat /></li>
            <li><Chat /></li>
        </ul>
    )
}
export default ChatList;