import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, StoreModule} from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';

import { HeaderInterceptor } from './interceptors/header.interceptor';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// guards
import * as fromGuards from './guards';

// page components
import { AppComponent } from './app.component';

export const metaReducers = !environment.production ? [storeFreeze] : [];

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot([], { metaReducers }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    ...fromGuards.guards,
    httpInterceptorProviders
  ],
})
export class AppModule {}
