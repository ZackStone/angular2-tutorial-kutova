import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'curtir',
    //styles: [".classe{color:blue}"],
    //styleUrls: ["curtir.styles.css"],
    templateUrl: 'app/curtir.component.html'
    //inputs: ['nCurtidas: curtidas']
    //outputs: ['atualizarCurtidas: atualizar']
})
export class CurtirComponent {
    
    @Input('curtidas')
    nCurtidas: number = 0;

    //atualizarCurtidas: EventEmitter<> = new EventEmitter();

    @Output('atualizar')
    atualizarCurtidas = new EventEmitter();

    jaCurtiu: boolean = false;
    curtir(): void {
        if (this.jaCurtiu) {
            this.nCurtidas--;
        } else {
            this.nCurtidas++;
        }
        this.jaCurtiu = !this.jaCurtiu;
        this.atualizarCurtidas.emit({
            curtidas: this.nCurtidas,
            jaCurtiu: this.jaCurtiu
        });
    }
}