import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Cursor_StateShown } from '../Cursor_StateShown/Cursor_StateShown.js';
import { Email } from '../Email/Email.js';
import classes from './TextField_StateDefaultSerial1.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    textField?: string;
    root?: string;
  };
  hide?: {
    label?: boolean;
    email?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 2557:4560 */
export const TextField_StateDefaultSerial1: FC<Props> = memo(function TextField_StateDefaultSerial1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.label && <div className={classes.label}>EMail</div>}
      <div className={`${props.classes?.textField || ''} ${classes.textField}`}>
        {!props.hide?.email && (
          <Email
            className={classes.email}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        )}
        {props.text?.placeholder != null ? (
          props.text?.placeholder
        ) : (
          <div className={classes.placeholder}>Enter your email address</div>
        )}
      </div>
    </div>
  );
});
