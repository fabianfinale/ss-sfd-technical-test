import { Outlet } from 'react-router-dom';
import { HomeWrapper, StyledHome } from './home.styles';

const Home = () => {
  return (
    <StyledHome>
      <HomeWrapper>
        <Outlet />
      </HomeWrapper>
    </StyledHome>
  );
};

export default Home;
