import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute, // this object will give us access to the id passed in the url. => Selected User.
    ) { }

  ngOnInit() {
    this.user = {id: this.route.snapshot.params['id'], name: this.route.snapshot.params['name']};
  
// below, parms is an observable, we subscribe to it and only if the data changes, our function will be called.
this.paramsSubscription = this.route.params
.subscribe((params: Params) =>{
  this.user.id = params['id'];
  this.user.name = params['name'];
});

}

// Angular does it by itself, but it does not hurt to do it by yourself.
ngOnDestroy(): void {
  this.paramsSubscription.unsubscribe();
}
  }

