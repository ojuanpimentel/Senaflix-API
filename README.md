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
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filmes específico |
| POST | `/filmes` | Cria um novo filmes |

### Professores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` | Lista todos as séries |
| POST | `/series` | Cria uma nova série |

## Tecnologias
- Node.js
- Express
- Os dados são armazenados em memória (reinicar o servidor apaga tudo)
me...
