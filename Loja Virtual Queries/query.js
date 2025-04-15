//Query que retona todos os produtos que têm um preço maior que R$3000.
db.produtos.find({ preco: { $gt: 3000 } })

//Query que retorna todos os fabricantes localizados no estado do Rio de aneiro (RJ).
db.fabricantes.find({ "endereco.estado": "RJ" })

//Query que retorna todos os produtos destacados (destaque igual a true).
db.produtos.find({ destaque: true })

//Query que retorna todos os produtos da categoria "Smartphones".
db.produtos.find({ "categoria.nome": "Smartphones" })

//Query que retorna todos os produtos com preços entre R$ 1000 e R$2000.
db.produtos.find({ preco: { $gte: 1000, $lte: 2000 } })

//Query que retorna todos os produtos da categoria "Eletrônicos" com preços acima de R$ 2000.
db.produtos.find({ "categoria.nome": "Eletrônicos", preco: { $gt: 2000 } })

//Query que retorna todos os fabricantes que possuem telefones de contato com DDD "11".
db.fabricantes.find({ "telefones.ddd": "11" })

//Query que retorna todos os produtos da categoria "Informática" que possuem um preço maior que R$ 1000 e estão destacados.
db.produtos.find({ "categoria.nome": "Informática", preco: { $gt: 1000 }, destaque: true })

//Query que retorna todos os produtos que contenham a palavra "Samsung" em seu nome.
db.produtos.find({ nome: /Samsung/ })

//Query que retorna todos os produtos da categoria "Games" ou "Wearables" com preços entre R$ 100 e R$ 500.
db.produtos.find({ "categoria.nome": { $in: ["Games", "Wearables"] }, preco: { $gte: 100,
$lte: 500 } })

//Query que retorna todos os produtos que não estão categorizados como "destaque", exibindo apenas o id, nome e preço do produto e o nome do fabricante.
//Lista de documentos ordenada pelo preço em ordem decrescente.
db.produtos.find(
{destaque: false},
{nome: true, preco: true, 'fabricante.nome': true})
.sort({preco: -1})

//Query que retorna todos os produtos que possuem preço entre R$2.000,00 e R$ 4.000,00, você deve exibir apenas o nome e o preço do produto.
db.produtos.find(
{ preco: {$gte : 2000, $lte: 4000} },
{_id: false, nome: true, preco: true})


//Incrementação do preço de todos os produtos da categoria "Eletrônicos" em 10%.
db.produtos.updateMany({ "categoria.nome": "Eletrônicos" }, { $mul: { preco: 1.1 } })

//Adição do fabricante "Microsoft" caso não exista na coleção de fabricantes.
db.fabricantes.updateOne({ nome: "Microsoft" }, { $setOnInsert: { nome: "Microsoft", cnpj:
"12345678901234" } }, { upsert: true })

//Atualização todos os produtos da categoria "Games" para que tenham o preço reduzido em 20%.
db.produtos.updateMany({ "categoria.nome": "Games" }, { $mul: { preco: 0.8 } })

15. Atualize todos os produtos da categoria "Games" para que tenham o preço reduzido em
20%.
db.produtos.updateMany({ "categoria.nome": "Games" }, { $mul: { preco: 0.8 } })