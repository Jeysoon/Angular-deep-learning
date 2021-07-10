import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService{
activeToInactiveCount = 0;
inactiveToActive = 0;

setActiveToInactive(){
  this.activeToInactiveCount ++;
  console.log('activeToInactiveCount', this.activeToInactiveCount);
}
setInactiveToActive(){
  this.inactiveToActive ++;
  console.log('inactiveToActive', this.inactiveToActive);
}

}
