import React from 'react';
import { Page, Button, Toolbar, BackButton } from 'react-onsenui';

export default class SecondPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({
      component: SecondPage,
      props: { key: `second${this.props.navigator.pages.length}` }
    });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">Another page</div>
        </Toolbar>

        <p style={{ textAlign: 'center' }}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}
