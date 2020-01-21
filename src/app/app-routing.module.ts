import { JuryDetailsComponent } from './jury/jury-details/jury-details.component';
import { CreateJuryComponent } from './jury/create-jury/create-jury.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuryListComponent } from './jury/jury-list/jury-list.component';
import { UpdateJuryComponent } from './jury/update-jury/update-jury.component';

const routes: Routes = [
  { path: '', redirectTo: 'jury', pathMatch: 'full' },
  { path: 'jurys', component: JuryListComponent },
  { path: 'add', component: CreateJuryComponent },
  { path: 'update/:id_jury', component: UpdateJuryComponent },
  { path: 'details/:id_jury', component: JuryDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
