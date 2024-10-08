import React from 'react'
import TabelaAulas from '../TabelaAulas/TabelaAulas';
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom';

function GestaoAulas() {
  return (
    <>
    
      <Navbar/>
      <div clasName = 'container'>
        <h1 className='text-center my 3'>Gestao Aulas</h1>
        <div className='text-end'></div>
        <Link  className = 'btn btn-primary mb-3' to ='/cadastro_aula'>Cadastro Aula</Link>
      <TabelaAulas tipo="edit"/>
      </div>
    </>
  )
}

export default GestaoAulas
