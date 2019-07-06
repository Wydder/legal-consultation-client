import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home']);
  }

  dictionaries() {
    this.router.navigate(['dictionaries']);
  }

  settings() {
    this.router.navigate(['settings']);
  }

  qa() {
    this.router.navigate(['qa']);
  }

}
