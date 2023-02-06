import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main, NavLinkItem } from './AppStyle';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
