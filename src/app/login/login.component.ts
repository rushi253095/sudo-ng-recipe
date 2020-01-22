import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credInvalid = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getLoginForm();
  }

  getLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
    const data = this.loginForm.value;
    if (data.username === 'rushi' && data.password === 'test') {
      this.credInvalid = false;
      this.authService.login();
      this.router.navigate(['/add-new-recipe']);
    } else {
      this.credInvalid = true;
    }
  }

}
