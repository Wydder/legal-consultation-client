import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThLarge,
  faBars,
  faCircle,
  faSortDown,
  faSortUp,
  faEnvelope,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    MembersRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components
  ],
  providers: [
  ],
})
export class MembersModule {
  constructor() {
    library.add(
      faThLarge,
      faBars,
      faCircle,
      faSortDown,
      faSortUp,
      faEnvelope,
      faMobileAlt
    );
  }
}
