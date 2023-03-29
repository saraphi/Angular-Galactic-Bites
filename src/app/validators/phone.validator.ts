import { FormControl } from '@angular/forms';

export interface ValidationResult {
	[key: string]: boolean;
}

export class PhoneValidator {
	public static isValid(control: FormControl): ValidationResult {
        const number: string = String(control.value);

		let hasInvalid = /^\d+\s$/.test(control.value);
        let maxLength = (number.length > 10);

        const valid = !hasInvalid && maxLength;

        if (!valid) { return { strong: false }; }
        return { strong: true };
	}
}