import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

export enum MembersView {
  ListView = '100%',
  BlockView = '40%'
}

@Component({
  selector: 'app-search-members',
  templateUrl: './search-members.component.html',
  styleUrls: ['./search-members.component.scss'],
})
export class SearchMembersComponent implements OnInit {

  @Output() blockView: EventEmitter<string> = new EventEmitter();
  @Output() listView: EventEmitter<string> = new EventEmitter();

  viewMode: string;

  constructor(private router: Router) {
    this.viewMode = MembersView.BlockView.toString();
  }

  ngOnInit() {
    this.onBlockView();
  }

  addMembers() {
    this.router.navigate(['members/add-members']);
  }

  onBlockView() {
    this.viewMode = MembersView.BlockView.toString();
    const theViewMode = this.viewMode;

    this.blockView.emit(theViewMode);
  }

  onListView() {
    this.viewMode = MembersView.ListView.toString();
    const theViewMode = this.viewMode;

    this.listView.emit(theViewMode);
  }

  get membersView() {
    return MembersView;
  }
}
