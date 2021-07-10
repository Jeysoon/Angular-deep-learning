import { Component, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterService } from './services/counter.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 //Clean Container Class : )
 public count = new BehaviorSubject(0);
 constructor(private counterService : CounterService){}
 ngOnInit(){
 }

}
