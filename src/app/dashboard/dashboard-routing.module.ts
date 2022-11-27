import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddGameComponent } from './pages/add-game/add-game.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-game', component: AddGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
