import styled from 'styled-components';
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

export { FLEX_DIRECTION, JUSTIFY_CONTENT, ALIGN_ITEMS, flex, Wrapper };
