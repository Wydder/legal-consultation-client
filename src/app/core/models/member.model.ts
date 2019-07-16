export interface IMember {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  district: string;
  organisation: string;
}


export class Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  district: string;
  organisation: string;

  constructor(aData?: IMember) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IMember) {
    this.id = aJson.id || undefined;
    this.firstName = aJson.firstName;
    this.lastName = aJson.lastName;
    this.email = aJson.email;
    this.phoneNumber = aJson.phoneNumber;
    this.district = aJson.district;
    this.organisation = aJson.organisation;
  }

  fromForm(aJson: any) {
    this.id = aJson.id;
    this.firstName = aJson.firstName;
    this.lastName = aJson.lastName;
    this.email = aJson.email;
    this.phoneNumber = aJson.phoneNumber;
    this.district = aJson.district;
    this.organisation = aJson.organisation;
  }
}
