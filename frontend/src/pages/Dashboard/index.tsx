import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/Layout';
import api from "../../services/api"


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


useEffect(() => {
    localStorage.setItem(
      '@AlunoOnline:cursoId',
      JSON.stringify(dashboard?.turma.curso.id),
    );
  }, [dashboard?.turma.curso.id]);
 

return(
     <>
     <DashboardLayout>
    {dashboard && (
    <>
     <span>{dashboard.nome}</span>
     <span>{dashboard.email}</span>
     {dashboard.turma &&  (
         <>
     <span>{dashboard.turma.grade.toString()}</span>
     <span>{dashboard.turma.curso.nome.toString()}</span>
     <span>{dashboard.turma.curso.descricao.toString()}</span>
     <span>{dashboard.turma.curso.enfase.descricao.toString()}</span>
     <span>{dashboard.turma.curso.modalidade.descricao.toString()}</span>
     </>
     )}
   
    

    </>
    )
    } 
    </DashboardLayout>
    </>
)
}


export default Dashboard;