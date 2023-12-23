import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { SwiperComponentComponent } from './swiper-component/swiper-component.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'catalogo-productos', component: CatalogoProductosComponent }, // Ruta para el catálogo de productos
  { path: 'productos', component:  ProductosComponent }, 
  { path: 'swiper-component', component:  SwiperComponentComponent }, 
  { path: 'login', component:  LoginComponent}, 

  // ... otras rutas si las tienes
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogoProductosComponent,
    ProductosComponent,
    SwiperComponentComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
