import {Component} from '@angular/core';
import {FilmesService} from './filmes.service';
import { CurtirComponent } 	from './curtir.component'

@Component({
    selector: 'filmes',
    template: `
        <h2>{{titulo}}</h2>
        <ul>
            <li *ngFor="let filme of filmes">
                <curtir></curtir> {{filme}}
            </li>
        </ul>
    `,
    providers: [FilmesService],
    directives: [CurtirComponent]
})
export class FilmesComponent {
    titulo: string = 'Lista de filmes';
    filmes: string[];

    constructor(filmesService: FilmesService) {
        this.filmes = filmesService.getFilmes();
    }

    /*
    titulo: string = 'Lista de filmes';
    */

    /*
    titulo: string;
    constructor() {
        this.titulo = 'Lista de filmes'; 
    }
    */

    /*
    n: number;
    s: string;
    b: boolean;
    vs: string[];
    vn: number[] = [1,2,3];
    vn2: Array<number> = [1,2,3];
    tupla: [string, number] = ['Olá', 8];
    
    testeEnum(): void {
        enum Cores { Vermelho=1, Verde, Azul=5 };
        let c: Cores = Cores.Verde;
        
        let n: any;
        n = 4;
        n = 'quatro';
        n = false;

        let l: number; 
        l = (n as string).length;
        l = (<string>n).length;

    }

    */
}