db.pessoas.insertMany([
    {_id: 1, nome: "Joao", peso: 80, altura: 180 }, 
    {_id: 2, nome: "Mara", peso: 60, altura: 170 }, 
    {_id: 3, nome: "Sara", peso: 70, altura: 170 }, 
    {_id: 4, nome: "Jonas", peso: 75, altura: 160 }, 
    {_id: 5, nome: "Beto", peso: 80, altura: 155 }, 
    {_id: 6, nome: "Gomes", peso: 81, altura: 185 }, 
    {_id: 7, nome: "Silva", peso: 62, altura: 175 }, 
    {_id: 8, nome: "Pedro", peso: 98, altura: 162 }, 
    {_id: 9, nome: "Elen", peso: 77, altura: 164, sexo: 'F'}, 
    ])
    
db.pessoas.insertMany([
    {_id: 10, nome: "Juca", peso: 80, altura: 180 }
    ]);
    
db.pessoas.find({$eq: 80});

db .pessoas.find({$and: [{peso: 80}, {altura:180}]});

db .pessoas.find({peso: 80, altura:180, nome: 'Juca'});

db.pessoas.find({
    $and: [{ peso: 80 },
    { altura: 180 },
    {nome: 'Juca'}]
});

//Buscar todos os documentos onde o pesp seja menor que 65 kilos ou a altura seja maior que 181cm
db.pessoas.find({$or: [{peso: {$lt: 65} },
                       {altura: {$gt: 181}  }]});
                       

//elabore uma query MQL que retorne todos os documentos 
//em que o peso da pessoa esteja entre 75 e 80 kilos 
//ou sua altura seja maior que 184cm

db.pessoas.find({$or: [
                       {altura:{$gt: 184}},
                       {peso:{$gte: 75, $lte: 80}}]});
                       
//o de cima é o msm que: db.pessoas.find({$or: [
                      //                        {altura:{$gt: 184}},
                      //                        {$and: [{peso:{$gte: 75}}, 
                      //                                  {peso: {$lte: 80}}]}
                     //                         ]})
                                                        
                    

db.pessoas.find( 
    {}, 
    {_id: 0, nome: true, altura: true}/*exibição de nome e altura*/).sort({altura: -1}/* mostra a ordem de inserção*/).limit(3)/*os 3 maiores*/

//altura menor que 180
db.pessoas.find( 
    {altura:{$lt: 180}}, 
    {_id: 0, nome: true, altura: true}/*exibição de nome e altura*/).sort({altura: -1}/* mostra a ordem de inserção*/).limit(3)/*os 3 maiores*/
