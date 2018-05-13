import React, { PureComponent } from 'react';

import './MenuItem.scss';

class MenuItem extends PureComponent {

  render() {
    return (
      <a className="MenuItem" onClick={() => this.props.onClick()} href={this.props.href}>{this.props.label}</a>
    );
  }
};

export { MenuItem };