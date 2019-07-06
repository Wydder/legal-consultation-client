export interface ILogin {
  username: string;
  password: string;
}

export class Login {
  username: string;
  password: string;

  constructor(aData?: ILogin) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: ILogin) {
    this.username = aJson.username;
    this.password = aJson.password;
  }

  fromForm(aJson: any) {
    this.username = aJson.username;
    this.password = aJson.password;
  }
}

