import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegister = false;

  registerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  pseudo = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordCheck = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: this.email,
      pseudo: this.pseudo,
      password: this.password,
      passwordCheck: this.passwordCheck
    });
  }

  register() {
    if (this.password.value !== this.passwordCheck.value) {
      console.warn('ça c\'est pas bon');
    } else {
      const request = this.authService.register({ username: this.pseudo.value, email: this.email.value, password: this.password.value });
      request.subscribe(response => {
        if (response) {
          // @ts-ignore
          localStorage.setItem('t', response.tokens[0]);
          this.redirectTo('/');
        }
      });
    }
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
