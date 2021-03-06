import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{

  accounts: { name: string, status: string}[] = [];
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
  constructor(private accountService: AccountService){}
}
