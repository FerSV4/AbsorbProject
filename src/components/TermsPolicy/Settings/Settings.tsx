import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Settings.module.css';
import { SettingsIcon } from './SettingsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    icon?: boolean;
  };
}
/* @figmaId 2006:15 */
export const Settings: FC<Props> = memo(function Settings(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.icon && (
        <div className={classes.icon}>
          <SettingsIcon className={classes.icon2} />
        </div>
      )}
    </div>
  );
});
