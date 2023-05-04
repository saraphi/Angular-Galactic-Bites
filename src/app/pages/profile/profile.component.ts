import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/database/firebase-auth.service';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    showOverlay: boolean = false;
    showEditPopup: boolean = false;    
    showDeletePopup: boolean = false;

    @ViewChild('overlay') overlay!: ElementRef<any>;
    user: User | null = null;

    constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService) {}

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
        console.log(this.authService.getCurrentUser());
    }
}