import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsExtrasComponent } from './material-examples/pages/forms-extras/forms-extras.component';

const routes: Routes = [
    {
        path: '',
        component: FormsExtrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
