import { shade } from 'polished';
import styled from 'styled-components';

export const Info = styled.div` 
  display: flex;       
  flex-direction: column;
  width: 50%;
  position: relative;
  left: 25%;

 
  div {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;
    position: relative;    
    background-color: rgba(243, 244, 246, 1);
    &:hover {
      transform: translateX(10px);
    }
    & + div {
      margin-top: 5px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; //sempre que quiser uma imagem arredondada usa 50%
    }   
    span {
      display: block
    }
    button{
    background: #bfe7f9 ;
    height:56px;
    border-radius: 10px;
    border:0;
    padding: 0 8px;
    color: #312e38;
    width: 50%;
    font-weight: 500;
    margin-top:16px;
    transition: background-color 0.2s;
    &:hover{
      background: ${shade(0.2, '#bfe7f9')}
    }
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
  color: ${shade(0.5, '#2CB1EE')};
`;

