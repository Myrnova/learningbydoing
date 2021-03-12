import React, { useCallback, useEffect, useState } from 'react';
import Upload from '../../components/Upload';
import api from "../../services/api"



interface IDocNecessarios{
    descricao: string,
    id: string
}

interface IAluno {
    email: string,
    id: string,
    nome: string,
    password?: string,
    turma: {
        grade: number,
        id: string,
        curso: {
            descricao: string,
            nome: string
            id: string,
            enfase: {
                descricao: string
            },
            modalidade: {
                descricao: string
            },
            docNecessario: IDocNecessarios[],
        },
    },     
}


const Dashboard: React.FC = () => {
const [dashboard, setDashboard] = useState<IAluno | null>(null);
const [openModal, setOpenModal] = useState(false);
useEffect(() => {    
    api.get("/alunos").then(response => {
        setDashboard(response.data[0]);
    });
}, [])

function handleOpenModal(){
    setOpenModal(true);
}

const statusModal = useCallback((data: boolean) => {
    setOpenModal(data);
}, [])

return(
    <>
    {dashboard && (
    <>
     <span>{dashboard.nome}</span>
     <button onClick={handleOpenModal}> Upload Arquivo</button>
      <Upload modalOpen={openModal} modalStatus={statusModal}/>
    </>
    )
    }   
    </>
)
}


export default Dashboard;