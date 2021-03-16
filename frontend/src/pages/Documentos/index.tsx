import React, { useCallback, useEffect, useState } from "react"
import { DashboardLayout } from "../../components/Layout"
import Upload from "../../components/Upload"
import api from "../../services/api"
import { Info, Title } from "./styles"

interface IDocNecessarios{
    descricao: string,
    id: string
}

const Documentos: React.FC = () => {
const [openModal, setOpenModal] = useState(false);
const [docNecessarios, setDocNecessarios] = useState<IDocNecessarios[] | null>(null);

const [cursoID, setCursoID] = useState<string>(() => {
    const storagedCurso = localStorage.getItem(
      '@AlunoOnline:cursoId',
    );
    if (storagedCurso) {
      return JSON.parse(storagedCurso);
    }
    return "";
  });
  
useEffect(() => {    
    api.post('/alunos/documentos', {curso_id: cursoID}).then(response => {
        setDocNecessarios(response.data);
        console.log(response.data)
    });
}, [cursoID])

const handleOpenModal = useCallback(() => {
    setOpenModal(true);
}, [])

const statusModal = useCallback((data: boolean) => {
    setOpenModal(data);
}, [])


return(
    <DashboardLayout>      
    <Title>Documentos Pendentes</Title>
    <Info>
    {docNecessarios && docNecessarios.map(docNecessario => ( 
    <div key = {docNecessario.id}>
    <span>{docNecessario.descricao}</span>
    <button onClick={handleOpenModal}> Upload Arquivo</button>
      <Upload modalOpen={openModal} modalStatus={statusModal} documentTitle ={docNecessario.descricao}/>
    </div>
      ))}
    </Info>
    </DashboardLayout>
)}

export default Documentos