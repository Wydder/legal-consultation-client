import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/core';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss'],
})
export class AddMembersComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {}
}
