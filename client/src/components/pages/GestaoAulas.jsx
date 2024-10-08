import { useEffect, useState } from 'react';
import TabelaAulas from '../TabelaAulas/TabelaAulas';
import Navbar from '../layout/Navbar';
import { Link, useParams } from 'react-router-dom';

function GestaoAulas() {
  let {tipo} = useParams();
  const [mostraMensagem, setMostramensagem] = useState(false);
  const [classeMensagem,setClasseMensagem] = useState('');
  const [textoMensagem, setTextoMensagem] = useState('');

  useEffect(()=>{
    if(tipo){
      setMostramensagem(true);
      tipoMensagem();
      setTimeout(()=>{
        setMostramensagem(false);
      },5000);
    }
  },[tipo])

  function tipoMensagem(){
    switch(tipo){
      case 'cadastrada':
        setClasseMensagem('alert alert-success');
        setTextoMensagem('Aula Cadastrada');
      break;
      case 'editada':
        setClasseMensagem('alert alert-primary');
        setTextoMensagem('Aula Editada');
      break;
      case 'deletada':
        setClasseMensagem('alert alert-danger');
        setTextoMensagem('Aula Deletada');
      break;
    }
  }

  function handleDelete(){
    tipo = 'deletada';
    console.log(tipo);
    //tipoMensagem();
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='text-center my-3'>Gestão Aulas</h1>
        {mostraMensagem && <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='text-end'>
          <Link className='btn btn-primary mb-3' to='/cadastro_aula'>Cadastro Aula</Link>
        </div>
        <TabelaAulas tipo='edit' onDeleteSuccess={()=>handleDelete()} />
      </div>
    </>
  );
}

export default GestaoAulas;
