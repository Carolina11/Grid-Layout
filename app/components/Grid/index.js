/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="grid">
          <div className="gridItem">
            <img className="gridImage" src={require('../../images/Asheville-1.jpg')} />
          </div>
          <div className="gridItem">
            <img className="gridImage" src={require('../../images/Asheville-2.jpg')} />
          </div>
          <div className="gridItem">
            <img className="gridImage" src={require('../../images/Asheville-3.jpg')} />
          </div>
          <div className="gridItem">
            <img className="gridImage" src={require('../../images/Asheville-4.jpg')} />
          </div>
          <div className="gridItem">
            <img className="gridImage" src={require('../../images/Asheville-5.jpg')} />
          </div>
          <div className="gridItem">
            <img className="gridImage" src={require('../../images/Asheville-6.jpg')} />
          </div>
        </div>
      </div>
    );
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
};
