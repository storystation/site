import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
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
    // this.isRegister = true;
    if (this.password.value !== this.passwordCheck.value) {
      console.log('ça c\'est pas bon');
    } else {
      console.log('action');
    }
  }

  /**
   * Verify if the pseudo already exists or not
   */
  verifyPseudo() {
    console.log('Vérification du pseudo ' + this.pseudo.value);
  }
}
