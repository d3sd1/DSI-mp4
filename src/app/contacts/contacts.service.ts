import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {ContactType} from './contact-type';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // THIS SHOULD BE FETCHED FROM REST!!
  contacts: Contact[] = [
    new Contact(1, 'Ricardo Martín Manso', '609117799', 'ricardma@inf.uc3m.es', ContactType.WORK, true),
    new Contact(2, 'Manolo del del Bombo', '609117799', 'ricardma@inf.uc3m.es', ContactType.PERSONAL, false),
    new Contact(3, 'María López', '609117799', 'ricardma@inf.uc3m.es', ContactType.WORK, true),
    new Contact(4, 'Clara de Juan Pastor', '609117799', 'ricardma@inf.uc3m.es', ContactType.PERSONAL, false)
  ];

  constructor() {
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact {
    return this.contacts.find((contact: Contact) => {
      return contact.id === id;
    });
  }

  deleteContactById(id: number): void {
    this.contacts = this.contacts.filter((contact: Contact) => contact.id !== id);
  }

  updateContact(contact: Contact): void {
    const foundContactIdx = this.contacts.findIndex((dbContact: Contact) => {
      return dbContact.id === contact.id;
    });
    this.contacts[foundContactIdx] = contact;
  }

}
