import { Outlet } from 'react-router-dom';
import { HomeWrapper, StyledHome } from './home.styles';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Home = () => {
  return (
    <StyledHome>
      <ThemeSwitch />
      <HomeWrapper>
        <Outlet />
      </HomeWrapper>
    </StyledHome>
  );
};

export default Home;
