export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  organisation: string;
}


export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  organisation: string;

  constructor(aData?: IUser) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IUser) {
    this.id = aJson.id || undefined;
    this.name = aJson.name || undefined;
    this.username = aJson.username;
    this.email = aJson.email || undefined;
    this.password = aJson.password;
    this.organisation = aJson.organisation || undefined;
  }

  fromForm(aJson: any) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.username = aJson.username;
    this.email = aJson.email;
    this.password = aJson.password;
    this.organisation = aJson.organisation;
  }
}
