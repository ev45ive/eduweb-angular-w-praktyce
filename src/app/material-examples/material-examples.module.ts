import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';

import { MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component'

@NgModule({
    declarations: [IndicatorsExampleComponent, InteractionsExampleComponent],
    imports: [
        CommonModule,
        MaterialExamplesRoutingModule,
        MatIconModule,
        MatBadgeModule,
        MatTooltipModule,
        /* Interactions */
        MatButtonModule,
        MatToolbarModule
    ]
})
export class MaterialExamplesModule { }
