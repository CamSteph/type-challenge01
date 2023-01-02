import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../assets/logo.png';

const Container = styled.header`
  width: 100%;
  height: 4rem;
  background-color: #111;
  color: rgb(225, 255, 255);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const LogoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  .logo-name {
    font-size: 24px;
  }
`;

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: .5rem;
`;

const NavSection = styled.nav`
  width: 100%;

  .nav-ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  
  .nav-ul .nav-li {
    list-style-type: none;

    .nav-link {
      color: rgb(225, 225, 225);
      transition: color .4s ease;

      &:hover {
        color: #1d8dd8;
      }
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoSection>
        <Logo src={LogoImage} alt='Logo image' />
        <span className='logo-name'>Type World.</span>
      </LogoSection>
      <NavSection>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className="nav-li">
            <Link to='/options' className='nav-link'>Options</Link>
          </li>
          <li className="nav-li">
            <Link to='/settings' className='nav-link'>Settings</Link>
          </li>
        </ul>
      </NavSection>
    </Container>
  );
};

export default Header;