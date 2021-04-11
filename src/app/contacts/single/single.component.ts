import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.contact = this.contactsService.getContactById(parseInt(params.get('id'), 10));
    });
  }

  async saveContact(): Promise<void> {
    this.contactsService.updateContact(this.contact);
    await this.router.navigateByUrl('/contacts');
  }

}
