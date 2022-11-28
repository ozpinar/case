import { Injectable } from '@angular/core';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  saveGame(game: Game) {
    const games = JSON.parse(localStorage.getItem('games')!) || [];
    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
  }

  deleteGame(game: Game){
    let games: Game[] = JSON.parse(localStorage.getItem('games')!) || [];
    games = games.filter(x => x.id !== game.id);
    localStorage.setItem('games', JSON.stringify(games));
  }

  getGames() {
    return JSON.parse(localStorage.getItem('games')!);
  }
}
