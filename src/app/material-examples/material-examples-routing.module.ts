import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component';
import { ToolbarsExampleComponent } from './pages/toolbars-example/toolbars-example.component';
import { ListsExampleComponent } from './pages/lists-example/lists-example.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', redirectTo: 'lists', pathMatch: 'full'
            },
            {
                path: 'lists', component: ListsExampleComponent
            }
            // {
            //     path:'toolbars', component: ToolbarsExampleComponent
            // }
            // {
            //     path: 'interactions', component: InteractionsExampleComponent
            // },
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
