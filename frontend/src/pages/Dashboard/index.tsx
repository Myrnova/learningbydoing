import React, { useEffect, useState } from 'react';
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
useEffect(() => {    
    api.get("/alunos").then(response => {
        setDashboard(response.data[0]);
    });
}, [])

return(
    <>
    {dashboard && (
     <span>{dashboard.nome}</span>
    )
    }   
    </>
)
}


export default Dashboard;