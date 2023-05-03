import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from './services/database/firebase-data.service';

import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private firebaseDataService: FirebaseDataService) { }


}

