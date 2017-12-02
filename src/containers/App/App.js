import React, {Component} from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import '../../../node_modules/antd/dist/antd.css';

import RoleSelection from '../../components/RoleSelection/RoleSelection';
import CreateUserWizard from '../../components/CreateUserWizard/CreateUserWizard';

const { Content } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRoles: [
        {type: 'question', name: 'Q'},
        {type: 'answer', name: 'A'}
      ],
      user: {
        role: null
      }
    };
  }

  handleRoleSelect(role) {
    this.setState({
      user: Object.assign({}, this.state.user, {role: role})
    });
  }

  handleUserCreated(userProps) {

  }

  render() {
    const {user, userRoles} = this.state;

    return (
      <Layout>
        <Content>
          <Row style={{height: '100vh'}} type="flex" align="middle" justify="center">
            <Col span={8}>
              {user.role ?
                <CreateUserWizard role={user.role} onCompletion={this.handleUserCreated.bind(this)} />
                :
                <RoleSelection roles={userRoles} onSelect={this.handleRoleSelect.bind(this)}/>
              }
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
