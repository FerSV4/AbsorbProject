import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ShoppingCart_Size20.module.css';
import { Size20Icon } from './Size20Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2191:3368 */
export const ShoppingCart_Size20: FC<Props> = memo(function ShoppingCart_Size20(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size20Icon className={classes.icon2} />}</div>
    </div>
  );
});
