
import { AuthenticationApiService } from './authentication-api.service';
import { MembersApiService } from './members-api.service';

export const httpServices: any[] = [
  AuthenticationApiService,
  MembersApiService
];

export * from './authentication-api.service';
export * from './members-api.service';
