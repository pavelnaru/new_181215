import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorld2Component } from './helloworld.component';
import { HELLOWORLD_ROUTE } from './helloworld.route';

@NgModule({
    imports: [RouterModule.forChild(HELLOWORLD_ROUTE)],
    declarations: [HelloWorld2Component],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class New181215HelloWorld2Module {}
