"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = "Hello";
        this.users = [
            { id: 1, name: "Oskar", username: "XigniteX" },
            { id: 2, name: "Jolina", username: "Jo" }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header>\n\n    </header>\n    <div class=\"jumbotron\">\n      <h1>Welcome to our App</h1>\n      {{ message }}\n    </div>\n\n\n    <div *ngIf=\"users\">\n      <div *ngFor=\"let user of users\">\n        {{ user.name }} ( {{user.username}} )\n      </div>\n    </div>\n\n    <footer class = \"text-center\">\n      @Copyright 2017\n    </footer>\n  ",
            styles: ["\n   .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map