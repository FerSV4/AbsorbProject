import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Star_Size20 } from '../Star_Size20/Star_Size20.js';
import classes from './IconButton_VariantPrimaryState.module.css';
import { StarIcon } from './StarIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    star?: ReactNode;
  };
}
/* @figmaId 2853:23780 */
export const IconButton_VariantPrimaryState: FC<Props> = memo(function IconButton_VariantPrimaryState(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.star || (
        <Star_Size20
          swap={{
            icon: <StarIcon className={classes.icon} />,
          }}
        />
      )}
    </button>
  );
});
