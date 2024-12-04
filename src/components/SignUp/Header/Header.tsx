import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle1 } from '../Rectangle1/Rectangle1.js';
import { TextField_StateDefaultSerial1 } from '../TextField_StateDefaultSerial1/TextField_StateDefaultSerial1.js';
import classes from './Header.module.css';
import { SettingsIcon } from './SettingsIcon.js';
import { StateLayerIcon } from './StateLayerIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    line18?: string;
    line42?: string;
    line43?: string;
    line44?: string;
    line17?: string;
    line46?: string;
    line45?: string;
    root?: string;
  };
  hide?: {
    rectangle1?: boolean;
    settings?: boolean;
    headline?: boolean;
    searchBar?: boolean;
    icon?: boolean;
    content?: boolean;
    label?: boolean;
    email?: boolean;
  };
}
/* @figmaId 2640:4408 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Rectangle1
        swap={{
          icon: <StateLayerIcon className={classes.icon} />,
        }}
        hide={{
          rectangle1: true,
          settings: true,
          headline: true,
          searchBar: true,
        }}
      />
      <div className={classes.settings}>
        <SettingsIcon className={classes.icon2} />
      </div>
      <div className={classes.contactUs}>Contact us</div>
      <Rectangle1
        classes={{ line18: `${props.classes?.line18 || ''} ${classes.line18}` }}
        hide={{
          content: true,
        }}
      />
      <div className={classes.rectangle4}>
        <div className={classes.rectangle42}></div>
        <div className={classes.dropdownToggle}>
          <div className={classes.category}>Instruments</div>
          <div className={classes.vector}>
            <VectorIcon className={classes.icon3} />
          </div>
        </div>
        <div className={`${props.classes?.line42 || ''} ${classes.line42}`}></div>
        <div className={classes.dropdownToggle2}>
          <div className={classes.category2}>Accesories</div>
          <div className={classes.vector2}>
            <VectorIcon2 className={classes.icon4} />
          </div>
        </div>
        <div className={`${props.classes?.line43 || ''} ${classes.line43}`}></div>
        <div className={classes.hotDeals}>Hot deals</div>
        <div className={`${props.classes?.line44 || ''} ${classes.line44}`}></div>
        <div className={classes.newArrivals}>New Arrivals</div>
        <div className={`${props.classes?.line17 || ''} ${classes.line17}`}></div>
        <div className={classes.news}>News</div>
        <div className={`${props.classes?.line46 || ''} ${classes.line46}`}></div>
        <div className={classes.aboutUs}>About us</div>
        <div className={`${props.classes?.line45 || ''} ${classes.line45}`}></div>
        <div className={classes.fAQ}>FAQ</div>
      </div>
      <TextField_StateDefaultSerial1
        className={classes.textField2}
        classes={{ textField: classes.textField }}
        hide={{
          label: true,
          email: true,
        }}
        text={{
          placeholder: <div className={classes.placeholder}>Buy instruments at competitive prices... </div>,
        }}
      />
    </div>
  );
});
