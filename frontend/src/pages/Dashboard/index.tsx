import React, { useEffect } from 'react';
import api from "../../services/api"

const Dashboard: React.FC = () => {

useEffect(() => {    
async function loadAlunoInfo(): Promise<void> {
    const alunos = await api.get("/alunos");
    console.log(alunos);
}

loadAlunoInfo();
},[])

return(
    <>
    <h1>Dashboard</h1>
    </>
)
}


export default Dashboard;