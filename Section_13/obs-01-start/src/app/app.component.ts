import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}
  isActivated = false;
  activatedSubscription: Subscription;
  ngOnInit() {
  this.activatedSubscription = this.userService.isActive.subscribe((activationStatus)=>{
  this.isActivated = activationStatus;
  })
  }
  ngOnDestroy(): void{
    this.activatedSubscription.unsubscribe();
  }
}
