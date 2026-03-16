// Primeiro precisamos criar o app usando o express
const express = require("express") //Importar biblioteca
const app = express() //Criação do app - que utilzia as rotas da API (get, post...)

// Permite aceitar JSON na requisição
app.use(express.json())

// Lista falsa - pois não há banco de dados:
const filmes = [
    {
        id: 1,
        title: "Toy Story 4",
        description: "Em Toy Story 4, Woody sai em uma aventura para salvar Forky, reencontra Bo Peep e decide seguir uma nova vida ajudando brinquedos perdidos.",
        genre: "Aventura",
        Image: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22045-cartaz.jpg",
        releaseYear: 2021,
    }
]

// // Criação de rotas
// app.get("/filmes", (req, res) => {
//     return res.json(filmes)
// })
// // A rota que terá de ser colocada para executar | Req e res mostram que haverá uma requisição e uma resposta - Em todas as rotas haverá uma requisição euma resposta
// // O get retonra todos os filmes


// Criar  novos filmes no postman:
app.post("/filmes", function (req, res) {
    const titleRequisitado = req.body.title
    const descriptionRequisitado = req.body.description
    const genreRequisitado = req.body.genre
    const imageRequisitado = req.body.Image
    const releaseYearRequisitado = req.body.releaseYear

    if (titleRequisitado.length <= 1) {
        return res.status(400).json({ erro: "O título do filme precisa ser maior do que 1 caractere!" })
    }

    if (!titleRequisitado || !descriptionRequisitado || !genreRequisitado || !imageRequisitado || !releaseYearRequisitado) {
        return res.status(400).json({ erro: "Todas as informações são obrigatórias!" })
    }

    const NovoFilme = {
        id: 2,
        title: titleRequisitado,
        description: descriptionRequisitado,
        genre: genreRequisitado,
        Image: imageRequisitado,
        releaseYear: releaseYearRequisitado
    }

    // Adiciona o novo filme no final da lista
    filmes.push(NovoFilme)
    res.status(201).send()
})


// FILTRAR FILMES:
app.get('/filmes', function (req, res) {
    const genre = req.query.genre

    // Se não passar query param, retorna todos
    // A exclamação inverte o valor

    if (!genre) {
        return res.json(filmes)
    }

    const filmesFiltrados = filmes.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    // "a" é a busca por todos os alunos, ele vai passar por todos eles e retornar o que foi filtrado

    res.json(filmesFiltrados)

})


// Filtrar por id

app.get("/filmes/:id", function(req, res){
     const id = parseInt(req.params.id) // O query aprameter volta como texto

     const filme = filmes.find(a => a.id == id)

     //Se a variável for nula é igual a falso, caso tenha algo, caso exista, é verdadeira
     if(filme){
        return res.json(filme)
     } else {
        res.status(404).json("Filme não encontrado")
     }
})



// SÉRIES-----------------



const series = [
    {
        id: 1,
        title: "Full House",
        description: "Em Full House, Danny Tanner cria suas três filhas com a ajuda de Jesse Katsopolis e Joey Gladstone, formando uma família cheia de confusões e lições de vida.",
        genre: "Sitcom",
        Image: "https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Fseries%2Fseries_64_MV5BN2VhZjA4ZGMtMTM0ZC00MTIyLWFjMzMtOWI4Y2JjN2IyNmYyXkEyXkFqcGdeQXVyNjc4NTExMTk%40._V1_.jpg",
        releaseYear: 1987,
    }
]


// // Criação de rotas
// app.get("/series", (req, res) => {
//     return res.json(series)
// })
// // A rota que terá de ser colocada para executar | Req e res mostram que haverá uma requisição e uma resposta - Em todas as rotas haverá uma requisição euma resposta
// // O get retonra todos os filmes


// Criar  novas series no postman:
app.post("/series", function (req, res) {
    const titleRequisitado = req.body.title
    const descriptionRequisitado = req.body.description
    const genreRequisitado = req.body.genre
    const imageRequisitado = req.body.Image
    const releaseYearRequisitado = req.body.releaseYear

    if (titleRequisitado.length <= 1) {
        return res.status(400).json({ erro: "O título do filme precisa ser maior do que 1 caractere!" })
    }

    if (!titleRequisitado || !descriptionRequisitado || !genreRequisitado || !imageRequisitado || !releaseYearRequisitado) {
        return res.status(400).json({ erro: "Todas as informações são obrigatórias!" })
    }

    const NovaSerie = {
        id: 2,
        title: titleRequisitado,
        description: descriptionRequisitado,
        genre: genreRequisitado,
        Image: imageRequisitado,
        releaseYear: releaseYearRequisitado
    }

    // Adiciona o novo filme no final da lista
    series.push(NovaSerie)
    res.status(201).send()
})

// FILTRAR SÉRIES:
app.get('/series', function (req, res) {
    const genre = req.query.genre

    // Se não passar query param, retorna todos
    // A exclamação inverte o valor

    if (!genre) {
        return res.json(series)
    }

    const seriesFiltradas = series.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    // "a" é a busca por todos os alunos, ele vai passar por todos eles e retornar o que foi filtrado

    res.json(seriesFiltradas)

})


// Filtrar por id

app.get("/series/:id", function(req, res){
     const id = parseInt(req.params.id) // O query aprameter volta como texto

     const serie = series.find(a => a.id == id)

     //Se a variável for nula é igual a falso, caso tenha algo, caso exista, é verdadeira
     if(serie){
        return res.json(serie)
     } else {
        res.status(404).json("Série não encontrada")
     }
})



// Segundo passo - Colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")


}) // A porta onde ficará isso tudo (3000), a garantia de que tudo irá rodar da forma correta