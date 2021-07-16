import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription : Subscription;
  constructor() { }

  ngOnInit() {
  // this.firstSubscription = interval(1000).subscribe( count => {
  //   console.log("count", count);
  // })

  //Building my own observable.
  let counter = 0;
  const customObservable = new Observable((observer) => {
  setInterval(() => {
    observer.next(counter);
    if(counter === 2 ){
      observer.complete();
    }
    if(counter > 3){
      observer.error(new Error(`The dollar value passed from -> ${Math.random()} to -> 0` ))
    }
    return counter ++;
  },1000);
  });

  customObservable.pipe(map((data) => console.log('data', data)));

  this.firstSubscription = customObservable.pipe(map((data:number) => console.log(`Round: ${data+1}`))).subscribe((data: any) => {
  }, error => {
  alert(error.message);
  },() => {
    alert('This is the clean up function!');
  });
  }




  ngOnDestroy(){
    this.firstSubscription.unsubscribe();
  }


}
