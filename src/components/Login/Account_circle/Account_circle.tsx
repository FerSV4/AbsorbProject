import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Account_circle.module.css';
import { Account_circleIcon } from './Account_circleIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2006:134 */
export const Account_circle: FC<Props> = memo(function Account_circle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Account_circleIcon className={classes.icon2} />}</div>
    </div>
  );
});
