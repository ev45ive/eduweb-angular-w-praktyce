import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';

import { MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatDividerModule } from '@angular/material';
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component';
import { ToolbarsExampleComponent } from './pages/toolbars-example/toolbars-example.component'

@NgModule({
    declarations: [IndicatorsExampleComponent, InteractionsExampleComponent, ToolbarsExampleComponent],
    imports: [
        CommonModule,
        MaterialExamplesRoutingModule,
        /* Indicators */
        MatIconModule,
        MatBadgeModule,
        MatTooltipModule,
        /* Interactions */
        MatButtonModule,
        /* Toolbars */
        MatToolbarModule,
        /* Menu */
        MatMenuModule,
        MatDividerModule
    ]
})
export class MaterialExamplesModule { }
