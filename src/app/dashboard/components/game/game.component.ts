import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  @Input() game: Game;
  @Output() gameDeleted: EventEmitter<Game> = new EventEmitter<Game>();

  ngOnInit(): void { }


  deleteGame() {
    this.gameDeleted.emit(this.game);
  }
}
