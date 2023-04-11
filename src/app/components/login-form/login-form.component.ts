import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { Form } from 'src/app/models/form';

@Component({
  	selector: 'app-login-form',
  	templateUrl: './login-form.component.html',
  	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements Form {
	loginForm: FormGroup;

	@ViewChildren('input') inputs!: QueryList<ElementRef>;
	
	constructor(private router: Router, private fb: FormBuilder) {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, PasswordValidator.strong()]]
		});
	}

	onError(input: ElementRef): void {
		input.nativeElement.style.boxShadow = '0px 0px 10px rgb(255, 70, 92)';
	}
	
	checkErrors(): boolean {
		let errors: boolean = false;

		this.inputs.forEach((input, index) => {
			const control = this.loginForm.controls[Object.keys(this.loginForm.controls)[index]];

			if (control.errors) {
				this.onError(input);
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

	signUp(): void {
		this.router.navigate(['signup']);
	}

	onSubmit(): void { 
		console.log(this.loginForm.value);

		this.resetErrors();
		if (!this.checkErrors()) console.log("no hay errores");
	}
}