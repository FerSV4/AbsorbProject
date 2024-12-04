import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Star_Size16 } from '../Star_Size16/Star_Size16.js';
import { X_Size16 } from '../X_Size16/X_Size16.js';
import classes from './Button_VariantSubtleStateDefau.module.css';

interface Props {
  className?: string;
}
/* @figmaId 9:1085 */
export const Button_VariantSubtleStateDefau: FC<Props> = memo(function Button_VariantSubtleStateDefau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.button}>Button</div>
    </div>
  );
});
