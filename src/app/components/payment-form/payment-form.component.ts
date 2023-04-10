import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/models/form';

@Component({
    selector: 'app-payment-form',
    templateUrl: './payment-form.component.html',
    styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements Form {
    paymentForm: FormGroup;
    cardNumber: string = '';
    expirationDate: string = '';
    CVcode: string = '';
    cardName: string = ''; 

    @ViewChildren('input') inputs!: QueryList<ElementRef>; 
        
    constructor(private router: Router, private fb: FormBuilder) {
        this.paymentForm = this.fb.group({
            cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
            cardName: ['', [Validators.required, Validators.minLength(2)]]
        })
    } 
    
    checkErrors(): boolean {
        throw new Error('Method not implemented.');
    }
    resetErrors(): void {
        throw new Error('Method not implemented.');
    }
    onSubmit(): void {
        throw new Error('Method not implemented.');
    }
}