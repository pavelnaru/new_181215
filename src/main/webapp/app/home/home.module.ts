import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { New181215SharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
    imports: [New181215SharedModule, RouterModule.forChild(HOME_ROUTE)],
    declarations: [HomeComponent, HelloWorldComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class New181215HomeModule {}
