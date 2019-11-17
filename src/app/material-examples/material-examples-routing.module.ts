import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component';
import { ToolbarsExampleComponent } from './pages/toolbars-example/toolbars-example.component';
import { ListsExampleComponent } from './pages/lists-example/lists-example.component';
import { MainNavigationComponent } from './pages/main-navigation/main-navigation.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
    {
        path: '',
        component: MainNavigationComponent,
        children: [
            { path: 'contacts', component: ContactsComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'tasks', component: TasksComponent },
        ]
    },
    {
        path: 'examples',
        children: [
            {
                path: '', redirectTo: 'lists', pathMatch: 'full'
            },
            {
                path: 'lists', component: ListsExampleComponent
            },
            {
                path: 'toolbars', component: ToolbarsExampleComponent
            },
            {
                path: 'interactions', component: InteractionsExampleComponent
            },
            {
                path: 'indicators', component: IndicatorsExampleComponent
            }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
