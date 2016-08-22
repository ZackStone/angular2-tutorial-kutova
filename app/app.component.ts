import { Component } 		from '@angular/core';
import { FORM_DIRECTIVES } 	from '@angular/forms';
import { FilmesComponent } 	from './filmes.component'
import { PainelComponent } 	from './painel.component'
import { CurtirComponent } 	from './curtir.component'

@Component({
	selector: 'my-app',
	'template': `

		<h1>Angular 2</h1>

		<p>Titanic
			<curtir 
				[curtidas]="nCurtidas">
			</curtir> {{nCurtidas}}
		</p>

		<p>Titanic 2
			<curtir 
				[curtidas]="nCurtidas"
				(atualizar)="atualizarCurtidas($event)">
			</curtir> {{nCurtidas}} - {{usuarioJaCurtiu}}
		</p>

		<painel>
			<div class="titulo">Título</div>
			<div class="corpo">Texto do painel (ng-content)</div>
			<div class="corpo">Segundo parágrafo</div>
		</painel>


		<h1>Cinéfilo Digital</h1>
		<filmes></filmes>
		<p>{{titulo}}</p>
		<p>{{2+8}}</p>
		<p>{{this.soma()}}</p>
		<p>{{"" + a + " + " + b + " = " + this.soma()}}</p>
		<p>
			<img src="{{imgUrl}}" [style.width]="largura" />
		<!-- 
			<img [src]="imgUrl" />
			<img bind-src="imgUrl" /> 
		-->
		</p>
		<div 
			id="box"
			[style.width] = "w"
			[style.height] = "h"
			[style.backgroundColor] = "backcolor"
			(mouseenter)="ativa()"
			(mouseleave)="desativa()"
			[class.sobre]="ativado">

			<input type="text" [disabled]="desabilitado" />
			<button [disabled]="desabilitado"> Clique Aqui</button>

		</div>
		<br />
		Nome: <input type="text" 
				[class.invalido]="invalido" 
				[class.valido]="!invalido"
				[placeholder]="placeholder"
				[(ngModel)]="nome" />

		Idade: <input #idade type="text" />

		<p><button (click)="clique($event, idade.value)">Clique aqui</button></p>
		<p>{{n}} cliques</p>

	`,
	directives: [
		FilmesComponent, 
		FORM_DIRECTIVES, 
		PainelComponent,
		CurtirComponent
	]
})
export class AppComponent {

	titulo: string = "Avatar";
	a: number = 1;
	b: number = 2;
	soma(): number {
		return this.a + this.b;
	}
	imgUrl: string = "imagens/avatar.jpg";
	largura: string = "150px";
	w: string = "300px";
	h: string = "50px";
	backcolor: string = "crimson";
	desabilitado: boolean = true;
	invalido: boolean = false;

	n: number = 0;
	clique(ev, idade): void {
		console.log(this.nome);
		console.log(idade);
		console.log(ev);
		this.n++;
	}

	ativado: boolean = false;
	ativa(): void { this.ativado = true; }
	desativa(): void { this.ativado = false; }

	placeholder: string = "Nome";
	nome: string = "Yitzhak Stone";

	nCurtidas: number = 37;
	usuarioJaCurtiu: boolean = false;
	atualizarCurtidas(evento): void {
		this.nCurtidas = evento.curtidas;
		this.usuarioJaCurtiu = evento.jaCurtiu;
		
	}

}