import {ContactType} from './contact-type';

export class Contact {
  id: number;
  name: string;
  telephone: string;
  email: string;
  type: ContactType;
  common: boolean;

  constructor(id: number, name: string, telephone: string, email: string, type: ContactType, common: boolean) {
    this.id = id;
    this.name = name;
    this.telephone = telephone;
    this.email = email;
    this.type = type;
    this.common = common;
  }
}
