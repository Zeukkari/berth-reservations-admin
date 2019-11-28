import React, { Component } from 'react';

import Layout from '../../common/layout/Layout';
import Icon from '../../common/icon/Icon';
import Header from '../../common/header/Header';

type Props = {
  login: Function;
};

const CustomHeader = () => (
  <Header>
    <Icon name="helsinkiLogo" size="large" rectangle={true} color="white" />
  </Header>
);

export default class LoginForm extends Component<Props> {
  state = { email: '' };

  onChange = event => {
    const email = event.target.value;
    this.setState(s => ({ email }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email } });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          data-testid="login-input"
          onChange={this.onChange}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}
