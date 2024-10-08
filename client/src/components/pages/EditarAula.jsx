import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { Form, Link } from 'react-router-dom';
import FormAula from '../FormAula/FormAula';
import { useParams } from 'react-router-dom';

function CadastroAulas() {
  

  //Função temporarária para cdastro de data
  

  async function cadastrarAula(infoAula) {
    const {id} = useParams()
    async function editAula(infoAula) {
      
    }
   
    //Criando objeto que será encaminhado para o POST da API
   
    try {
      //O POST é usado para inserir elementos na API
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },body: JSON.stringify(infoAula)
      });

      if(!resposta.ok){
        console.log('Erro ao editar aula');
      }else{
        alert('Aula cadastrada');
      }

    } catch (error) {
      console.error('Erro no edição da aula',error)
    }
  }
  return (
    <div>
      <Navbar />
      <FormAula titulo ='Editar Aula'txtBtn='Salvar'id={id} handleSubmit={editAula}/>
    </div>
  );
}

export default CadastroAulas;
