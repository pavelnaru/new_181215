import { Routes } from '@angular/router';

import { HomeComponent } from './';
import { HelloWorldComponent } from './hello-world.component';

export const HOME_ROUTE: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            authorities: [],
            pageTitle: 'Welcome, Java Hipster!'
        }
    },
    {
        path: 'helloWorld/:from',
        component: HelloWorldComponent
    },
    {
        path: 'helloWorld',
        component: HelloWorldComponent
    }
];
