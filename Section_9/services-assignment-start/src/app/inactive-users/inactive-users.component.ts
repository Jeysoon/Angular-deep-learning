import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  public users: string[] = [];
  constructor(private userService: UserService, private counterService: CounterService){}
  //@Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
    //this.counterService.inactiveToActive;


  }
}
