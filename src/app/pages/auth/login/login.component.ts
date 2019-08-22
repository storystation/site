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
    const request = this.authService.login({login: this.emailPseudo.value, password: this.password.value});
    request.subscribe(response => {
      if (response) {
        // @ts-ignore
        localStorage.setItem('t', response.token);
        window.location.href = '/';
      } else {
        console.error('Mot de passe ou identifiant incorrect');
      }
    });
  }
}
