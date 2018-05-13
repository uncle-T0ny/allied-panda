import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Flexbox from 'flexbox-react';

import { MenuItem } from "./MenuItem";
import './Menu.scss';


const mapStateToProps = (state) => {
  return {
    menuOpened: state.components.menuOpened
  };
};

@connect(mapStateToProps)
class Menu extends PureComponent {
  render() {
    const  { menuOpened } = this.props;
    const closeMenu = () => {
      this.props.dispatch({ type: 'COMPONENTS_CHANGE_FIELD', field: 'menuOpened', value: false });
    };

    return (
      <Flexbox element="nav" className={cn('Menu', menuOpened ? 'Menu--opened' : 'Menu--closed')} flexDirection="column">
        <MenuItem onClick={() => closeMenu()} href="#section1" label={'First'}/>
        <MenuItem onClick={() => closeMenu()} href="#section2" label={'Second'}/>
        <MenuItem onClick={() => closeMenu()} href="#section3" label={'Third'}/>
        <MenuItem onClick={() => closeMenu()} href="#section4" label={'Fourth'}/>
      </Flexbox>
    );
  }
};

export { Menu };