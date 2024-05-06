import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'app-tp';
  message:string='bonjour, monde!';
  constructor(){}

  ngOnInit(): void {
    
      
  }
  changerMessage(): void {
    this.message = 'Nouveau message!';
    }
    
}
