import { createAula, readAulas, updateAula } from '../models/AulaModel.js';


export async function cadastroAula(req, res, updateAula) {
  console.log('AulaController cadastroAula');
  //Criando constante aula
  const aula = req.body;
  try {
    //Declarando status com o codigo da resposta e reposta como JSON
    const [status, resposta] = await createAula(aula);
    res.status(status).json(resposta);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function mostrandoAulas(req, res) {
  console.log('AulasController monstrandoAulas');
  try {
    const [status, resposta] = await readAulas();
    res.status(status).json(resposta);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

}

export async function atualizadoAula(req, res) {
  console.log('AulaController atualizandoAula');
  const { id } = req.params;
  const aula = req.body;

  try {
    const [status, resposta] = await updateAula(aula, id);
    res.status(status).json(resposta);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);

  }
}

export async function excluindoAula(req,res) {
  console.log('AulaController atualizandoAula');
  const { id } = req.params;


  try {
    const [status, resposta] = await updateAula(aula, id);
    res.status(status).json(resposta);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);

  }
}