import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', redirectTo: 'interactions', pathMatch: 'full'
            },
            {
                path: 'interactions', component: InteractionsExampleComponent
            },
            // {
            //     path: 'indicators', component: IndicatorsExampleComponent
            // }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
