import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatTopWearComponent } from './components/categories/cat-top-wear/cat-top-wear.component';
import { RootComponentComponent } from './components/root-component/root-component.component';
import { LoginComponent } from './components/auth-pages/login/login.component';
import { RegisterComponent } from './components/auth-pages/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { ViewitemComponent } from './components/viewitem/viewitem.component';
import { CartComponent } from './components/cart/cart.component';
import { BuyComponent } from './components/buy/buy.component';
const routes: Routes = [
  { path: 'top-wear', component: CatTopWearComponent },
  { path: 'view-item', component: ViewitemComponent },
  { path: '', component: RootComponentComponent },
  { path: 'cart', component: CartComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: '**', component: RootComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
