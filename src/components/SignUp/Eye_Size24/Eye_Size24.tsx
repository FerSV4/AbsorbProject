import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Eye_Size24.module.css';
import { Size24Icon } from './Size24Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2102:1096 */
export const Eye_Size24: FC<Props> = memo(function Eye_Size24(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size24Icon className={classes.icon2} />}</div>
    </div>
  );
});
