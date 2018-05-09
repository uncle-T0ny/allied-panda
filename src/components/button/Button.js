import React, { PureComponent } from 'react';
import cn from 'classnames';
import './Button.scss';

class Button extends PureComponent {
  render() {
    const { link, label, className } = this.props;
    return (
      <a className={cn('Button', className)} href={link}>{label}</a>
    );
  }
};

export { Button };