import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getIcon } from 'src/styles/icons';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-family: 'Times New Roman';
  font-weight: bold;
  margin-bottom: 1rem;
  position: absolute;
  width: 90%;

  @media (min-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  .nav-item {
    border-bottom: 1px solid black;
  }

  .icon {
    font-size: 2.5rem;
  }
`;

const NavBar: NextPage = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="logo" height="90px" width="180px" />
        </a>
      </Link>
      <RightItemsContainer>
        <a className="nav-item show-web">Templates</a>
        <a className="nav-item show-web">Recommendations</a>
        <a className="nav-item show-web">About</a>
        <a href="https://github.com/Lv1671" className="icon" target="_new" title="Source code">
          {getIcon('github')}
        </a>
      </RightItemsContainer>
    </Nav>
  );
};

export default NavBar;
