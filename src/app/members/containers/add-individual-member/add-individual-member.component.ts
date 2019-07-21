import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/core';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class AddIndividualMemberComponent implements OnInit, AfterViewInit {
  private memberId: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((aParams: any) => {
      this.memberId = aParams.memberId;
    });
  }

  ngAfterViewInit() {}
}
