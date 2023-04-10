import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";


export class PhoneValidator {
	public static validPhoneNumber(): ValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null>  => {
            const number: string = String(control.value);

		    let hasInvalid = /^\d+\s$/.test(control.value);
            let maxLength = (number.length > 10);

            const valid = !hasInvalid && maxLength;

            if (!valid)  return of({ 'validPhoneNumber': true }); 
            return of(null);    
	    }
    }
}