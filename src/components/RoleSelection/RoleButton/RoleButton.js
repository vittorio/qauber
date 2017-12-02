import React from 'react';
import { Avatar } from 'antd';
import {default as c} from 'classnames';
import './RoleButton.css';

export default (props) => {
  return (
    <button className={c('roleButton', props.shape)} onClick={props.onClick} style={{width: props.size, height: props.size}}>
      {props.text}
    </button>
  );
}