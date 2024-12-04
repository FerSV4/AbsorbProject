import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Login } from './components/Login/Login.js';
import { SignUp } from './components/SignUp/SignUp.js';
import { ResetPassword } from './components/ResetPassword/ResetPassword.js';
import { SetANewPassword } from './components/SetANewPassword/SetANewPassword.js';
import { TermsPolicy } from './components/TermsPolicy/TermsPolicy.js';
import { Contact } from './components/Contact/Contact.js';

interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/setpassword" element={<SetANewPassword />} />
          <Route path="/termspolicy" element={<TermsPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
});
