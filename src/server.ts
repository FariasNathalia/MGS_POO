/* eslint-disable no-case-declarations */

import express from 'express'

const app = express()
app.use(express.json())

type Empregados = {
  id: string
  nome: string
  cpf: string
  telefones: string[]
  emails:  string[]
  dataNascimento: string
  alergias?: string[]
  problemasMedicos?: string[]
  createdAt?: Date
  updatedAt?: Date
}

const empregados = [] as Empregados[]

app.post('/empregado', async (req, res) => {
  const {
    id,
    nome,
    cpf,
    telefones,
    emails,
    dataNascimento,
    alergias,
    problemasMedicos,
  }: Empregados = req.body

  console.log(req.body)

  const verifyEmployeerAlreadyExists = empregados.find(
    (item) => item.id === id || item.cpf === cpf,
  )

  if (verifyEmployeerAlreadyExists) {
    return res.json({ error: 'Empregado já cadastrado.' })
  }

  const empregado: Empregados = {
    id,
    nome,
    cpf,
    telefones,
    emails,
    dataNascimento,
    alergias,
    problemasMedicos,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  empregados.push(empregado)

  return res.json({ empregado })
})

app.get('/empregado', async (req, res) => {
  const { id } = req.query

  const buscaEmpregado = empregados.find((item) => item.id === id)

  if (!buscaEmpregado) {
    return res.json({ error: 'Empregado não encontrado.' })
  }

  return res.json(buscaEmpregado)
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log('Servidor iniciado.'))
