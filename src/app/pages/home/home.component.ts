import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';



@Component({
  selector: 'app-home',
  imports: [MatToolbar, MatButton,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router, 
              public produtosServise: ProdutosService,
            ) {

    produtosServise.produtosServices

  }

  produtos = [
    {id: 1, nome:"produto1", precop: 100},
    {id: 2, nome:"produto2", precop: 200},
    {id: 3, nome:"produto3", precop: 300},
    {id: 4, nome:"produto4", precop: 40},
    {id: 5, nome:"produto5", precop: 30},
    {id: 6, nome:"produto6", precop: 600},
    {id: 7, nome:"produto7", precop: 700},
    {id: 8, nome:"produto8", precop: 800},
  ]


  aparecendo = true

  ngOnInit(): void {
    console.log(this.produtosServise.produtosServices)
    
    // throw new Error('Method not implemented.');
  }

  mostrarValor(){
    console.log("Clicou")
    console.log(this.produtosServise.produtosServices)
  }


  // funcção para chamar a rota da página produtos
  irParaProdutos() {
    this.router.navigate(['produtos'])
  }




}
