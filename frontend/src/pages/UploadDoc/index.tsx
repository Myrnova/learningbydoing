import React from "react";

import { Container, Content } from "./styles";

import Upload from "../../components/Upload";
import FileList from "../../components/FileList";

import { FileProvider } from "../../context/files";

const UploadDoc: React.FC = () => (
  <FileProvider>
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
    </Container>
  </FileProvider>
);

export default UploadDoc;