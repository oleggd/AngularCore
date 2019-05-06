import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log('signup test');
    const email = form.value.email;
    const password = form.value.password;
    console.log('emal +  password :' + email + ' ' + password );
    this.authService.signupUser(email, password);
  }
}
