import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';

import { OrderPipe } from 'ngx-order-pipe';

import { User, Member } from '@app/core';

export enum OrderBy {
  LastName = 'lastName',
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

  private reverse = false;
  private order = OrderBy.LastName as string;
  private viewMode: string;
  public members: Member[];
  public sortedMembers: Member[];

  constructor(
    private router: Router,
    private orderPipe: OrderPipe,
    private store: Store<fromStore.MemberState>,
  ) { }

  ngOnInit() {
    this.refresh();
  }

  ngAfterViewInit() {
    const theMembers = this.members;
    const theOrder = this.order;

    this.sortedMembers = this.orderPipe.transform(theMembers, theOrder);
  }

  refresh() {
    this.store.pipe(select(fromStore.getAllMembers))
      .subscribe((aMembers) => {
        if (aMembers && aMembers.length > 0) {
          this.members = aMembers;
          this.ngAfterViewInit();
        }
      });
  }

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

  membersLength() {
    const members = this.members;
    if (members) {
      return members.length;
    }
    return 0
  }
}
