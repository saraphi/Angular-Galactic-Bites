import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/models/form';
import { User } from 'src/app/models/user';
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

  constructor(private fb: FormBuilder) {
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

  onSubmit(): void {
    this.resetErrors();
    if (this.checkErrors()) return;

    console.log('checking password...');
    // checkPassword, que devuelva un booleano, y con el resultado del booleano,
    // si es false:
    // this.onError(this.input);
    
    console.log('deleting...');
    this.onClose();
  }
}