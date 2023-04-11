import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from './firebase-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Client';

  constructor(private firebaseDataService: FirebaseDataService) {}
  
  ngOnInit() {
    this.firebaseDataService.logProducts();
  }
}
