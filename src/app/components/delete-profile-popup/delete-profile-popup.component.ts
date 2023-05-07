import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/models/form';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { PasswordValidator } from 'src/app/validators/password.validator';


@Component({
  selector: 'app-delete-profile-popup',
  templateUrl: './delete-profile-popup.component.html',
  styleUrls: ['./delete-profile-popup.component.scss']
})
export class DeleteProfilePopupComponent implements Form {

  @Input() user!: User;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  deleteForm: FormGroup;

  @ViewChild('input') input!: ElementRef;

  constructor(private fb: FormBuilder, private userServices:UserService, private router:Router) {
    this.deleteForm = this.fb.group({
      password: ['', [Validators.required, PasswordValidator.strong()]]
    })
  }

  onError(input: ElementRef): void {
		input.nativeElement.style.boxShadow = '0px 0px 10px rgb(255, 70, 92)';
	}
	
	checkErrors(): boolean {
		let errors: boolean = false;

    const control = this.deleteForm.controls['password'];

    if (control.errors) {
      console.log('errors:', control.errors)
      this.onError(this.input);
      errors = true;
    }

		return errors;
	}

	resetErrors(): void {
		this.input.nativeElement.style.boxShadow = 'none';
	}

  onClose(): void {
    this.close.emit();
  }

  async onSubmit() {
    this.resetErrors();
    if (this.checkErrors()) return;

    console.log('checking password...');
    console.log(await this.userServices.passwordExist(this.deleteForm.value.password));
    await this.userServices.deleteUser().then(() => {
      if (!this.user) this.router.navigate(['login']);


    })

    
    console.log('deleting...');
    
  }
}
import { Route, Router } from '@angular/router';
