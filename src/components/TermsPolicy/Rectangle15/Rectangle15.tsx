import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle15.module.css';

interface Props {
  className?: string;
  classes?: {
    image3?: string;
  };
}
/* @figmaId 2314:6520 */
export const Rectangle15: FC<Props> = memo(function Rectangle15(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.image3 || ''} ${classes.image3}`}></div>
      <div className={classes.rectangle15}>
        <div className={classes.absorbTermsPolicies}>Absorb Terms &amp; Policies</div>
      </div>
    </div>
  );
});
