import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  produtosServices = [
    { id: 1, nome: "produto1", preco: 100 },
    { id: 2, nome: "produto2", preco: 200 },
    { id: 3, nome: "produto3", preco: 300 },
    { id: 4, nome: "produto4", preco: 40 },
    { id: 5, nome: "produto5", preco: 30 },
    { id: 6, nome: "produto6", preco: 600 },
    { id: 7, nome: "produto7", preco: 700 },
    { id: 8, nome: "produto8", preco: 800 },
  ]

  produtos =
    [
      {
        nome: "Beowulf", imagem: "/img/Beowulf.png",
        descricao: 'Beowulf é um poema heroico'
      },

      {
        nome: "Kit Grandes Contos Tolkien", imagem: "/img/Kit Grandes Contos Tolkien.png",
        descricao: 'O Silmarillion, Beren e Lúthien e A Queda de Gondolin...'
      },

      {
        nome: "O Hobbit", imagem: "/img/O hobbit.png",
        descricao: 'A história segue Bilbo Bolseiro'
      },

      { nome: "Soliedade dos Anéis", imagem: "/img/Sociedade do Anel.png", descricao: 'Beowulf é um poema heroico' },

      {
        nome: "Os Filhos de Húrin", imagem: "/img/Os Filhos de Húrin.png",
        descricao: 'Narra a história de Húrin, um guerreiro humano amaldiçoado por Morgoth, e seus filhos, Túrin e Niënor'
      },

      {
        nome: "Silmarillion", imagem: "/img/silmarillion.png",
        descricao: 'O Silmarillion é a história da Guerra dos Elfos Exilados contra o Inimigo, que se passa no Noroeste do mundo (Terra-média)'
      },
    ]
}
