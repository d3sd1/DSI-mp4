import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ContactsService} from './contacts.service';
import {Contact} from './contact';
import {ContactType} from './contact-type';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'telephone', 'email', 'type', 'common', 'actions'];
  dataSource: MatTableDataSource<Contact>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private contactsService: ContactsService) {
    this.fetchData();
  }

  fetchData(): void {
    this.dataSource = new MatTableDataSource(this.contactsService.getAllContacts());
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterByType(type: string): void {
    this.dataSource = new MatTableDataSource(this.contactsService.getAllContacts().filter(
      (contact: Contact) => {
        return contact.type === parseInt(type, 10);
      }
    ));
  }

  @ViewChild('filterName') filterName: ElementRef;

  filterByName(): void {
    const name = this.filterName.nativeElement.value.toLowerCase();
    if (name === '') {
      this.dataSource = new MatTableDataSource(this.contactsService.getAllContacts());
    } else {
      this.dataSource = new MatTableDataSource(this.contactsService.getAllContacts().filter(
        (contact: Contact) => {
          return contact.name.toLowerCase().includes(name);
        }
      ));
    }
  }

  deleteContact(id: number): void {
    this.contactsService.deleteContactById(id);
    this.fetchData();
  }
}
