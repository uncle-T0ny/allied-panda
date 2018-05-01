import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import './Header.scss';

class Header extends PureComponent {

  render() {
    return (
      <Flexbox element="header" className="Header" flexDirection="row" >
        <Flexbox flexGrow={1} justifyContent="center">
          <img className="Header__menu" src="menu.svg"/>
        </Flexbox>
        <Flexbox className="Header__text" flexDirection="column"  flexGrow={4} justifyContent="center">
          <Flexbox >
             I Love U Киця!
            <a href='#section1'> 1 </a>
            <a style={{float: 'left'}} href='#section2'> 2 </a>
            <a style={{float: 'left'}} href='#section3'> 3 </a>
            <a style={{float: 'left'}} href='#section4'> 4 </a>

          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
};

export { Header };