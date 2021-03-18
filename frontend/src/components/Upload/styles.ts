import { Dialog, withStyles } from "@material-ui/core";
import styled, { css } from "styled-components";
 
 const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

type IDropContainer = {
   isDragActive?: boolean;
   isDragReject?: boolean;
 };
 
 export const DropContainer = styled.div<IDropContainer>`
  border: 1px dashed black;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props: any) => props.isDragActive && dragActive};
  ${(props: any) => props.isDragReject && dragReject};

  
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

interface ITypeMessageColor {
  type?: "default" | "error" | "success";
}

export const UploadMessage = styled.p<ITypeMessageColor>`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  
`;


export const CustomDialog = withStyles({
  paper: {
    margin: 32,
    position: 'relative',
    overflowY: 'auto',
    height: `50%`,
    width: `100%`,
    // Fix IE 11 issue, to remove at some point.
    '@media print': {
      overflowY: 'visible',
      boxShadow: 'none'
    },
    backgroundColor: '#bfe7f9'
  }, 
 
})(Dialog);

export const Descriptions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin: 50px 16px;
}
p{
  margin: 30px 10px;
}


`;