import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BiClockFillIcon } from './BiClockFillIcon.js';
import { Button_VariantPrimaryStateDefa } from './Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa.js';
import { Button_VariantSubtleStateDefau } from './Button_VariantSubtleStateDefau/Button_VariantSubtleStateDefau.js';
import { BxsPhoneIcon } from './BxsPhoneIcon.js';
import { ChevronDown_Size16 } from './ChevronDown_Size16/ChevronDown_Size16.js';
import { ChevronDownIcon2 } from './ChevronDownIcon2.js';
import { ChevronDownIcon3 } from './ChevronDownIcon3.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import classes from './Contact.module.css';
import { Facebook_Size20 } from './Facebook_Size20/Facebook_Size20.js';
import { FacebookIcon } from './FacebookIcon.js';
import { IconButton_VariantPrimaryState } from './IconButton_VariantPrimaryState/IconButton_VariantPrimaryState.js';
import { Instagram_Size20 } from './Instagram_Size20/Instagram_Size20.js';
import { InstagramIcon } from './InstagramIcon.js';
import { Rectangle1 } from './Rectangle1/Rectangle1.js';
import { Rectangle1Icon } from './Rectangle1Icon.js';
import { Rectangle84Icon } from './Rectangle84Icon.js';
import { Search_Size20 } from './Search_Size20/Search_Size20.js';
import { SearchIcon } from './SearchIcon.js';
import { SettingsIcon } from './SettingsIcon.js';
import { ShoppingCart_Size20 } from './ShoppingCart_Size20/ShoppingCart_Size20.js';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';
import { Star_Size16 } from './Star_Size16/Star_Size16.js';
import { StateLayerIcon } from './StateLayerIcon.js';
import { TextField_StateDefaultSerial1 } from './TextField_StateDefaultSerial1/TextField_StateDefaultSerial1.js';
import { TextField_StateDefaultSerial2 } from './TextField_StateDefaultSerial2/TextField_StateDefaultSerial2.js';
import { TextField_StateDefaultSerial12 } from './TextField_StateDefaultSerial12/TextField_StateDefaultSerial12.js';
import { Twitter_Size20 } from './Twitter_Size20/Twitter_Size20.js';
import { TwitterIcon } from './TwitterIcon.js';
import { User_Size20 } from './User_Size20/User_Size20.js';
import { UserIcon } from './UserIcon.js';
import { VectorIcon } from './VectorIcon.js';
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
    label4?: boolean;
    email4?: boolean;
    label5?: boolean;
    rectangle1?: boolean;
    settings?: boolean;
    headline?: boolean;
    searchBar?: boolean;
    label6?: boolean;
    email5?: boolean;
  };
}
/* @figmaId 2853:11502 */
export const Contact: FC<Props> = memo(function Contact(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle50}></div>
      <div className={classes.rectangle84}>
        <Rectangle84Icon className={classes.icon11} />
      </div>
      <div className={classes.getInTouchWithUs}>Get In Touch With Us</div>
      <div className={classes.doNotHesitateToLetUsKnowYourQu}>Do not hesitate to let us know your questions</div>
      <div className={classes.rectangle66}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon12} />
      </div>
      <div className={classes.bxsPhone}>
        <BxsPhoneIcon className={classes.icon13} />
      </div>
      <div className={classes.address}>Address</div>
      <div className={classes.workingTime}>Working Time</div>
      <div className={classes.phone}>Phone</div>
      <div className={classes._55LibertyStOf122NewYork10005}>
        <div className={classes.textBlock}>55 Liberty St, Of 122</div>
        <div className={classes.textBlock2}>New York</div>
        <div className={classes.textBlock3}>10005</div>
      </div>
      <div className={classes.mondayFriday80190SaturdaySunda}>
        <div className={classes.textBlock4}>Monday - Friday: 08:00 - 19:00</div>
        <div className={classes.textBlock5}>Saturday - Sunday: 07:00 - 17:00</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <div className={classes.uS133202302}> US +1 33202302</div>
      <div className={classes.biClockFill}>
        <BiClockFillIcon className={classes.icon14} />
      </div>
      <div className={classes.rectangle51}></div>
      <div className={classes.contactForm}>Contact form</div>
      <div className={classes.buttonGroup}>
        <button className={classes.button19}>
          <div className={classes.submit}>Submit</div>
        </button>
      </div>
      <div className={classes.yourName}>Your name</div>
      <TextField_StateDefaultSerial2
        className={classes.textField2}
        classes={{ textField: classes.textField }}
        hide={{
          label: true,
          email: true,
        }}
        text={{
          placeholder: <div className={classes.placeholder}>Enter your full name</div>,
        }}
      />
      <div className={classes.emailAddress}>Email address</div>
      <TextField_StateDefaultSerial2
        className={classes.textField4}
        classes={{ textField: classes.textField3 }}
        hide={{
          label: true,
          email: true,
        }}
        text={{
          placeholder: <div className={classes.placeholder2}>Enter an email address</div>,
        }}
      />
      <div className={classes.subject}>Subject</div>
      <TextField_StateDefaultSerial2
        className={classes.textField6}
        classes={{ textField: classes.textField5 }}
        hide={{
          label: true,
          email: true,
        }}
        text={{
          placeholder: <div className={classes.placeholder3}>Optional</div>,
        }}
      />
      <div className={classes.message}>Message</div>
      <TextField_StateDefaultSerial2
        className={classes.textField8}
        classes={{ textField: classes.textField7 }}
        hide={{
          label: true,
          email: true,
        }}
        text={{
          placeholder: <div className={classes.placeholder4}>Additional information</div>,
        }}
      />
      <div className={classes.footer}>
        <div className={classes.rectangle14}>
          <div className={classes.rectangle142}></div>
          <div className={classes.line6}></div>
          <div className={classes.headline}>ABSORB</div>
          <div className={classes._2024AbsorbAllRightsReserved}>© 2024 Absorb. All rights reserved.</div>
          <div className={classes.absorb2024GmailCom}>absorb2024@gmail.com</div>
          <div className={classes.contact}>Contact:</div>
          <div className={classes.links}>Links</div>
          <div className={classes.help}>Help</div>
          <div className={classes.newsletter}>Newsletter</div>
        </div>
        <TextField_StateDefaultSerial1
          className={classes.textField10}
          classes={{ textField: classes.textField9 }}
          hide={{
            label: true,
          }}
          text={{
            placeholder: <div className={classes.placeholder5}>Enter your email address</div>,
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton}
          swap={{
            star: (
              <Facebook_Size20
                className={classes.facebook}
                swap={{
                  icon: <FacebookIcon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton2}
          swap={{
            star: (
              <Instagram_Size20
                className={classes.instagram}
                swap={{
                  icon: <InstagramIcon className={classes.icon2} />,
                }}
              />
            ),
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton3}
          swap={{
            star: (
              <Twitter_Size20
                swap={{
                  icon: <TwitterIcon className={classes.icon3} />,
                }}
              />
            ),
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button2}
          text={{
            button: <div className={classes.button}>Home</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button4}
          text={{
            button: <div className={classes.button3}>Payment Options</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button6}
          text={{
            button: <div className={classes.button5}>Returns</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button8}
          text={{
            button: <div className={classes.button7}>About</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button10}
          text={{
            button: <div className={classes.button9}>Contact</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button12}
          text={{
            button: <div className={classes.button11}>SUBSCRIBE</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button14}
          text={{
            button: <div className={classes.button13}>Privacy Policy</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button16}
          text={{
            button: <div className={classes.button15}>Terms of Service</div>,
          }}
        />
        <Button_VariantPrimaryStateDefa
          className={classes.button18}
          text={{
            button: <div className={classes.button17}>Cookie Settings</div>,
          }}
        />
      </div>
      <div className={classes.header}>
        <Rectangle1
          swap={{
            icon: <StateLayerIcon className={classes.icon4} />,
          }}
          hide={{
            rectangle1: true,
            settings: true,
            headline: true,
            searchBar: true,
          }}
        />
        <div className={classes.settings}>
          <SettingsIcon className={classes.icon15} />
        </div>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.rectangle5}>
          <div className={classes.rectangle1}>
            <Rectangle1Icon className={classes.icon16} />
          </div>
          <button className={classes.button20}>
            <div className={classes.aBSORB}>ABSORB</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon className={classes.icon5} />,
              }}
            />
          </button>
          <div className={classes.searchBar}>
            <div className={classes.stateLayer}>
              <div className={classes.leadingIcon}></div>
              <div className={classes.line18}></div>
              <div className={classes.trailingElements}>
                <IconButton_VariantPrimaryState
                  className={classes.iconButton4}
                  swap={{
                    star: (
                      <Search_Size20
                        className={classes.search}
                        swap={{
                          icon: <SearchIcon className={classes.icon6} />,
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
          <button className={classes.button21}>
            <div className={classes.instruments}>Instruments</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon2 className={classes.icon7} />,
              }}
            />
          </button>
          <div className={classes.line42}></div>
          <button className={classes.button22}>
            <div className={classes.accesories}>Accesories</div>
            <ChevronDown_Size16
              swap={{
                icon: <ChevronDownIcon3 className={classes.icon8} />,
              }}
            />
          </button>
          <div className={classes.line43}></div>
          <button className={classes.button23}>
            <div className={classes.hotDeals}>Hot deals</div>
          </button>
          <div className={classes.line44}></div>
          <button className={classes.button24}>
            <div className={classes.newArrivals}>New Arrivals</div>
          </button>
          <div className={classes.line17}></div>
          <button className={classes.button25}>
            <div className={classes.news}>News</div>
          </button>
          <div className={classes.line46}></div>
          <button className={classes.button26}>
            <div className={classes.aboutUs}>About us</div>
          </button>
          <div className={classes.line45}></div>
          <button className={classes.button27}>
            <div className={classes.fAQ}>FAQ</div>
          </button>
        </div>
        <TextField_StateDefaultSerial12
          className={classes.textField12}
          classes={{ textField: classes.textField11 }}
          hide={{
            label: true,
            email: true,
          }}
          text={{
            placeholder: <div className={classes.placeholder6}>Buy instruments at competitive prices... </div>,
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton5}
          swap={{
            star: (
              <ShoppingCart_Size20
                swap={{
                  icon: <ShoppingCartIcon className={classes.icon9} />,
                }}
              />
            ),
          }}
        />
        <IconButton_VariantPrimaryState
          className={classes.iconButton6}
          swap={{
            star: (
              <User_Size20
                className={classes.user}
                swap={{
                  icon: <UserIcon className={classes.icon10} />,
                }}
              />
            ),
          }}
        />
      </div>
    </div>
  );
});
