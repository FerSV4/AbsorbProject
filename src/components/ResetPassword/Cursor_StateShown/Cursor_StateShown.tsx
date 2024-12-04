import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cursor_StateShown.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2547:4488 */
export const Cursor_StateShown: FC<Props> = memo(function Cursor_StateShown(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2700}></div>
    </div>
  );
});
