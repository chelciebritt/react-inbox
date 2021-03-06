import React from 'react';
import Message from './Message'

const Messages = (props) => {
  return (
    <div>
      {props.messages.map ( message => <Message key= { message.id } message={ message }/>)}
    </div>
  )
}

export default Messages;
