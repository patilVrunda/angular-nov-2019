import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Header </h1> 
  <p> test test test </p>`,
  styles: [`p { 
    color:red 
  }`]
})
export class AppComponent {
  title = 'agular-basice';
}
