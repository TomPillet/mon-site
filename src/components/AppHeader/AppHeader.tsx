import React, { FC } from 'react';
import './AppHeader.scss';
import i18next, { changeLanguage } from 'i18next';

import iconEN from '../../medias/flags/en-icon.svg';
import iconFR from '../../medias/flags/fr-icon.svg';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => (
  <header className='header'>
    <nav className='navbar'>
      <div className="languages-dropdown">
        <div className="current-language">
          <img className="language-flag" src={(i18next.language === 'fr') ? iconFR : iconEN} alt="Current language" />
        </div>

        <div className="languages-list">
          <button className="language-button" onClick={() => changeLanguage('en')}> <img className="language-flag" src={iconEN} alt="English flag" /> <span>EN</span> </button>
          <button className="language-button" onClick={() => changeLanguage('fr')}> <img className="language-flag" src={iconFR} alt="French flag" /> <span>FR</span> </button>
        </div>
      </div>
      <h6 className="title">Tom Pillet</h6>
      <div className="links">
        <ul className='links-list'>
          <li className="link-item">
            <a id="github" className='link' target='blank' href="https://github.com/TomPillet">Github</a>
          </li>
          <li className="link-item">
            <a id="linkedin" className='link' target='blank' href="https://www.linkedin.com/in/tom-pillet/">Linkedin</a>
          </li>
        </ul>
      </div>
    </nav>

    <span className="navbar-neon"></span>
  </header>
);

export default AppHeader;
