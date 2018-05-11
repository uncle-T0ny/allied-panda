import React, { PureComponent } from 'react';
import cn from 'classnames';
import Flexbox from 'flexbox-react';
import { Menu } from './Menu';
import './Header.scss';


class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false
    };
  }

  render() {
    const  { menuOpened } = this.state;
    return (
      <Flexbox element="header" className={cn('Header', menuOpened ? 'Header--open' : '')} flexDirection="row" >
        <Flexbox className="Header__menuIcon" flexGrow={1} justifyContent="center" flexDirection="column">

          <Flexbox className={cn('Header__NavIcon', menuOpened ? 'open' : '')}
                   justifyContent="center"
                   flexDirection="column"
                   onClick={() => this.setState({ menuOpened: !menuOpened })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Flexbox>

        </Flexbox>
        <Flexbox className="Header__text" flexDirection="column"  flexGrow={4} justifyContent="center">
          <Menu {...this.state}/>
        </Flexbox>
      </Flexbox>
    );
  }
};

export { Header };