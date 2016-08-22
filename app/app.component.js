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
var forms_1 = require('@angular/forms');
var filmes_component_1 = require('./filmes.component');
var painel_component_1 = require('./painel.component');
var curtir_component_1 = require('./curtir.component');
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "Avatar";
        this.a = 1;
        this.b = 2;
        this.imgUrl = "imagens/avatar.jpg";
        this.largura = "150px";
        this.w = "300px";
        this.h = "50px";
        this.backcolor = "crimson";
        this.desabilitado = true;
        this.invalido = false;
        this.n = 0;
        this.ativado = false;
        this.placeholder = "Nome";
        this.nome = "Yitzhak Stone";
        this.nCurtidas = 37;
        this.usuarioJaCurtiu = false;
    }
    AppComponent.prototype.soma = function () {
        return this.a + this.b;
    };
    AppComponent.prototype.clique = function (ev, idade) {
        console.log(this.nome);
        console.log(idade);
        console.log(ev);
        this.n++;
    };
    AppComponent.prototype.ativa = function () { this.ativado = true; };
    AppComponent.prototype.desativa = function () { this.ativado = false; };
    AppComponent.prototype.atualizarCurtidas = function (evento) {
        this.nCurtidas = evento.curtidas;
        this.usuarioJaCurtiu = evento.jaCurtiu;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            'template': "\n\n\t\t<h1>Angular 2</h1>\n\n\t\t<p>Titanic\n\t\t\t<curtir \n\t\t\t\t[curtidas]=\"nCurtidas\">\n\t\t\t</curtir> {{nCurtidas}}\n\t\t</p>\n\n\t\t<p>Titanic 2\n\t\t\t<curtir \n\t\t\t\t[curtidas]=\"nCurtidas\"\n\t\t\t\t(atualizar)=\"atualizarCurtidas($event)\">\n\t\t\t</curtir> {{nCurtidas}} - {{usuarioJaCurtiu}}\n\t\t</p>\n\n\t\t<painel>\n\t\t\t<div class=\"titulo\">T\u00EDtulo</div>\n\t\t\t<div class=\"corpo\">Texto do painel (ng-content)</div>\n\t\t\t<div class=\"corpo\">Segundo par\u00E1grafo</div>\n\t\t</painel>\n\n\n\t\t<h1>Cin\u00E9filo Digital</h1>\n\t\t<filmes></filmes>\n\t\t<p>{{titulo}}</p>\n\t\t<p>{{2+8}}</p>\n\t\t<p>{{this.soma()}}</p>\n\t\t<p>{{\"\" + a + \" + \" + b + \" = \" + this.soma()}}</p>\n\t\t<p>\n\t\t\t<img src=\"{{imgUrl}}\" [style.width]=\"largura\" />\n\t\t<!-- \n\t\t\t<img [src]=\"imgUrl\" />\n\t\t\t<img bind-src=\"imgUrl\" /> \n\t\t-->\n\t\t</p>\n\t\t<div \n\t\t\tid=\"box\"\n\t\t\t[style.width] = \"w\"\n\t\t\t[style.height] = \"h\"\n\t\t\t[style.backgroundColor] = \"backcolor\"\n\t\t\t(mouseenter)=\"ativa()\"\n\t\t\t(mouseleave)=\"desativa()\"\n\t\t\t[class.sobre]=\"ativado\">\n\n\t\t\t<input type=\"text\" [disabled]=\"desabilitado\" />\n\t\t\t<button [disabled]=\"desabilitado\"> Clique Aqui</button>\n\n\t\t</div>\n\t\t<br />\n\t\tNome: <input type=\"text\" \n\t\t\t\t[class.invalido]=\"invalido\" \n\t\t\t\t[class.valido]=\"!invalido\"\n\t\t\t\t[placeholder]=\"placeholder\"\n\t\t\t\t[(ngModel)]=\"nome\" />\n\n\t\tIdade: <input #idade type=\"text\" />\n\n\t\t<p><button (click)=\"clique($event, idade.value)\">Clique aqui</button></p>\n\t\t<p>{{n}} cliques</p>\n\n\t",
            directives: [
                filmes_component_1.FilmesComponent,
                forms_1.FORM_DIRECTIVES,
                painel_component_1.PainelComponent,
                curtir_component_1.CurtirComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map