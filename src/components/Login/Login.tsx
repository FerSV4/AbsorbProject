
import { memo } from 'react';

import type { FC } from 'react';

import resets from '../_resets.module.css';

import { Button_VariantPrimaryStateDefa } from './Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa.js';

import { Header } from './Header/Header.js';

import classes from './Login.module.css';

import { TextField_StateDefaultSerial2 } from './TextField_StateDefaultSerial2/TextField_StateDefaultSerial2.js';

import { Link } from 'react-router-dom';



interface Props {

  className?: string;

  hide?: {

    label?: boolean;

    email?: boolean;

    label2?: boolean;

    email2?: boolean;

    rectangle1?: boolean;

    settings?: boolean;

    headline?: boolean;

    searchBar?: boolean;

    icon?: boolean;

    content?: boolean;

    label3?: boolean;

    email3?: boolean;

  };

}

export const Login: FC<Props> = memo(function Login(props = {}) {

  return (

    <div className={`${resets.clapyResets} ${classes.root}`}>

      <div className={classes.rectangle83}></div>

      <div className={classes.lOGIN}>

        <div className={classes.logInToAbsorb}>Log in to Absorb</div>

        <div className={classes.group31}>


          <Link to="/signup" className={classes.link}>

            <Button_VariantPrimaryStateDefa

              className={classes.button2}

              text={{

                button: <div className={classes.button}>Create an account</div>,

              }}

            />

          </Link>

          <div className={classes.notACustomer}>Not a customer?</div>

          <div className={classes.inputField}>
            <div className={classes.email}>Email</div>
            <TextField_StateDefaultSerial2
              className={classes.textField2}
              classes={{ textField: classes.textField }}
              hide={{
                label: true,
                email: true,
              }}
              text={{
                placeholder: <div className={classes.placeholder}>Email address</div>,
              }}
            />
          </div>
          <div className={classes.inputField2}>
            <div className={classes.password}>Password</div>
            <TextField_StateDefaultSerial2
              className={classes.textField4}
              classes={{ textField: classes.textField3 }}
              hide={{
                label: true,
                email: true,
              }}
              text={{
                placeholder: <div className={classes.placeholder2}>Password</div>,
              }}
            />
          </div>
          <div className={classes.buttonGroup}>
            <button className={classes.button3}>
              <div className={classes.sIGNIN}>SIGN IN</div>
            </button>
          </div>
          <div className={classes.textLink}>
            <div className={classes.forgotPassword}>Forgot password?</div>
          </div>
        </div>
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
