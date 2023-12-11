import styled, { css } from 'styled-components';
import {
  ALIGN_ITEMS,
  FLEX_DIRECTION,
  JUSTIFY_CONTENT,
  flex,
} from '../../styles/common.styles';
import { Palette } from '../../styles/palette.styles';
import { ThemeProps } from '../../theme/ThemeContext';

const FixedSwitchWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const light = css`
  background-color: ${Palette.DEEP_PURPLE};
  color: ${Palette.OFF_WHITE};
`;

const dark = css`
  background-color: ${Palette.OFF_WHITE};
  color: ${Palette.DEEP_PURPLE};
`;

const Toggle = styled.div<ThemeProps>`
  ${flex(FLEX_DIRECTION.column, JUSTIFY_CONTENT.center, ALIGN_ITEMS.center)}

  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;

  ${({ theme }) => (theme === 'dark' ? dark : light)};

  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const ToggleIcon = styled.img`
  fill: white;
`;

export { FixedSwitchWrapper, ToggleIcon, Toggle };
