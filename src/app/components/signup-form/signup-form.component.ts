import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { PhoneValidator } from 'src/app/validators/phone.validator';
import { Form } from 'src/app/models/form';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements Form {
	signupForm: FormGroup;

	@ViewChildren('input') inputs!: QueryList<ElementRef>;
	@ViewChild('emailInput') emailInput!: ElementRef;
	@ViewChild('confirmPasswordInput') confirmPasswordInput!: ElementRef;

	constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
		this.signupForm = this.fb.group ({
			name: ['', [Validators.required, Validators.maxLength(20)]],
			email: ['', [Validators.required, Validators.email]],
			tel: ['', [Validators.required, PhoneValidator.validPhoneNumber()]],
			password: ['', [Validators.required, PasswordValidator.strong()]],
			confirmPassword: ['', [Validators.required, PasswordValidator.strong()]]
		});
	}

	onError(input: ElementRef): void {
		input.nativeElement.style.boxShadow = '0px 0px 10px rgb(255, 70, 92)';
	}

	checkErrors(): boolean {
		let errors: boolean = false;

		this.inputs.forEach((input, index) => {
			const control = this.signupForm.controls[Object.keys(this.signupForm.controls)[index]];

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

	checkPasswords(): boolean {
		let match: boolean = false;

		if (this.signupForm.get('password')?.value == this.signupForm.get('confirmPassword')?.value) match = true;
		else this.onError(this.confirmPasswordInput);

		return match;
	}

	onSubmit() { 
		console.log(this.signupForm.value);

		this.resetErrors();
		let match: boolean = this.checkPasswords();
		if (!this.checkErrors() && match) {
			let name: string = this.signupForm.value.name; 
			let email: string = this.signupForm.value.email;
			let password: string = this.signupForm.value.password;
			let tel: string = this.signupForm.value.tel;
			console.log('form:', name, email, password, tel);
			
			this.userService.signup(name, email, password, tel).then((value: boolean) => {
				if(value)this.router.navigate(['profile']);
				else this.onError(this.emailInput);
			});
			
			// this.signup(name, email, password, tel);
		}
	}	

	// private signup(name: string, email: string, password: string, tel: string) {
	// 	this.userService.signup(name, email, password, tel).subscribe({
	// 		next: (value: boolean) => {	
	// 			if (value) this.router.navigate(['profile']);
	// 			else this.onError(this.emailInput);
	// 			console.log('next:', value)
	// 		},
	// 		error: (error: any) => console.error('error signing up:', error)
	// 	})
	// } 
}