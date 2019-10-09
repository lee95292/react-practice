import React from 'react';
import ReactDom from 'react-dom';

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Hello!</h1>
            {
                unreadMessages>0 &&
                <h3>You have {unreadMessages} unread messages</h3>
            }
        </div>
    );
}

const messages= ['one','two','three'];

ReactDom.render(<Mailbox unreadMessages={messages}/>, document.getElementById('root'));