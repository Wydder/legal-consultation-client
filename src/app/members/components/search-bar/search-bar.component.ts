import {
  AfterViewInit,
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

export enum MembersView {
  ListView = '100%',
  BlockView = '40%'
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  @Output() blockView: EventEmitter<string> = new EventEmitter();
  @Output() listView: EventEmitter<string> = new EventEmitter();

  viewMode: string;

  constructor() {
    this.viewMode = MembersView.BlockView.toString();
  }

  ngOnInit() {
    this.onBlockView();
  }

  ngAfterViewInit() {}

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

  applyFilter() {}

  get membersView() {
    return MembersView;
  }
}
