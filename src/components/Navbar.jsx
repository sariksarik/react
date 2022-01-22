/* eslint-disable no-template-curly-in-string */
import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return <nav className={s.nav}>
    <div>
      <a href='#a' className={s.item}>Profile</a>
    </div>
    <div>
      <a href='#a' className={s.item}>Message</a>
    </div>
    <div>
      <a href='#a' className={s.item}>News</a>
    </div>
    <div>
      <a href='#a' className={s.item}>Music</a>
    </div>
    <div>
      <a href='#a' className={s.item}>Settings</a>
      <a href='#a' className={s.item}>Settings</a>
    </div>
  </nav>
}
export default Navbar