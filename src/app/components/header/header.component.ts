import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent implements OnInit {

    userPic: string = "../../../assets/icons/user.png";

    constructor(private router: Router, private userService: UserService) {}

    ngOnInit(): void {
        this.checkUser();
    }

    checkUser(): void {
        if (this.userService.user) this.userPic = "../../../assets/profile.jpg";
        else this.userPic =  "../../../assets/icons/user.png";
    }

    shoppingCart() {
        this.router.navigate(['/shopping-cart']);
    }

    login() {
        this.router.navigate(['/profile']);
    }
}