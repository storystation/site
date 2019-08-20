import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin = false;

  loginForm: FormGroup;
  emailPseudo = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
      private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailPseudo: this.emailPseudo,
      password: this.password
    });
  }

  login() {
    // this.isLogin = true;
    console.log('action');
  }
}
