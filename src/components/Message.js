
import React from 'react';

const Message = ({ message }) => {

    let readClass = 'row message';
    if (message.read) {
      readClass += ' read';
    } else {
      readClass += ' unread';
    }

    let starred = 'star fa';
    if (message.starred) {
      starred += ' fa-star';
    } else {
      starred += ' fa-star-o';
    }

    let selected = 'row message';
    if (message.selected) {
      readClass += ' selected';
    } else {
      readClass += ' '
    }

    let checked = '';
    if (message.selected) {
      checked += 'checked'
    } else {
      checked += ''
    }

    let labels = message.labels.map((label, i) => {
      return <span key={i} className="label label-warning">{label}</span>
    })



  return (
    <div className={readClass}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" defaultChecked={checked}/>
          </div>
          <div className="col-xs-2">
            <i className={starred}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labels}
        <a href="#">
          { message.subject}
        </a>
      </div>
    </div>
  )
}

export default Message;
