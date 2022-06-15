import styled, { css } from 'styled-components'

// const Tile = (props) => {
//   const val = props.value;
//   return <td className='tile'>{val}</td>;
// };

const Tile = styled.td`
  width: 40px;
  height: 40px;
  font-size: 32px;
  color: black;
  text-align: center;

  ${props => props.modifier === "DW" && css`
    background: palevioletred;
    color: black;
  `}

  ${props => props.modifier === "TW" && css`
    background: darkred;
    color: white;
  `}

  ${props => props.modifier === "DL" && css`
    background: skyblue;
    color: black;
  `}

  ${props => props.modifier === "TL" && css`
    background: darkgray;
    color: white;
  `}
`;

export default Tile;
