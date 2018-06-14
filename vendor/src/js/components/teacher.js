import React from 'react';
import '../../css/teachers.styl';

function Teacher(props) {
  return (
    <li className="Teacher">
      {props.name} <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>
    </li>
  )
}

export default Teacher;