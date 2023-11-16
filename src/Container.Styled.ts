import styled, { css } from 'styled-components'
import { colors } from './colors'

export const StyledSequenceMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 25px;
  background: ${colors.Gray50};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledSequenceNameInput = styled.input`
  margin-bottom: 5px;
  margin-left: 8px;
  color: ${colors.Gray900};
  font-weight: 500;
  font-size: 10px;
  font-family: 'Graphik LCG Web', sans-serif;
  border: 0;
  border-bottom: 1px solid ${colors.Gray300};

  &::placeholder {
    color: ${colors.Gray400};
    font-weight: 500;
    font-size: 10px;
    font-family: 'Graphik LCG Web', sans-serif;
  }

  &:focus {
    border-bottom: 1px solid ${colors.Gray500};
    outline: none;
  }
`

export const StyledContainer = styled.div<{
  hover: boolean | undefined
  isPlaceholder: boolean | undefined
  shadow: boolean | undefined
}>`
  position: relative;
  max-width: 760px;
  margin-bottom: 24px;

  ul {
    display: grid;
    grid-gap: 10px;
    margin: 0;
    padding: 20px;
    list-style: none;
  }

  ${(props) =>
    props.isPlaceholder &&
    css`
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.5);
      background-color: transparent;
      border-style: dashed;
      border-color: rgba(0, 0, 0, 0.08);

      &:hover {
        border-color: rgba(0, 0, 0, 0.15);
      }
    `}

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0 1px 10px 0 rgba(34, 33, 81, 0.1);
    `}

  &:focus-visible {
    border-color: transparent;
    box-shadow: 0 0 0 2px rgb(255 255 255), 0 0 0 2px #4c9ffe;
  }
`
