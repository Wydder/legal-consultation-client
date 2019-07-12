import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MembersRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
  ],
})
export class MembersModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faThLarge, faBars);
  }
}
