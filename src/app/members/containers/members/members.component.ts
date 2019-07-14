import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderPipe } from 'ngx-order-pipe';

import { User } from '@app/core';

export enum OrderBy {
  Name = 'name',
  Email = 'email',
  FirstName = 'firstName',
  Organisation = 'organisation',
  Specialisation = 'specialisation',
  County = 'county',
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit, AfterViewInit {

  reverse: boolean;
  order: string;
  viewMode: string;
  members: any[];
  sortedMembers: any[];

  constructor(
    private router: Router,
    private orderPipe: OrderPipe
  ) {
    this.order = OrderBy.Name.toString();
    this.reverse = false;
    this.members = this.getUsers();
  }

  ngOnInit() {
    const theMembers = this.members;
    const theOrder = this.order;

    this.sortedMembers = this.orderPipe.transform(theMembers, theOrder);
  }

  ngAfterViewInit() {}

  setOrder(orderBy: string) {

    const theOrderBy = this.order;
    if (theOrderBy === orderBy) {
      this.reverse = !this.reverse;
    }

    this.order = orderBy;
  }

  onBlockView(blockView) {
    this.viewMode = blockView;
  }

  onListView(listView) {
    this.viewMode = listView;
  }

  viewMemberProfile(member: any) {
    this.router.navigate(['/members/member-profile', member.id]);
  }

  get orderBy() {
    return OrderBy;
  }

  getUsers() {
    return [
      {
        id: 1,
        email: 'sbasd@asdg.com',
        name: 'beasdbe',
        telephone: '0739171656',
        organisation: 'schasdech',
      },
      {
        id: 2,
        email: 'adb@dag.com',
        name: 'abedaadbe',
        telephone: '0759171656',
        organisation: 'bchsech',
      },
      {
        id: 3,
        email: 'gbfs@fsg.com',
        name: 'hbedasbe',
        telephone: '0769171656',
        organisation: 'vchech',
      },
      {
        id: 4,
        email: 'ybsf@sfg.com',
        name: 'jbeasdbe',
        telephone: '0779171656',
        organisation: 'trchech',
      },
      {
        id: 5,
        email: 'wbsdf@gsdf.com',
        name: 'sebebsdfe',
        telephone: '0739171656',
        organisation: 'acsdfhech',
      },
      {
        id: 6,
        email: 'wbsdf@gsdf.com',
        name: 'jsebebsdfe',
        telephone: '0729171656',
        organisation: 'acsdfhech',
      },
    ];
  }
}
