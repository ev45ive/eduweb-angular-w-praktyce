import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';

import { } from '@angular/material'

@NgModule({
    declarations: [IndicatorsExampleComponent],
    imports: [
        CommonModule,
        MaterialExamplesRoutingModule,
    ]
})
export class MaterialExamplesModule { }
