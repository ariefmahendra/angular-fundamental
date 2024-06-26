import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})

export class LogoutComponent implements OnInit {

  constructor(
    private readonly route: Router
  ){
  }

  ngOnInit(): void {
    sessionStorage.removeItem('token')
    this.route.navigateByUrl('/').then()
  }

}
