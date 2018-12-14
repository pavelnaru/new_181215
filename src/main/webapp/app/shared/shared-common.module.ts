import { NgModule } from '@angular/core';

import { New181215SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [New181215SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [New181215SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class New181215SharedCommonModule {}
