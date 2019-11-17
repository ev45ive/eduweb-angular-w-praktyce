import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';

import { MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatListModule, MatSidenavModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component';
import { ToolbarsExampleComponent } from './pages/toolbars-example/toolbars-example.component';
import { ListsExampleComponent } from './pages/lists-example/lists-example.component';
import { SimpleContactsListComponent } from './components/simple-contacts-list/simple-contacts-list.component';
import { ContactDetailsListComponent } from './components/contact-details-list/contact-details-list.component';
import { ContactsSelectionListComponent } from './components/contacts-selection-list/contacts-selection-list.component';
import { MainNavigationComponent } from './pages/main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ContactsComponent } from './pages/contacts/contacts.component'

@NgModule({
    declarations: [IndicatorsExampleComponent, InteractionsExampleComponent, ToolbarsExampleComponent, ListsExampleComponent, SimpleContactsListComponent, ContactDetailsListComponent, ContactsSelectionListComponent, MainNavigationComponent, ProjectsComponent, TasksComponent, ContactsComponent],
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
        MatDividerModule,
        /* Lists */
        MatListModule,
        LayoutModule,
        MatSidenavModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class MaterialExamplesModule { }
