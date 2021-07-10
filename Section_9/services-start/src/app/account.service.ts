import { Injectable, EventEmitter} from "@angular/core";
import { LoggingService } from "./loggin.service";

@Injectable({providedIn: 'root'})
export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdate = new EventEmitter<string>();
  constructor(private logService: LoggingService){}
  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.logService.logServerStatus(status);
  }
  updatedStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.logService.logServerStatus(status);

  }
}
