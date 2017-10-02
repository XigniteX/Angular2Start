import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">My Angular 2 App!</a>
      </div>
    </nav>
  </header>


  <main>
      <div class="row">
        <div class="col-sm-4">
          <div *ngIf="users">
          <ul class="list-group users-list">
            <li class="list-group-item"
               *ngFor="let user of users"
               (click) = "selectUser(user)"
               [class.active]="user === selectedUser">
               {{user.id}} - {{ user.name }} ({{ user.username }})
            </li>
          </ul>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="jumbotron" *ngIf="selectedUser">
              <h2>{{ selectedUser.name }}<small>{{selectedUser.username}}</small></h2>
          </div>
          <div class="jumbotron" *ngIf="!selectedUser">
            <span class="glyphicon glyphicon-hand-left"></span>
              <h2>Choose a User</h2>
          </div>
        </div>
      </div>
    </main>



    <footer class = "text-center">
      @Copyright 2017
    </footer>
  `,
  styles: [`
    .users-list li   {
      cursor: pointer;
    }
    .jumbotron .glyphicon {
      font-size: 80px;
    }
 `]
})

export class AppComponent {
  message = "Hello";
  users = [
    { id:1, name: "Oskar", username: "XigniteX"},
    { id:2, name: "Jolina", username: "Jo"}
  ];
  selectedUser;

  selectUser(user){
    console.log(user);
    this.selectedUser = user;
  }
}
