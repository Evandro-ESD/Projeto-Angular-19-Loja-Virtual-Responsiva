import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { RedesSociasComponent } from './pages/redes-socias/redes-socias.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: 'Loja AngularStore' },
    {path:'produtos', component: ProdutosComponent, title: 'Produtos - Loja AngularStore' },
    {path:'contatos', component: RedesSociasComponent, title: 'Redes Sociais - Loja AngularStore' },
];
