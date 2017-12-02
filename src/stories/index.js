import React from 'react';
import '../../node_modules/antd/dist/antd.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import RoleButton from '../components/RoleSelection/RoleButton/RoleButton';
import InputField from '../components/InputField/InputField';
import RoleSelection from '../components/RoleSelection/RoleSelection'

storiesOf('User role select button', module)
  .addDecorator(story => (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {story()}
    </div>
  ))
  .add('with type "answer"', () => <RoleButton text="A" shape='circle' size='50px' onClick={action('selected answer role')} />)
  .add('with type "question"', () => <RoleButton text="Q" shape='circle' size='50px' onClick={action('selected question role')} />)
  .add('squared', () => <RoleButton text="Q" size='50px' shape='square' onClick={action('selected question role')} />)
  .add('big', () => <RoleButton text="Q" shape='circle' size='150px' onClick={action('selected question role')} />)

storiesOf('Form input', module)
  .addDecorator(story => (
    <div style={{height: '100vh', width: '50%', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {story()}
    </div>
  ))
  .add('for first name', () =>  <InputField type='text' placeholder='Your first name' /> )
  .add('for password', () =>  <InputField type='password' placeholder='Your password'  /> );

storiesOf('Role selection', module)
  .add('Without roles', () => <RoleSelection></RoleSelection>)
  .add('With roles Q and A', () => {
    const userRoles = [
      {type: 'question', name: 'Q'},
      {type: 'answer', name: 'A'}
    ];

    return <RoleSelection roles={userRoles}></RoleSelection>
  });