import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, Subject, takeUntil } from 'rxjs';
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
  searchControl = new FormControl();
  filteredGames: Game[];
  games: Game[] = [];

  ngOnInit(): void {
    this.games = this.gameService.getGames();
    this.searchControl.valueChanges
      .pipe(
          takeUntil(this.destroyAction$),
          startWith(''),
          debounceTime(400),
          distinctUntilChanged(),
          map(value => this._filter(value))
      ).subscribe(val => this.filteredGames = val);
  }


  private _filter(value: string): Game[] {
    const filterValue = value.toLowerCase();
    return this.games.filter(game => game.name.toLowerCase().includes(filterValue));
  }

  deleteGame(game: Game) {
    this.games = this.games.filter(x => x.id !== game.id);
    this.filteredGames = this.filteredGames.filter(x => x.id !== game.id);
    this.gameService.deleteGame(game);
  }

  ngOnDestroy(): void {
    this.destroyAction$.next(0);
    this.destroyAction$.complete();
  }
}
