import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsExampleComponent } from './material-examples/pages/forms-example/forms-example.component';

const routes: Routes = [
    {
        path: '',
        component: FormsExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
