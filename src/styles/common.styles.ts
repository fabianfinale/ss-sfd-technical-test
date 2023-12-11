import styled from 'styled-components';
import { Palette } from './palette.styles';
const FLEX_DIRECTION = {
  row: 'row',
  column: 'column',
  rowReverse: 'row-reverse',
  columnReverse: 'column-reverse',
};

const JUSTIFY_CONTENT = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  initial: 'initial',
  inherit: 'inherit',
};

const ALIGN_ITEMS = {
  stretch: 'stretch',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  baseline: 'baseline',
  initial: 'initial',
  inherit: 'inherit',
};

const flex = (
  direction = FLEX_DIRECTION.row,
  mainAxisAlignment = JUSTIFY_CONTENT.flexStart,
  crossAxisAlignment = ALIGN_ITEMS.stretch
) => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${mainAxisAlignment};
  align-items: ${crossAxisAlignment};
  width: 100%;
`;

const Wrapper = styled.div`
  ${flex(
    FLEX_DIRECTION.column,
    JUSTIFY_CONTENT.spaceBetween,
    ALIGN_ITEMS.center
  )}
`;

const ListWrapper = styled(Wrapper)`
  overflow-x: hidden;
  overflow-y: auto;
  align-items: flex-start;
`;

const StyledH1 = styled.h1``;
const StyledH2 = styled.h2``;

const StyledH3 = styled.h3`
  color: ${Palette.OFF_WHITE};
  font-size: 1.728rem;
`;

const StyledP = styled.p``;
const StyledList = styled.ul``;
const ListEntry = styled.li``;

export {
  FLEX_DIRECTION,
  JUSTIFY_CONTENT,
  ALIGN_ITEMS,
  flex,
  Wrapper,
  ListWrapper,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
  StyledList,
  ListEntry,
};
