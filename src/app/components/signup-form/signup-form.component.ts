import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { PhoneValidator } from 'src/app/validators/phone.validator';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
	constructor(private router: Router, private fb: FormBuilder) {}

	signupForm: FormGroup = this.fb.group ({
		name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
		email: ['', [Validators.required, Validators.email]],
		tel: ['', [PhoneValidator.isValid]],
		password: ['', [Validators.required, PasswordValidator.strong]],
		confirmPassword: ['', [Validators.required, PasswordValidator.strong]]
	}, {
		validators: PasswordValidator.match
	});

	get name() {
		return this.signupForm.get('name');
	}

	get email() {
		return this.signupForm.get('email');
	}

	get tel() {
		return this.signupForm.get('tel');
	}

	get password() {
		return this.signupForm.get('password');
	}

	get confirmPassword() {
		return this.signupForm.get('confirmPassword');
	}

	onSubmit() { this.router.navigate(['/profile']); }
}