import { Component } from '@angular/core';
  import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class HomePage {
  google : boolean =  false

  data_function(){
    this.google =  this.google === false ? true : false
  }
}

