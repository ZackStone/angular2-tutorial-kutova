import { Component } 		from '@angular/core';

@Component({
    selector: 'painel',
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <ng-content select=".titulo"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".corpo"></ng-content>
            </div>
        </div> 
    `
}) 
export class PainelComponent {
    corpo: string = "Corpo do painel";
}
