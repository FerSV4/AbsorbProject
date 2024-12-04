import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_VariantPrimaryStateDefa } from './Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa.js';
import { Button_VariantSubtleStateDefau } from './Button_VariantSubtleStateDefau/Button_VariantSubtleStateDefau.js';
import { Checkbox_SelectedFalseDisabled } from './Checkbox_SelectedFalseDisabled/Checkbox_SelectedFalseDisabled.js';
import { Eye_Size24 } from './Eye_Size24/Eye_Size24.js';
import { EyeIcon2 } from './EyeIcon2.js';
import { EyeIcon } from './EyeIcon.js';
import { Header } from './Header/Header.js';
import classes from './SignUp.module.css';
import { TextField_StateDefaultSerial2 } from './TextField_StateDefaultSerial2/TextField_StateDefaultSerial2.js';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    label?: boolean;
    email?: boolean;
    label2?: boolean;
    email2?: boolean;
    label3?: boolean;
    email3?: boolean;
    rectangle1?: boolean;
    settings?: boolean;
    headline?: boolean;
    searchBar?: boolean;
    icon?: boolean;
    content?: boolean;
    label4?: boolean;
    email4?: boolean;
  };
}
/* @figmaId 2286:7815 */
export const SignUp: FC<Props> = memo(function SignUp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle83}></div>
      <div className={classes.lOGIN}>
        <div className={classes.signUpToAbsorb}>Sign Up to Absorb</div>
        <div className={classes.inputField}>
          <div className={classes.email}>Email *</div>
          <TextField_StateDefaultSerial2
            className={classes.textField2}
            classes={{ textField: classes.textField }}
            hide={{
              label: true,
              email: true,
            }}
            text={{
              placeholder: <div className={classes.placeholder}>Enter your email address</div>,
            }}
          />
        </div>
        <div className={classes.inputField2}>
          <div className={classes.password}>Password *</div>
          <TextField_StateDefaultSerial2
            className={classes.textField4}
            classes={{ textField: classes.textField3 }}
            hide={{
              label: true,
              email: true,
            }}
            text={{
              placeholder: <div className={classes.placeholder2}>Enter your password</div>,
            }}
          />
          <Eye_Size24
            className={classes.eye}
            swap={{
              icon: <EyeIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.inputField3}>
          <div className={classes.confirmPassword}>Confirm password *</div>
          <TextField_StateDefaultSerial2
            className={classes.textField6}
            classes={{ textField: classes.textField5 }}
            hide={{
              label: true,
              email: true,
            }}
            text={{
              placeholder: <div className={classes.placeholder3}>Confirm password</div>,
            }}
          />
          <Eye_Size24
            className={classes.eye2}
            swap={{
              icon: <EyeIcon2 className={classes.icon2} />,
            }}
          />
        </div>
        <div className={classes.checkboxField}></div>
        <div className={classes.buttonGroup}>
          <button className={classes.button3}>
            <div className={classes.sIGNUP}>SIGN UP</div>
          </button>
        </div>
        <div className={classes.alreadyHaveAnAccount}>Already have an account?</div>
        <Link to="/login" className={classes.link}>
          <Button_VariantPrimaryStateDefa
          className={classes.button2}
          text={{
            button: <div className={classes.button}>Log in</div>,
          }}
        />
        </Link>
      </div>
      <Header
        className={classes.header}
        classes={{
          line18: classes.line18,
          line42: classes.line42,
          line43: classes.line43,
          line44: classes.line44,
          line17: classes.line17,
          line46: classes.line46,
          line45: classes.line45,
        }}
      />
    </div>
  );
});
