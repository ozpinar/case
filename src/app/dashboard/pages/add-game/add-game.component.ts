import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(private fb: FormBuilder, private gameService: GameService, private router: Router) { }

  addGameForm: FormGroup;

  ngOnInit(): void { 
    this.initializeForm();
  }

  initializeForm() {
    this.addGameForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      bundle: ['', [Validators.required, Validators.pattern(/^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/)]],
      owner: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required]
    })
  }

  onImageSelected(event: any) {
    const files = event.target.files;
    const reader = new FileReader();

    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.addGameForm.patchValue({
        image: reader.result
      })
    }
  }

  saveGame() {
    this.addGameForm.patchValue({
      id: Math.floor((Math.random() * 1000))
    })
    this.gameService.saveGame(this.addGameForm.value);
    this.router.navigateByUrl('/');
  }
}
