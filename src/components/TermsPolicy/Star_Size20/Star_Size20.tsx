import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Size20Icon } from './Size20Icon.js';
import classes from './Star_Size20.module.css';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 9:1039 */
export const Star_Size20: FC<Props> = memo(function Star_Size20(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size20Icon className={classes.icon2} />}</div>
    </div>
  );
});
