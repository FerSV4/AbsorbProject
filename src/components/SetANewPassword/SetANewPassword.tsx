import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_VariantSubtleStateDefau } from './Button_VariantSubtleStateDefau/Button_VariantSubtleStateDefau.js';
import { ChevronDown_Size16 } from './ChevronDown_Size16/ChevronDown_Size16.js';
import { ChevronDownIcon2 } from './ChevronDownIcon2.js';
import { ChevronDownIcon3 } from './ChevronDownIcon3.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import { IconButton_VariantPrimaryState } from './IconButton_VariantPrimaryState/IconButton_VariantPrimaryState.js';
import { Rectangle1 } from './Rectangle1/Rectangle1.js';
import { Rectangle1Icon } from './Rectangle1Icon.js';
import { Search_Size20 } from './Search_Size20/Search_Size20.js';
import { SearchIcon } from './SearchIcon.js';
import classes from './SetANewPassword.module.css';
import { SettingsIcon } from './SettingsIcon.js';
import { ShoppingCart_Size20 } from './ShoppingCart_Size20/ShoppingCart_Size20.js';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';
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
    rectangle1?: boolean;
    settings?: boolean;
    headline?: boolean;
    searchBar?: boolean;
    label3?: boolean;
    email3?: boolean;
  };
}
/* @figmaId 2853:13452 */
export const SetANewPassword: FC<Props> = memo(function SetANewPassword(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle83}></div>
      <div className={classes.lOGIN}>
        <div className={classes.setANewPassword}>Set a new password</div>
        <div className={classes.createANewPasswordEnsureThatIt}>
          Create a new password. Ensure that it differs from previous ones for security
        </div>
        <div className={classes.inputField}>
          <div className={classes.password}>Password *</div>
          <TextField_StateDefaultSerial2
            className={classes.textField2}
            classes={{ textField: classes.textField }}
            hide={{
              label: true,
              email: true,
            }}
            text={{
              placeholder: <div className={classes.placeholder}>Enter your password</div>,
            }}
          />
        </div>
        <div className={classes.inputField2}>
          <div className={classes.confirmPassword}>Confirm password *</div>
          <TextField_StateDefaultSerial2
            className={classes.textField4}
            classes={{ textField: classes.textField3 }}
            hide={{
              label: true,
              email: true,
            }}
            text={{
              placeholder: <div className={classes.placeholder2}>Confirm your password</div>,
            }}
          />
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.button}>
            <div className={classes.resetPassword}>Reset password</div>
          </button>
        </div>
      </div>
      <div className={classes.header}>
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
          <SettingsIcon className={classes.icon8} />
        </div>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.rectangle5}>
          <div className={classes.rectangle1}>
            <Rectangle1Icon className={classes.icon9} />
          </div>
          <button className={classes.button2}>
            <div className={classes.aBSORB}>ABSORB</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon className={classes.icon2} />,
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
                          icon: <SearchIcon className={classes.icon3} />,
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
          <button className={classes.button3}>
            <div className={classes.instruments}>Instruments</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon2 className={classes.icon4} />,
              }}
            />
          </button>
          <div className={classes.line42}></div>
          <button className={classes.button4}>
            <div className={classes.accesories}>Accesories</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon3 className={classes.icon5} />,
              }}
            />
          </button>
          <div className={classes.line43}></div>
          <button className={classes.button5}>
            <div className={classes.hotDeals}>Hot deals</div>
          </button>
          <div className={classes.line44}></div>
          <button className={classes.button6}>
            <div className={classes.newArrivals}>New Arrivals</div>
          </button>
          <div className={classes.line17}></div>
          <button className={classes.button7}>
            <div className={classes.news}>News</div>
          </button>
          <div className={classes.line46}></div>
          <button className={classes.button8}>
            <div className={classes.aboutUs}>About us</div>
          </button>
          <div className={classes.line45}></div>
          <button className={classes.button9}>
            <div className={classes.fAQ}>FAQ</div>
          </button>
        </div>
        <TextField_StateDefaultSerial1
          className={classes.textField6}
          classes={{ textField: classes.textField5 }}
          hide={{
            label: true,
            email: true,
          }}
          text={{
            placeholder: <div className={classes.placeholder3}>Buy instruments at competitive prices... </div>,
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton2}
          swap={{
            star: (
              <ShoppingCart_Size20
                swap={{
                  icon: <ShoppingCartIcon className={classes.icon6} />,
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
                  icon: <UserIcon className={classes.icon7} />,
                }}
              />
            ),
          }}
        />
      </div>
    </div>
  );
});
