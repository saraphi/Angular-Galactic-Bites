import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/database/firebase-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  // constructor(private authservices: AuthService) { }
  
  ngOnInit() {
    //this.authservices.signUp();
  }
}
