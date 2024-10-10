import { Routes } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { loginGardGuard } from './login-gard.guard';
import { navGardGuard } from './nav-gard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginGardGuard],
  },
  { path: 'login', component: LogInComponent, canActivate: [loginGardGuard] },
  { path: 'forgetPassword', component: ForgetPasswordComponent },

  { path: 'home', component: HomeComponent, canActivate: [navGardGuard] },
  { path: 'cart', component: CartComponent, canActivate: [navGardGuard] },
  {
    path: 'brands',
    canActivate: [navGardGuard],
    children: [
      { path: 'details/:id', loadComponent:()=>import('./brands/brands.component').then((b)=>b.BrandsComponent) },
      { path: '', component: BrandsComponent },
    ],
  },
  {
    path: 'categories',
    loadComponent:()=>import('./categories/categories.component').then((c)=>c.CategoriesComponent),
    canActivate: [navGardGuard],
  },
  { path: 'product', loadComponent:()=> import('./product/product.component').then((p)=>p.ProductComponent), canActivate: [navGardGuard] },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    canActivate: [navGardGuard],
  },
  { path: 'order/:id', component: OrderComponent, canActivate: [navGardGuard] },
  {
    path: 'allorders',
    component: AllOrdersComponent,
    canActivate: [navGardGuard],
  },

  { path: '**', component: NotFoundComponent },
];
