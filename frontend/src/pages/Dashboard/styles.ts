import styled, { css } from 'styled-components';
import { shade } from 'polished';


export const Info = styled.div` 
  display: flex;       
  flex-direction: column;
  width: 50%;
  position: relative;
  left:25%;
   
 
  div {
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;
    position: relative;
    background-color: rgba(243, 244, 246, 1);
    &:hover {
      transform: translateX(10px);
    }
    & + div {
      margin-top: 16px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; //sempre que quiser uma imagem arredondada usa 50%
    }   
    span {
      display: block
    }
  }
`;


export const Title = styled.h1`
  font-size: 24px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 80px;
  display:flex;
  justify-content: center;
`;

