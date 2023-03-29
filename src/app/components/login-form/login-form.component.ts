import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  	selector: 'app-login-form',
  	templateUrl: './login-form.component.html',
  	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
	constructor(private router: Router, private fb: FormBuilder) {}

	loginForm: FormGroup = this.fb.group({
		password: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
	});

	get email() {
		return this.loginForm.get('email');
	}

	get password() {
		return this.loginForm.get('password');
	}

	signUp() { this.router.navigate(['/signup']); }
	onSubmit() { this.router.navigate(['/profile']); }
}
