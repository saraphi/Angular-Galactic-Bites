import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { PhoneValidator } from 'src/app/validators/phone.validator';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent  {
	signupForm: FormGroup;
	name: string = '';
	email: string = '';
	tel: string = '';
	password: string = '';
	confirmPassword: string = '';
	error: boolean = false;

	@ViewChildren('input') inputs!: QueryList<ElementRef>;

	constructor(private router: Router, private fb: FormBuilder) {
		this.signupForm = this.fb.group ({
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			tel: ['', [PhoneValidator.validPhoneNumber()]],
			password: ['', [Validators.required, PasswordValidator.strong()]],
			confirmPassword: ['', [Validators.required, PasswordValidator.strong(), PasswordValidator.match()]]
		});
	}

	checkErrors(): boolean {
		let errors: boolean = false;

		this.inputs.forEach((input, index) => {
			const control = this.signupForm.controls[Object.keys(this.signupForm.controls)[index]];

			if (control.errors) {
				input.nativeElement.style.boxShadow = '0px 0px 10px rgb(239, 35, 60)';
				errors = true;
			}
		});
		return errors;
	}

	resetErrors(): void {
		this.inputs.forEach((input) => {
			input.nativeElement.style.boxShadow = 'none';
		});
	}

	onSubmit() { 
		console.log(this.signupForm.value);

		this.resetErrors();
		if (!this.checkErrors()) console.log("no hay errores");
	}	
}