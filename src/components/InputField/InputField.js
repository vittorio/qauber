import React from 'react';
import { Input, Icon } from 'antd';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);

    const {type, placeholder} = this.props;

    this.state = {
      type: type || 'text',
      placeholder: placeholder || ''
    }
  }

  showPassword() {
    this.setState({
      type: 'text'
    });
  }

  render() {
    const {type, placeholder} = this.state;
    const suffix = (type === 'password') ? <Icon type="sync" onClick={this.showPassword.bind(this)} /> : null;

    return (
      <Input type={type} placeholder={placeholder} suffix={suffix} />
    )
  }
}