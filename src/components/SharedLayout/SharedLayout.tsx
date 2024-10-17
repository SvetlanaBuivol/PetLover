import { Suspense } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { Header, Svg } from "./SharedLayout.styled";
import { Outlet, useLocation } from "react-router-dom";

const SharedLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <>
      <Header $isHome={isHome}>
        <Container>
          <Logo isHome={isHome} />
          <Svg $isHome={isHome}>
            <use xlinkHref="svg/svgSprite.svg#icon-menu"></use>
          </Svg>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
