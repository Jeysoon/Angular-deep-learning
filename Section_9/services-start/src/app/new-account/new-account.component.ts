 import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private logService: LoggingService, private accountService: AccountService){
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountService.addAccount(accountName, accountStatus)
    // this.logService.logServerStatus(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
