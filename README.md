# API de Gerenciamento de Empregados

## Introdução

Bem-vindo à API de Gerenciamento de Empregados, desenvolvida usando Express.js. Esta API permite gerenciar os dados dos empregados, incluindo detalhes pessoais, informações de contato, condições médicas e muito mais.

## Funcionalidades

- Adicionar um novo empregado
- Recuperar detalhes de um empregado por ID

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/FariasNathalia/MGS_POO
    cd MGS_POO
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    ```bash
    npm start
    ```

    O servidor será iniciado em `http://localhost:3333` ou na porta especificada nas variáveis de ambiente.

## Endpoints da API

### Adicionar um Novo Empregado

- **URL:** `/empregado`
- **Método:** `POST`
- **Descrição:** Adiciona um novo empregado ao sistema.
- **Corpo da Requisição:**

    ```json
    {
        "id": "string",
        "nome": "string",
        "cpf": "string",
        "telefones": ["string"],
        "emails": ["string"],
        "dataNascimento": "string",
        "alergias": ["string"],
        "problemasMedicos": ["string"]
    }
    ```

- **Resposta:**

    ```json
    {
        "empregado": {
            "id": "string",
            "nome": "string",
            "cpf": "string",
            "telefones": ["string"],
            "emails": ["string"],
            "dataNascimento": "string",
            "alergias": ["string"],
            "problemasMedicos": ["string"],
            "createdAt": "Date",
            "updatedAt": "Date"
        }
    }
    ```

- **Resposta de Erro:**

    ```json
    {
        "error": "Empregado já cadastrado."
    }
    ```

### Recuperar Detalhes do Empregado

- **URL:** `/empregado`
- **Método:** `GET`
- **Descrição:** Recupera os detalhes de um empregado pelo seu ID.
- **Parâmetros da Requisição:**

    ```json
    {
        "id": "string"
    }
    ```

- **Resposta:**

    ```json
    {
        "id": "string",
        "nome": "string",
        "cpf": "string",
        "telefones": ["string"],
        "emails": ["string"],
        "dataNascimento": "string",
        "alergias": ["string"],
        "problemasMedicos": ["string"],
        "createdAt": "Date",
        "updatedAt": "Date"
    }
    ```

- **Resposta de Erro:**

    ```json
    {
        "error": "Empregado não encontrado."
    }
    ```

## Conclusão

Obrigado por usar a API de Gerenciamento de Empregados. Se você tiver alguma dúvida ou precisar de mais assistência, sinta-se à vontade para abrir uma issue ou contribuir para o projeto. Boas codificações!
