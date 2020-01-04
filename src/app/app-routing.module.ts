
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {    path: 'menu',
        loadChildren: './pages/menu/menu.module#MenuPageModule'
    },
    {
        path: 'details',
        loadChildren: './pages/details/details.module#DetailsPageModule'
    },
    {
        path: 'create-product',
        loadChildren: './pages/create-product/create-product.module#CreateProductPageModule'
    },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
