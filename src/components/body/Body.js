import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import Flexbox from 'flexbox-react';

import { ProductBlock } from "./productBlock/ProductBlock";

import './Body.scss';


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

@connect(mapStateToProps)
class Body extends PureComponent {

  render() {
    return (
      <Flexbox className="Body" flexDirection="column" >
        <ScrollableAnchor id={'section1'}>
          <Flexbox className="Body__section" flexGrow={1}>
            <ProductBlock />
          </Flexbox>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <Flexbox className="Body__section Particles--over"  flexGrow={1}>
            Content 2
            <img style={{width: '200px', height: '200px'}} src="image1.png" />
          </Flexbox>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <Flexbox className="Body__section" flexGrow={1}>
            <ProductBlock />
          </Flexbox>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <Flexbox className="Body__section Particles--over" flexGrow={1}>
            Content 4
            <img style={{width: '200px', height: '200px'}} src="image1.png" />
          </Flexbox>
        </ScrollableAnchor>
      </Flexbox>
    );
  }
};

export { Body };