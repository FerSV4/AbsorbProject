import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_VariantPrimaryStateDefa } from './Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa.js';
import { Button_VariantSubtleStateDefau } from './Button_VariantSubtleStateDefau/Button_VariantSubtleStateDefau.js';
import { Checkbox_SelectedFalseDisabled } from './Checkbox_SelectedFalseDisabled/Checkbox_SelectedFalseDisabled.js';
import { ChevronDown_Size16 } from './ChevronDown_Size16/ChevronDown_Size16.js';
import { ChevronDownIcon2 } from './ChevronDownIcon2.js';
import { ChevronDownIcon3 } from './ChevronDownIcon3.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import { Eye_Size24 } from './Eye_Size24/Eye_Size24.js';
import { EyeIcon2 } from './EyeIcon2.js';
import { EyeIcon } from './EyeIcon.js';
import { IconButton_VariantPrimaryState } from './IconButton_VariantPrimaryState/IconButton_VariantPrimaryState.js';
import { Rectangle1 } from './Rectangle1/Rectangle1.js';
import { Rectangle1Icon } from './Rectangle1Icon.js';
import { Search_Size20 } from './Search_Size20/Search_Size20.js';
import { SearchIcon } from './SearchIcon.js';
import { SettingsIcon } from './SettingsIcon.js';
import { ShoppingCart_Size20 } from './ShoppingCart_Size20/ShoppingCart_Size20.js';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';
import classes from './SignUp.module.css';
import { Star_Size16 } from './Star_Size16/Star_Size16.js';
import { StateLayerIcon } from './StateLayerIcon.js';
import { TextField_StateDefaultSerial1 } from './TextField_StateDefaultSerial1/TextField_StateDefaultSerial1.js';
import { TextField_StateDefaultSerial2 } from './TextField_StateDefaultSerial2/TextField_StateDefaultSerial2.js';
import { User_Size20 } from './User_Size20/User_Size20.js';
import { UserIcon } from './UserIcon.js';
import { X_Size16 } from './X_Size16/X_Size16.js';

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
    label4?: boolean;
    email4?: boolean;
  };
}
/* @figmaId 2853:13396 */
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
        <div className={classes.group920}>
          <Button_VariantPrimaryStateDefa
            className={classes.button2}
            text={{
              button: <div className={classes.button}>I agree Terms &amp; conditions *</div>,
            }}
          />
          <Checkbox_SelectedFalseDisabled className={classes.checkbox} />
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.button5}>
            <div className={classes.sIGNUP}>SIGN UP</div>
          </button>
        </div>
        <div className={classes.alreadyHaveAnAccount}>Already have an account?</div>
        <Button_VariantPrimaryStateDefa
          className={classes.button4}
          text={{
            button: <div className={classes.button3}>Log in</div>,
          }}
        />
      </div>
      <div className={classes.header}>
        <Rectangle1
          swap={{
            icon: <StateLayerIcon className={classes.icon3} />,
          }}
          hide={{
            rectangle1: true,
            settings: true,
            headline: true,
            searchBar: true,
          }}
        />
        <div className={classes.settings}>
          <SettingsIcon className={classes.icon10} />
        </div>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.rectangle5}>
          <div className={classes.rectangle1}>
            <Rectangle1Icon className={classes.icon11} />
          </div>
          <button className={classes.button6}>
            <div className={classes.aBSORB}>ABSORB</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon className={classes.icon4} />,
              }}
            />
          </button>
          <div className={classes.searchBar}>
            <div className={classes.stateLayer}>
              <div className={classes.leadingIcon}></div>
              <div className={classes.line18}></div>
              <div className={classes.trailingElements}>
                <IconButton_VariantPrimaryState
                  className={classes.iconButton}
                  swap={{
                    star: (
                      <Search_Size20
                        className={classes.search}
                        swap={{
                          icon: <SearchIcon className={classes.icon5} />,
                        }}
                      />
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rectangle4}>
          <div className={classes.rectangle42}></div>
          <button className={classes.button7}>
            <div className={classes.instruments}>Instruments</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon2 className={classes.icon6} />,
              }}
            />
          </button>
          <div className={classes.line42}></div>
          <button className={classes.button8}>
            <div className={classes.accesories}>Accesories</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon3 className={classes.icon7} />,
              }}
            />
          </button>
          <div className={classes.line43}></div>
          <button className={classes.button9}>
            <div className={classes.hotDeals}>Hot deals</div>
          </button>
          <div className={classes.line44}></div>
          <button className={classes.button10}>
            <div className={classes.newArrivals}>New Arrivals</div>
          </button>
          <div className={classes.line17}></div>
          <button className={classes.button11}>
            <div className={classes.news}>News</div>
          </button>
          <div className={classes.line46}></div>
          <button className={classes.button12}>
            <div className={classes.aboutUs}>About us</div>
          </button>
          <div className={classes.line45}></div>
          <button className={classes.button13}>
            <div className={classes.fAQ}>FAQ</div>
          </button>
        </div>
        <TextField_StateDefaultSerial1
          className={classes.textField8}
          classes={{ textField: classes.textField7 }}
          hide={{
            label: true,
            email: true,
          }}
          text={{
            placeholder: <div className={classes.placeholder4}>Buy instruments at competitive prices... </div>,
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton2}
          swap={{
            star: (
              <ShoppingCart_Size20
                swap={{
                  icon: <ShoppingCartIcon className={classes.icon8} />,
                }}
              />
            ),
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton3}
          swap={{
            star: (
              <User_Size20
                className={classes.user}
                swap={{
                  icon: <UserIcon className={classes.icon9} />,
                }}
              />
            ),
          }}
        />
      </div>
    </div>
  );
});
