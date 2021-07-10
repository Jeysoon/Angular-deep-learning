import { Component,  Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  constructor(private logService: LoggingService, private accountService: AccountService){}
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    // this.logService.logServerStatus(status);
    this.accountService.updatedStatus(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdate.emit(status);
  }
}
