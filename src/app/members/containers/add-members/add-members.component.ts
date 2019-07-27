import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss'],
})
export class AddMembersComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  addIndividualMember() {
    this.router.navigate(['members/add-members/add-individual-member'])
  }
}
