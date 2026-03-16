# API SENAFLIX - Node.Js + Express
API REST simples para gerenciar filmes e séries

## Pré-requisitos
- Node.js instalado

## Como rodar

### Instalar dependências
```bash
npm i
```

### Iniciar o servidor
```bash
npm index.js
```

### Acessar
Abra o navegador em `http://localhost:3000`

## Endpoints

### Alunos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` | Lista todos os alunos |
| GET | `/filmes/:id` | Buscar um aluno específico |
| POST | `/filmes` | Cria um novo aluno |
| PUT | `/filmes/:id` | Atualiza um aluno |
| DELETE | `/filmes/:id` | Deleta um aluno |

### Professores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` | Lista todos os professores |
| POST | `/series` | Cria um novo professor |
| PUT | `/series/:id` | Atualiza um professor |
| DELETE | `/series/:id` | Deleta um professor |

## Tecnologias
- Node.js
- Express
- Os dados são armazenados em memória (reinicar o servidor apaga tudo)
me...
