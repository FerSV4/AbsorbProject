import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Checkbox_SelectedFalseDisabled.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2251:4067 */
export const Checkbox_SelectedFalseDisabled: FC<Props> = memo(function Checkbox_SelectedFalseDisabled(props = {}) {
  return (
    <input
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
      type='checkbox'
    ></input>
  );
});
