//Importando pacote express
import express from 'express';

import { cadastroAula } from './controllers/AulaController.js';

//Intanciando objeto express
const app = express();
const porta = 5000;

//Configurando comunicação em JSON
app.use(express.json());

//Rota de teste da API
app.get('/', (req, res) => {
  res.send('API funcionando');
});

//Rotas de CRUD de aulas
app.post('/aulas',cadastroAula);

app.get('/aulas',(req,res)=>{
    res.status(200).json(
        [
            {
              "data": "2024-10-07T00:00:00.000Z",
              "data_hora_inicio": "2024-10-07T18:30:00.000Z",
              "data_hora_fim": "2024-10-07T22:00:00.000Z",
              "turma": "EMP-NBM-03",
              "instrutor": "JOEL",
              "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
              "ambiente": "VTRIA-3-SALA-3004",
              "chave": null,
              "id": "1300"
            }
        ]
    );
})

app.listen(porta, () => {
  console.log(`API funcionando na porta ${porta}`);
});
