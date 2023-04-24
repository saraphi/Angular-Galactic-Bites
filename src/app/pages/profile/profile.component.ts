import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    /*@Input() user!: User;*/
    showOverlay: boolean = false;
    showEditPopup: boolean = false;
    showDeletePopup: boolean = false;

    user: User = new User('0', 'Sara González Ramírez', 'saragonzalez@gmail.com', 'Hola!9', '623 123 123', 0, new ShoppingCart({}));

    @ViewChild('overlay') overlay!: ElementRef<any>;

    constructor(private route: ActivatedRoute) {}

    hideOverlay() {
        this.showOverlay = false;
        if (this.showEditPopup) this.showEditPopup = false;
        else if (this.showDeletePopup) this.showDeletePopup = false;
    }

    triggerEditPopup() {
        this.showOverlay = true;
        this.showEditPopup = true;
    }

    triggerDeletePopup() {
        this.showOverlay = true;
        this.showDeletePopup = true;
    }

    logout() {

    }
}