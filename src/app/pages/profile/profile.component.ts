import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

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

    user: User = {
        id: "0",
        email: "saragonza.lez0608@gmail.com",
        name: "Sara González Ramírez",
        password_token: "Hola!9",
        phone: "617 322 872",
        points: 0
    }

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