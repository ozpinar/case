import { Component, OnInit } from '@angular/core';
import { Game } from './models/Game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  games: Game[] = [
    {name: 'Game1', bundle: 'bundle1', owner: 'owner1', imageUri: '#'},
    {name: 'Game2', bundle: 'bundle2', owner: 'owner2', imageUri: '#'},
    {name: 'Game3', bundle: 'bundle3', owner: 'owner3', imageUri: '#'}
  ]

  ngOnInit(): void { }

}
