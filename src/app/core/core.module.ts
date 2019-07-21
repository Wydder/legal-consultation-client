import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromServices from './services';
import * as fromHttpServices from './http';

import { 
  effects, 
  reducers 
} from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    ...fromServices.services,
    ...fromHttpServices.httpServices,
  ],
})
export class CoreModule {}
