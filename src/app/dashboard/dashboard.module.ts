import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { GameComponent } from './components/game/game.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddGameComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
