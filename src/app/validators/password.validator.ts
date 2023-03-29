import { AbstractControl, FormControl } from '@angular/forms';

export interface ValidationResult {
	[key: string]: boolean;
}

export class PasswordValidator {
	public static strong(control: FormControl): ValidationResult {
		let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);

        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) { return { strong: false }; }
        return  { strong: true };
	}

    public static match(control: AbstractControl) {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
        if (password?.value !== confirmPassword?.value) {
          confirmPassword?.setErrors({ 'passwordMismatch': true });
        } else {
          confirmPassword?.setErrors(null);
        }
        return null;
      }
}