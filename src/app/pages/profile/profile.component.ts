import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

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

    constructor(private router: Router, private userService: UserService) {}
    
    ngOnInit(): void {
        this.user = this.userService.user;
        this.checkUser();
    }

    private checkUser(): void {
        this.userService.isLogged().subscribe({
            next: (value: boolean) => {
                if (!value) this.router.navigate(['/login']); 
            },
            error: (error: any) => console.error('error checking user is logged:', error)
        })
    }

    hideOverlay() {
        console.log('closing...');
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
        this.userService.logout().then(()=> this.ngOnInit());

    }
}