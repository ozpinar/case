import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private addedGameSource = new ReplaySubject<Game>(1)
  addedGame$ = this.addedGameSource.asObservable();

  saveGame(game: Game) {
    this.addedGameSource.next(game);
  }
}
