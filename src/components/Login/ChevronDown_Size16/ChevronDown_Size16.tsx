import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChevronDown_Size16.module.css';
import { Size16Icon } from './Size16Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2853:23633 */
export const ChevronDown_Size16: FC<Props> = memo(function ChevronDown_Size16(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size16Icon className={classes.icon2} />}</div>
    </div>
  );
});
