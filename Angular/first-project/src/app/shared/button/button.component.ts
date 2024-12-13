import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  size = 'S'; //Small,meduim,large
  shades = 'NA'; //Light,dark,White,NA
  animation = 'NA';//Circle,Fade,NA
}
