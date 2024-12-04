import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Account_circle } from '../Account_circle/Account_circle.js';
import { Settings } from '../Settings/Settings.js';
import { Icon } from './Icon.js';
import classes from './Rectangle1.module.css';
import { Rectangle1Icon } from './Rectangle1Icon.js';
import { StateLayerIcon2 } from './StateLayerIcon2.js';
import { StateLayerIcon } from './StateLayerIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
  hide?: {
    icon?: boolean;
    rectangle1?: boolean;
    settings?: boolean;
    headline?: boolean;
    searchBar?: boolean;
  };
}
/* @figmaId 2141:1627 */
export const Rectangle1: FC<Props> = memo(function Rectangle1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.rectangle1 && (
        <div className={classes.rectangle1}>
          <Rectangle1Icon className={classes.icon2} />
        </div>
      )}
      <div className={classes.trailingIcon}>
        <div className={classes.container}>
          <div className={classes.stateLayer}>
            <Account_circle
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.trailingIcon2}>
        <div className={classes.container2}>
          <div className={classes.stateLayer2}>
            <div className={classes.icon3}>{props.swap?.icon || <StateLayerIcon className={classes.icon4} />}</div>
          </div>
        </div>
      </div>
      {!props.hide?.settings && (
        <Settings
          className={classes.settings}
          hide={{
            icon: true,
          }}
        />
      )}
      {!props.hide?.headline && <div className={classes.headline}>ABSORB</div>}
      {!props.hide?.searchBar && (
        <div className={classes.searchBar}>
          <div className={classes.stateLayer3}>
            <div className={classes.leadingIcon}></div>
            <div className={classes.content}>
              <div className={classes.supportingText}>Buy instruments at competitive prices... </div>
            </div>
            <div className={classes.line18}></div>
            <div className={classes.trailingElements}>
              <div className={classes._1stTrailingIcon}>
                <div className={classes.container3}>
                  <div className={classes.stateLayer4}>
                    <div className={classes.icon5}>
                      <StateLayerIcon2 className={classes.icon6} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
