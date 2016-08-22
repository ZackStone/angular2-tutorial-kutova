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
var CurtirComponent = (function () {
    function CurtirComponent() {
        this.nCurtidas = 0;
        //atualizarCurtidas: EventEmitter<> = new EventEmitter();
        this.atualizarCurtidas = new core_1.EventEmitter();
        this.jaCurtiu = false;
    }
    CurtirComponent.prototype.curtir = function () {
        if (this.jaCurtiu) {
            this.nCurtidas--;
        }
        else {
            this.nCurtidas++;
        }
        this.jaCurtiu = !this.jaCurtiu;
        this.atualizarCurtidas.emit({
            curtidas: this.nCurtidas,
            jaCurtiu: this.jaCurtiu
        });
    };
    __decorate([
        core_1.Input('curtidas'), 
        __metadata('design:type', Number)
    ], CurtirComponent.prototype, "nCurtidas", void 0);
    __decorate([
        core_1.Output('atualizar'), 
        __metadata('design:type', Object)
    ], CurtirComponent.prototype, "atualizarCurtidas", void 0);
    CurtirComponent = __decorate([
        core_1.Component({
            selector: 'curtir',
            //styles: [".classe{color:blue}"],
            //styleUrls: ["curtir.styles.css"],
            templateUrl: 'app/curtir.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CurtirComponent);
    return CurtirComponent;
}());
exports.CurtirComponent = CurtirComponent;
//# sourceMappingURL=curtir.component.js.map