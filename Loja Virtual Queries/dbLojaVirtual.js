db.fabricantes.insertMany([
    { 
        _id: 1, 
        nome: "Samsung", 
        cnpj: "12345678901234", 
        endereco: { logradouro: "Av. dos Industriais", numero: "123", cep: "01234-567", estado: "SP" }, 
        emails: ["contato@samsung.com"], 
        telefones: [{ ddd: "11", numero: "987654321"}]
    },
    { 
        _id: 2, 
        nome: "Dell", 
        cnpj: "98765432109876", 
        endereco: { logradouro: "Rua do Comércio", numero: "456", cep: "09876-543", estado: "RJ" }, 
        emails: ["contato@dell.com"], 
        telefones: [{ ddd: "21", numero: "123456789" }]
    },    
    { 
        _id: 3, 
        nome: "LG", 
        cnpj: "11111111111111", 
        endereco: { logradouro: "Rua da TV", numero: "789", cep: "11111-111", estado: "SP" }, 
        emails: ["contato@lg.com"], 
        telefones: [{ ddd: "11", numero: "987654321", ramal: "45" }]
    },
    { 
        _id: 4, 
        nome: "Sony", 
        cnpj: "22222222222222", 
        endereco: { logradouro: "Rua dos Games", numero: "1010", cep: "22222-222", estado: "RJ" }, 
        emails: ["contato@sony.com"], 
        telefones: [{ ddd: "21", numero: "123456789" }]
    },    
    { 
        _id: 5, 
        nome: "Apple", 
        cnpj: "33333333333333", 
        endereco: { logradouro: "Rua da Maçã", numero: "123", cep: "33333-333", estado: "CA" }, 
        emails: ["contato@apple.com"], 
        telefones: [{ ddd: "55", numero: "1122334455", ramal: "123" }]
    },
    { 
        _id: 6, 
        nome: "Lenovo", 
        cnpj: "44444444444444", 
        endereco: { logradouro: "Avenida dos Computadores", numero: "456", cep: "44444-444", estado: "NC" }, 
        emails: ["contato@lenovo.com"], 
        telefones: [{ ddd: "44", numero: "5566778899"}]
    },
]);

db.categorias.insertMany([
  { 
    _id: 1, 
    nome: "Smartphones", 
    descricao: "Celulares Inteligentes", 
    url_foto: "http://blablabla.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 1, 
    produtos: [
      { _idProduto: 1, nome: "Smartphone Samsung Galaxy S24", preco: 5299.99, situacao: true },
      { _idProduto: 2, nome: "Smartphone iPhone 12", preco: 7999.00, situacao: true }
    ]
  },
  { 
    _id: 2, 
    nome: "Notebooks", 
    descricao: "Computadores Portáteis", 
    url_foto: "http://etcetcetc.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 2, 
    produtos: [ {_idProduto: 2, nome: "Notebook Dell Inspiron 15", preco: 7299.90, situacao: true} ]
  },    
  { 
    _id: 3, 
    nome: "Eletrônicos", 
    descricao: "Produtos Eletrônicos", 
    url_foto: "http://testeteste.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 3, 
    produtos: [
      { _idProduto: 3, nome: "Smart TV LG 55 Polegadas", preco: 3799.99, situacao: true },
      { _idProduto: 7, nome: "Fone de Ouvido Sony WH-1000XM4", preco: 1499.99, situacao: true},
      { _idProduto: 8, nome: "Câmera EOSXX Rebel T7i", preco: 3999.90, situacao: true},
      { _idProduto: 14, nome: "Smart Speaker", preco: 349.99, situacao: true}
    ]
  },
  { 
    _id: 4, 
    nome: "Games", 
    descricao: "Consoles e Jogos", 
    url_foto: "http://gamesgames.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 4, 
    produtos: [
      { _idProduto: 4, nome: "PlayStation 5", preco: 4999.90, situacao: true }
    ]
  },    
  { 
    _id: 5, 
    nome: "Wearables", 
    descricao: "Dispositivos Vestíveis", 
    url_foto: "http://urlwearables.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 5, 
    produtos: [
      { _idProduto: 5, nome: "Smartwatch Apple Watch Series 6", preco: 2499.99, situacao: true }
    ]
  },
  { 
    _id: 6, 
    nome: "Tablets", 
    descricao: "Tablets Eletrônicos", 
    url_foto: "http://tabletstablets.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 6, 
    produtos: [
      { _idProduto: 6, nome: "Tablet Samsung Galaxy Tab S7", preco: 3499.90, situacao: true }
    ]
  },
  { 
    _id: 7, 
    nome: "Informática", 
    descricao: "Informática", 
    url_foto: "http://infinfinfinf.com/foto.jpg", 
    situacao: true, 
    ordem_exibicao: 7, 
    produtos: [
      { _idProduto: 9, nome: "Teclado Mecânico K95 RGB Platinum", preco: 899.99, situacao: true},
      { _idProduto: 10, nome: "Monitor LG UltraWide 34WL500-B", preco: 1999.90, situacao: true},
      { _idProduto: 11, nome: "Impressora L9999", preco: 1099.00, situacao: true},
      { _idProduto: 12, nome: "Mouse Logitech G502 Hero", preco: 299.99, situacao: true},
      { _idProduto: 13, nome: "Roteador TP-Link Archer C6", preco: 199.90, situacao: true},
      { _idProduto: 15, nome: "Webcam LG C920", preco: 499.90, situacao: true}
    ]
  }  
]);


db.produtos.insertMany([
  { 
    _id: 1, 
    nome: "Smartphone Samsung Galaxy S24", 
    preco: 5299.99, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 1, nome: "Samsung" }, 
    categoria: { _idCategoria: 1, nome: "Smartphones" }
  },
  { 
    _id: 2, 
    nome: "Notebook Dell Inspiron 15", 
    preco: 7299.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 2, nome: "Dell" }, 
    categoria: { _idCategoria: 2, nome: "Notebooks" }
  },
  { 
    _id: 3, 
    nome: "Smart TV LG 55 Polegadas", 
    preco: 3799.99, 
    situacao: true, 
    destaque: false, 
    fabricante: { _idFabricante: 3, nome: "LG" }, 
    categoria: { _idCategoria: 3, nome: "Eletrônicos" }
  },
  { 
    _id: 4, 
    nome: "PlayStation 5", 
    preco: 4999.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 4, nome: "Sony" }, 
    categoria: { _idCategoria: 4, nome: "Games" }
  },
    { 
    _id: 5, 
    nome: "Smartwatch Apple Watch Series 6", 
    preco: 2499.99, 
    situacao: true, 
    destaque: false, 
    fabricante: { _idFabricante: 5, nome: "Apple" }, 
    categoria: { _idCategoria: 5, nome: "Wearables" }
  },
  { 
    _id: 6, 
    nome: "Tablet Samsung Galaxy Tab S7", 
    preco: 3499.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 1, nome: "Samsung" }, 
    categoria: { _idCategoria: 6, nome: "Tablets" }
  },
  { 
    _id: 7, 
    nome: "Fone de Ouvido Sony WH-1000XM4", 
    preco: 1499.99, 
    situacao: true, 
    destaque: false, 
    fabricante: { _idFabricante: 4, nome: "Sony" }, 
    categoria: { _idCategoria: 3, nome: "Eletrônicos" }
  },
  { 
    _id: 8, 
    nome: "Câmera EOSXX Rebel T7i", 
    preco: 3999.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 4, nome: "Sony" }, 
    categoria: { _idCategoria: 3, nome: "Eletrônicos" }
  },
  { 
    _id: 9, 
    nome: "Teclado Mecânico K95 RGB Platinum", 
    preco: 899.99, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 2, nome: "Dell" }, 
    categoria: { _idCategoria: 7, nome: "Informática" }
  },
  { 
    _id: 10, 
    nome: "Monitor LG UltraWide 34WL500-B", 
    preco: 1999.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 3, nome: "LG" }, 
    categoria: { _idCategoria: 7, nome: "Informática"  }
  },
  { 
    _id: 11, 
    nome: "Impressora L9999", 
    preco: 1099.00, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 1, nome: "Samsung" }, 
    categoria: { _idCategoria: 7, nome: "Informática" }
  }, 
  { 
    _id: 12, 
    nome: "Mouse Logitech G502 Hero", 
    preco: 299.99, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 5, nome: "Apple" }, 
    categoria: { _idCategoria: 7, nome: "Informática" }
  },
  { 
    _id: 13, 
    nome: "Roteador TP-Link Archer C6", 
    preco: 199.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 2, nome: "Dell" }, 
    categoria: { _idCategoria: 7, nome: "Informática"  }
  },
  { 
    _id: 14, 
    nome: "Smart Speaker", 
    preco: 349.99, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 6, nome: "Lenovo" }, 
    categoria: { _idCategoria: 3, nome: "Eletrônicos" }
  },
  { 
    _id: 15, 
    nome: "Webcam LG C920", 
    preco: 499.90, 
    situacao: true, 
    destaque: true, 
    fabricante: { _idFabricante: 3, nome: "LG" }, 
    categoria: { _idCategoria: 7, nome: "Informática"   }
  }
]);