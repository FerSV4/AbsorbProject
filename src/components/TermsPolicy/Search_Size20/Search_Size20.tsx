import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Search_Size20.module.css';
import { Size20Icon } from './Size20Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2853:24025 */
export const Search_Size20: FC<Props> = memo(function Search_Size20(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size20Icon className={classes.icon2} />}</div>
    </div>
  );
});