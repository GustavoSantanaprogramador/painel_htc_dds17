import React from 'react'
import TabelaAulas from '../TabelaAulas/TabelaAulas';
import Navbar from '../layout/Navbar'

function GestaoAulas() {
  return (
    <>
    
      <Navbar/>
      <div clasName = 'container'>
      <TabelaAulas/>
      </div>
    </>
  )
}

export default GestaoAulas
