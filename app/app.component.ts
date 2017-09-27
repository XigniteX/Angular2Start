import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>

    </header>
    <div class="jumbotron">
      <h1>Welcome to our App</h1>
    </div>

    <footer class = "text-center">
      @Copyright 2017
    </footer>
  `,
  styles: [`
   .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
 `]
})

export class AppComponent { }
