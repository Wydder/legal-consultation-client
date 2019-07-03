import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

// // services
// import * as fromServices from './services';
//
// // guards
// import * as fromGuards from './guards';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
    // ...fromServices.services,
    // ...fromGuards.guards,
  ],
})
export class AuthenticationModule {}
