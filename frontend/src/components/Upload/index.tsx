import { Dialog, DialogProps } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";

 import { useDropzone } from "react-dropzone";
 import { useFiles } from "../../context/files";
 
 import { DropContainer, UploadMessage } from "./styles";
 

interface CustomDialogProps {
  modalOpen: boolean
  modalStatus(name: boolean): void
}


 const Upload: React.FC<CustomDialogProps> = ({
   modalOpen,
   modalStatus
 }) => {

   const [openModal, setOpenModal] = useState(false);

   const { handleUpload } = useFiles(); 

   useEffect(() => {
    setOpenModal(modalOpen);
   },[modalOpen])

   useEffect(() => {
     modalStatus(openModal)
   },[modalStatus, openModal])

   const onDrop = useCallback(
     (files) => {
       handleUpload(files);
     },
     [handleUpload]
   );


   const closeModal = useCallback(event => {
    setOpenModal(false);
  }, []);


   const {
     getRootProps,
     getInputProps,
     isDragActive,
     isDragReject,
   } = useDropzone({
     accept: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"],
     onDrop,
   });
 
   const renderDragMessage = useCallback(() => {
     if (!isDragActive) {
       return <UploadMessage>Arraste imagens aqui...</UploadMessage>;
     }
 
     if (isDragReject) {
       return (
         <UploadMessage type="error">
           Tipo de arquivo não suportado
         </UploadMessage>
       );
     }
 
     return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
   }, [isDragActive, isDragReject]);
 
   return (
     <>
      <Dialog
          open={openModal}
          onClose={closeModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <h2 id="modal-title">
            Meu Título
          </h2>
          <p id="modal-description">
            Minha Descrição
          </p>
     <DropContainer {...getRootProps()}>
       <input {...getInputProps()} />
       {renderDragMessage()}
     </DropContainer>
     </Dialog>
     </>
   );
 }
 
 export default Upload;
