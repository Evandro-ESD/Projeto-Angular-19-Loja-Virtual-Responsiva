import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  produtosServices = [
    {id: 1, nome:"produto1", preco: 100},
    {id: 2, nome:"produto2", preco: 200},
    {id: 3, nome:"produto3", preco: 300},
    {id: 4, nome:"produto4", preco: 40},
    {id: 5, nome:"produto5", preco: 30},
    {id: 6, nome:"produto6", preco: 600},
    {id: 7, nome:"produto7", preco: 700},
    {id: 8, nome:"produto8", preco: 800},
  ]


}
