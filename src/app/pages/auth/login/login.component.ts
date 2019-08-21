import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

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
      private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailPseudo: this.emailPseudo,
      password: this.password
    });
  }

  login() {

    const credentials = {login: 'test@postman.com', password: 'test'};
    const request = this.authService.login(credentials);

    request.subscribe(response => {
      console.log(response);
    });

  }
}
