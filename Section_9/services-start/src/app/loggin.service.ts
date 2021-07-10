import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})
export class LoggingService{
  logServerStatus(status: string){
    console.log("A server status changed to, new status: ", status);
  }
}
