import React from 'react';
import { Page, Button, Toolbar } from 'react-onsenui';
import SecondPage from './SecondPage';

export default class FirstPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({
      component: SecondPage,
      props: { key: 'second' }
    });
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="center">First Page</div>
        </Toolbar>

        <p style={{ textAlign: 'center' }}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
      </Page>
    );
  }
}
