import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Game } from './models/Game';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private gameService: GameService) { }
  
  destroyAction$ = new Subject(); 

  games: Game[] = [
    {name: 'Game1', bundle: 'bundle1', owner: 'owner1', image: '#'},
    {name: 'Game2', bundle: 'bundle2', owner: 'owner2', image: '#'},
    {name: 'Game3', bundle: 'bundle3', owner: 'owner3', image: '#'}
  ]

  ngOnInit(): void {
    this.gameService.addedGame$.pipe(
      takeUntil(this.destroyAction$)
    ).subscribe(game => {
      this.games.push(game);
    })
  }

  ngOnDestroy(): void {
    this.destroyAction$.next(0);
    this.destroyAction$.complete();
  }
}
