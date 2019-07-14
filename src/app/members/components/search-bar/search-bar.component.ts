import {
  AfterViewInit,
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

export enum MembersView {
  ListView = 1,
  BlockView = 2
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  @Output() blockView: EventEmitter<number> = new EventEmitter();
  @Output() listView: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  applyFilter() {}

  onBlockView() {
    this.blockView.emit(MembersView.BlockView);
  }

  onListView() {
    this.listView.emit(MembersView.ListView);
  }
}
