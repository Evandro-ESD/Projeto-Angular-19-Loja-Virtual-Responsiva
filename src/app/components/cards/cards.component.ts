import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Cards2 } from './cards';
import { ClassificacaoPresosComponent } from './teste';
import { Data } from '@angular/router';


@Component({
  selector: 'app-cards',
  imports: [MatCardModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  c:Cards2[] = []

  cards =
    [
      { nome: "Beowulf", imagem: "/img/Beowulf.png", 
        descricao: 'Beowulf é um poema heroico' },
      
      { nome: "Kit Grandes Contos Tolkien", imagem: "/img/Kit Grandes Contos Tolkien.png", 
        descricao: 'O Silmarillion, Beren e Lúthien e A Queda de Gondolin...' },
      
      { nome: "O Hobbit", imagem: "/img/O hobbit.png", 
        descricao: 'A história segue Bilbo Bolseiro' },
      
      { nome: "Soliedade dos Anéis", imagem: "/img/Sociedade do Anel.png", descricao: 'Beowulf é um poema heroico' },
      
      { nome: "Os Filhos de Húrin", imagem: "/img/Os Filhos de Húrin.png", 
        descricao: 'Narra a história de Húrin, um guerreiro humano amaldiçoado por Morgoth, e seus filhos, Túrin e Niënor' },
      
      { nome: "Silmarillion", imagem: "/img/silmarillion.png", 
        descricao: 'O Silmarillion é a história da Guerra dos Elfos Exilados contra o Inimigo, que se passa no Noroeste do mundo (Terra-média)' },
    ]
}
