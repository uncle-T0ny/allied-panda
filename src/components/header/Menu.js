import React, { PureComponent } from 'react';
import cn from 'classnames';
import Flexbox from 'flexbox-react';
import './Menu.scss';

class Menu extends PureComponent {

  render() {
    const  { menuOpened } = this.props;
    return (
      <Flexbox element="nav" className={cn('Menu', menuOpened ? 'Menu--opened' : 'Menu--closed')} flexDirection="column">
        <a href='#section1'> First </a>
        <a href='#section2'> Second </a>
        <a href='#section3'> Third </a>
        <a href='#section4'> Fourth </a>
      </Flexbox>
    );
  }
};

export { Menu };