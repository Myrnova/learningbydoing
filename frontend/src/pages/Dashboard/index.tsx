import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DashboardLayout } from '../../components/Layout';
import api from "../../services/api"
import { DocPendente, Info, Title } from './styles';

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
            docNecessario: IDocNecessarios[]            
        },
    },     
}

const Dashboard: React.FC = () => {
const [dashboard, setDashboard] = useState<IAluno | null>(null);

const history = useHistory();

useEffect(() => {    
    api.get("/alunos").then(response => {
        setDashboard(response.data[0]);
        console.log(response.data[0])
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
    <Info>        
    <Title>Informações</Title>
     <div><span>Nome: {dashboard.nome}</span>
     <span>Email: {dashboard.email}</span></div>
     {dashboard.turma &&  (
        <>
        <div><span>Curso: {dashboard.turma.curso.nome.toString()}</span>
        <span>Enfase: {dashboard.turma.curso.enfase.descricao.toString()}</span>
        <span>Modalidade: {dashboard.turma.curso.modalidade.descricao.toString()}</span>
        <span>Descrição: {dashboard.turma.curso.descricao.toString()}</span></div>
        <div><span>Turma: {dashboard.turma.id.toString()}</span>
        <span>Grade: {dashboard.turma.grade.toString()}</span></div>      
       
        </>
        )}

     {dashboard.turma.curso.docNecessario && (
         <DocPendente>
            <label htmlFor="btnIrDocumentos">Você possui documentos pendentes, clique no botão para checa-los</label>
            <button id="btnIrDocumentos" onClick={() => history.push("/documentos")}>Checar documentos</button>
        </DocPendente>
     )}
   
    </Info>
    )
    } 
    </DashboardLayout>
    </>
)
}


export default Dashboard;