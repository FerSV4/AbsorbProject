import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_VariantPrimaryStateDefa } from './Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa.js';
import { ChevronDown_Size16 } from './ChevronDown_Size16/ChevronDown_Size16.js';
import { ChevronDownIcon2 } from './ChevronDownIcon2.js';
import { ChevronDownIcon3 } from './ChevronDownIcon3.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import { IconButton_VariantPrimaryState } from './IconButton_VariantPrimaryState/IconButton_VariantPrimaryState.js';
import { Rectangle1 } from './Rectangle1/Rectangle1.js';
import { Rectangle1Icon } from './Rectangle1Icon.js';
import { Rectangle15 } from './Rectangle15/Rectangle15.js';
import { Search_Size20 } from './Search_Size20/Search_Size20.js';
import { SearchIcon } from './SearchIcon.js';
import { SettingsIcon } from './SettingsIcon.js';
import { ShieldIcon } from './ShieldIcon.js';
import { ShoppingCart_Size20 } from './ShoppingCart_Size20/ShoppingCart_Size20.js';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';
import { StateLayerIcon } from './StateLayerIcon.js';
import classes from './TermsPolicy.module.css';
import { TextField_StateDefaultSerial1 } from './TextField_StateDefaultSerial1/TextField_StateDefaultSerial1.js';
import { User_Size20 } from './User_Size20/User_Size20.js';
import { UserIcon } from './UserIcon.js';

interface Props {
  className?: string;
  hide?: {
    rectangle1?: boolean;
    settings?: boolean;
    headline?: boolean;
    searchBar?: boolean;
    label?: boolean;
    email?: boolean;
  };
}
/* @figmaId 2853:11346 */
export const TermsPolicy: FC<Props> = memo(function TermsPolicy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Rectangle15 classes={{ image3: classes.image3 }} />
      <div className={classes.rectangle17}>
        <div className={classes.rectangle172}></div>
        <div className={classes.shield}>
          <ShieldIcon className={classes.icon8} />
        </div>
        <div className={classes.privacyPolicy}>Privacy Policy</div>
        <Button_VariantPrimaryStateDefa
          className={classes.button2}
          text={{
            button: <div className={classes.button}>Privacy Policy</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button4}
          text={{
            button: <div className={classes.button3}>Cookies Policy</div>,
          }}
        />
        <div className={classes.howWeProtectTheInformationYouG}>How we protect the information you give us</div>
      </div>
      <div className={classes.rectangle16}>
        <div className={classes.rectangle162}></div>
        <div className={classes.image1}></div>
        <div className={classes.termsOfUse}>Terms of Use</div>
        <div className={classes.theLegalStuffYouReAgreeingToWh}>
          <div className={classes.textBlock}>The legal stuff you&#39;re agreeing to when you</div>
          <div className={classes.textBlock2}>use our sites.</div>
        </div>
        <Button_VariantPrimaryStateDefa
          className={classes.button6}
          text={{
            button: <div className={classes.button5}>Terms of use</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button8}
          text={{
            button: <div className={classes.button7}>Purchase protection programs terms</div>,
          }}
        />
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
          <SettingsIcon className={classes.icon9} />
        </div>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.rectangle5}>
          <div className={classes.rectangle1}>
            <Rectangle1Icon className={classes.icon10} />
          </div>
          <button className={classes.button9}>
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
          <button className={classes.button10}>
            <div className={classes.instruments}>Instruments</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon2 className={classes.icon4} />,
              }}
            />
          </button>
          <div className={classes.line42}></div>
          <button className={classes.button11}>
            <div className={classes.accesories}>Accesories</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon3 className={classes.icon5} />,
              }}
            />
          </button>
          <div className={classes.line43}></div>
          <button className={classes.button12}>
            <div className={classes.hotDeals}>Hot deals</div>
          </button>
          <div className={classes.line44}></div>
          <button className={classes.button13}>
            <div className={classes.newArrivals}>New Arrivals</div>
          </button>
          <div className={classes.line17}></div>
          <button className={classes.button14}>
            <div className={classes.news}>News</div>
          </button>
          <div className={classes.line46}></div>
          <button className={classes.button15}>
            <div className={classes.aboutUs}>About us</div>
          </button>
          <div className={classes.line45}></div>
          <button className={classes.button16}>
            <div className={classes.fAQ}>FAQ</div>
          </button>
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
