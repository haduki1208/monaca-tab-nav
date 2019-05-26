import React from 'react';
import { Tabbar, Tab, Page } from 'react-onsenui';
import FirstPage from './FirstPage';
import AboutPage from './AboutPage';

export default class MainPage extends React.Component {
  renderTabs() {
    return [
      {
        content: <FirstPage key={'First'} navigator={this.props.navigator} />,
        tab: <Tab key={'First'} label={'First'} />
      },
      {
        content: <AboutPage key={'About'} navigator={this.props.navigator} />,
        tab: <Tab key={'About'} label={'About'} />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} />
      </Page>
    );
  }
}
