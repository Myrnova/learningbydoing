import React, { useCallback, useEffect, useState } from "react"
import { DashboardLayout } from "../../components/Layout"
import Upload from "../../components/Upload"
import api from "../../services/api"
import { Container } from "./styles"

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
}, [])

const handleOpenModal = useCallback(() => {
    setOpenModal(true);
}, [])

const statusModal = useCallback((data: boolean) => {
    setOpenModal(data);
}, [])


return(
    <DashboardLayout>
    {docNecessarios && docNecessarios.map(docNecessario => ( 
    <>
    <span>{docNecessario.descricao}</span>
    <button onClick={handleOpenModal}> Upload Arquivo</button>
      <Upload modalOpen={openModal} modalStatus={statusModal} />
      </>
      ))}
    
    </DashboardLayout>
)

}

export default Documentos