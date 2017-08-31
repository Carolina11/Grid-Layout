/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Grid from 'components/Grid';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Grid />
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
