import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import socialIcons from '../constants/social-icons';
function Footer({ className }) {
  return (
    <footer className={className}>
      <div className='wrapper'>
        <div className='logo'>
          <Logo />
        </div>

        <div className='socialIcons'>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.icon}
              </a>
            );
          })}
        </div>

        <div className='credit'>
          © {new Date().getFullYear()}, Web Design by
          {` `}
          <a className='credit' href='https://www.moximetrics.com'>
            Moximetrics
          </a>
        </div>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  .wrapper {
    background: var(--secondaryColor);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    margin: 45px auto 35px;
    width: 300px;
  }
  .socialIcons {
    width: 180px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .socialIcons a {
    color: var(--textColorLight);
    font-size: 18px;
  }
  .credit {
    color: gray;
    text-decoration: none;
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    .logo {
      width: 250px;
    }
  }
`;
