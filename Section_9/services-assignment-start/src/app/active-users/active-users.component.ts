import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  public users:string[] = [];
  constructor(private userService: UserService){}
  //@Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();
  ngOnInit(){
     this.users = this.userService.activeUsers;
  }


  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    //Change to service
    // this.userService.inactiveUsers.push(this.userService.activeUsers[id]);
    // this.userService.activeUsers.splice(id, 1);
    this.userService.onSetToInactive(id);


  }
}
