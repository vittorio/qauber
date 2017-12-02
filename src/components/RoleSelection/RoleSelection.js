import React from 'react';
import RoleButton from './RoleButton/RoleButton';
import './RoleSelection.css'

export default (props) => {
  return (
    <div className="roleSelection">
      <h2>You would like to:</h2>

      {props.roles && props.roles.map(role => {
        return <RoleButton text={role.name} shape={'circle'} size={150} onClick={() => props.onSelect(role.type)} key={role.type} />
      }) || 'No roles so far :('}
    </div>
  );
}