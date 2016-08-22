"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var filmes_service_1 = require('./filmes.service');
var curtir_component_1 = require('./curtir.component');
var FilmesComponent = (function () {
    function FilmesComponent(filmesService) {
        this.titulo = 'Lista de filmes';
        this.filmes = filmesService.getFilmes();
    }
    FilmesComponent = __decorate([
        core_1.Component({
            selector: 'filmes',
            template: "\n        <h2>{{titulo}}</h2>\n        <ul>\n            <li *ngFor=\"let filme of filmes\">\n                <curtir></curtir> {{filme}}\n            </li>\n        </ul>\n    ",
            providers: [filmes_service_1.FilmesService],
            directives: [curtir_component_1.CurtirComponent]
        }), 
        __metadata('design:paramtypes', [filmes_service_1.FilmesService])
    ], FilmesComponent);
    return FilmesComponent;
}());
exports.FilmesComponent = FilmesComponent;
//# sourceMappingURL=filmes.component.js.map