import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Flexbox from 'flexbox-react';

import { Menu } from './Menu';
import './Header.scss';


const mapStateToProps = (state) => {
  return {
    menuOpened: state.components.menuOpened
  };
};

@connect(mapStateToProps)
class Header extends PureComponent {
  render() {
    const  { menuOpened } = this.props;
    return (
      <Flexbox element="header" className={cn('Header', menuOpened ? 'Header--open' : '')} flexDirection="row" >
        <Flexbox className="Header__menuIcon" flexGrow={1} justifyContent="center" flexDirection="column">

          <Flexbox className={cn('Header__NavIcon', menuOpened ? 'open' : '')}
                   justifyContent="center"
                   flexDirection="column"
                   onClick={() => this.props.dispatch({ type: 'COMPONENTS_CHANGE_FIELD', field: 'menuOpened', value: !menuOpened })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Flexbox>

        </Flexbox>
        <Flexbox className="Header__text" flexDirection="column"  flexGrow={4} justifyContent="center">
          <Menu/>
        </Flexbox>
      </Flexbox>
    );
  }
};

export { Header };