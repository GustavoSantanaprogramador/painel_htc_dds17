import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { Form, Link } from 'react-router-dom';
import FormAula from '../FormAula/FormAula';

function EditarAula() {
  

  //Função temporarária para cdastro de data
  

  async function cadastrarAula(infoAula) {
   
    //Criando objeto que será encaminhado para o POST da API
   
    try {
      //O POST é usado para inserir elementos na API
      const resposta = await fetch('http://localhost:5000/aulas',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },body: JSON.stringify(infoAula)
      });

      if(!resposta.ok){
        console.log('Erro ao criar aula');
      }else{
       // alert('Aula cadastrada');
      }

    } catch (error) {
      console.error('Erro no cadastro da aula',error)
    }
  }
  return (
    <div>
      <Navbar />
      <FormAula titulo = 'Cadastro Aula' txtBtn='Cadastrar' tipo='cadastrada' handleSubmit={cadastrarAula}/>
    </div>
  );
}

export default EditarAula
