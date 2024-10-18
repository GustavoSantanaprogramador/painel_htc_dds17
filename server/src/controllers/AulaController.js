import { createAula } from '../models/AulaModel.js';

export async function cadastroAula(req, res) {
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
