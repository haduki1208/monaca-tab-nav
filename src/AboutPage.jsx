import React from 'react';
import { Page, Toolbar } from 'react-onsenui';

export default class AboutPage extends React.Component {
  render() {
    return (
      <Page>
        <Toolbar>
          <div className="center">{this.props.title}</div>
        </Toolbar>
      </Page>
    );
  }
}
