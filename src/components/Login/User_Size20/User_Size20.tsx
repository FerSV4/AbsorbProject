import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Size20Icon } from './Size20Icon.js';
import classes from './User_Size20.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2868:8177 */
export const User_Size20: FC<Props> = memo(function User_Size20(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size20Icon className={classes.icon2} />}</div>
    </div>
  );
});
