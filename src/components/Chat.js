import React from 'react';
import './Chat.scss';
function Chat() {
    return (
        <section className="chat">
            <div className="display-area">
                <img className="grid-item" id="display-picture" alt=" " />
                <h3 className="grid-item">Name</h3>
                <h5 className="grid-item" >Ki hal a</h5>

            </div>
        </section>
    )
}
export default Chat;