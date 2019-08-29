import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      private authService: AuthService,
      private router: Router
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
        this.redirectTo('/');
      } else {
        console.error('Mot de passe ou identifiant incorrect');
      }
    });
  }

  /**
   * Redirect to an url, can reload a component
   *
   * @param url The url to redirect
   */
  redirectTo(url: string) {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]).then(r => r);
    });
  }
}
