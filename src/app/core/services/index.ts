import { AuthenticationService } from './authentication.service';
import { MembersService } from './members.service';

export const services: any[] = [
  AuthenticationService,
  MembersService,
];

export * from './authentication.service';
export * from './members.service';
