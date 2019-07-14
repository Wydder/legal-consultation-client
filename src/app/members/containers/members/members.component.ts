import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from '@app/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit, AfterViewInit {

  reverse: boolean;
  order: string;
  noOfColumns: number;
  users: any[];

  constructor() {
    this.order = 'info.name';
    this.reverse = false;
    this.noOfColumns = 2;
    this.users = this.getUsers();
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  onBlockView(blockView) {
    this.noOfColumns = blockView;
  }

  onListView(listView) {
    this.noOfColumns = listView;
  }

  viewUserProfile(id) {
    console.log(id);
  }

  getUsers() {
    return [
      {
        id: 1,
        email: 'basd@asdg.com',
        name: 'beasdbe',
        organisation: 'chasdech',
      },
      {
        id: 2,
        email: 'adb@dag.com',
        name: 'bedaadbe',
        organisation: 'chsech',
      },
      {
        id: 3,
        email: 'bfs@fsg.com',
        name: 'bedasbe',
        organisation: 'chech',
      },
      {
        id: 4,
        email: 'bsf@sfg.com',
        name: 'beasdbe',
        organisation: 'chech',
      },
      {
        id: 5,
        email: 'bsdf@gsdf.com',
        name: 'bebsdfe',
        organisation: 'csdfhech',
      },
    ];
  }
}
