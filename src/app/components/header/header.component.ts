import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {

    constructor(private router: Router, private userService: UserService) {}

    shoppingCart() {
        this.router.navigate(['shopping-cart']);
    }

    login() {
        this.router.navigate(['profile']);
    }
}