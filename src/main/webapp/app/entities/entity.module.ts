import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { New181215PlayerModule } from './player/player.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        New181215PlayerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class New181215EntityModule {}
