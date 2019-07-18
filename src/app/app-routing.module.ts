import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
const routes: Routes = [
  { path: 'cliente/:Id', component: DetailsComponent},
  { path: '', component: ListarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
