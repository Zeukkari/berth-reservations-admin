import React, { Component } from 'react';
import { Section } from 'hds-react';

import Button from '../../common/button/Button';
import Layout from '../../common/layout/Layout';
import HelsinkiLogo from '../../common/helsinkiLogo/HelsinkiLogo';
import styles from '../../common/header/header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <HelsinkiLogo color="white" />
  </header>
);

type Props = {
  login: Function;
};

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
      <Layout header={<Header />} sidebar={<div></div>}>
        <Section color="secondary">
          <h1>Prototype stuff</h1>
          <p>Insert any syntactically valid email. </p>
          <form onSubmit={this.onSubmit}>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              data-testid="login-input"
              onChange={this.onChange}
            />
            <Button color="brand" onClick={this.onSubmit}>
              Log in
            </Button>
          </form>
        </Section>
      </Layout>
    );
  }
}
