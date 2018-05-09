import React, { PureComponent } from 'react';
import cn from 'classnames';
import Flexbox from 'flexbox-react';

import { Button } from "./../../button/Button";
import './ProductBlock.scss';


class ProductBlock extends PureComponent {
  render() {
    return (
      <Flexbox flexDirection="column" className={cn('ProductBlock')}>
        <Flexbox flexGrow={3} className="ProductBlock__row"/>
        <Flexbox flexGrow={2} className="ProductBlock__row" justifyContent="center">
          <Button className="ProductBlock__button Particles--over" label="I want this landing" />
        </Flexbox>
        <Flexbox flexGrow={3} className="ProductBlock__row"/>
      </Flexbox>
    );
  }
};

export { ProductBlock };