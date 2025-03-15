import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VendedoresComponent } from './views/vendedores/vendedores.component';
import { LoginComponent } from './views/login/login.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { RutasComponent } from './views/rutas/rutas.component';
import { RepartidoresComponent } from './views/repartidores/repartidores.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { ClientsComponent } from './views/clients/clients.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: '/login'},

    {path: 'inicio', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'vendedores', component:VendedoresComponent},
    {path: 'catalogo', component:CatalogComponent},
    {path: 'rutas', component:RutasComponent},
    {path: 'repartidores', component:RepartidoresComponent},
    {path: 'pedidos', component:PedidosComponent},
    {path: 'clientes', component:ClientsComponent},
    {path: 'mapa', component:MapComponent}
];
