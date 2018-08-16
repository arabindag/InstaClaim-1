import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
* Generated class for the TimelinePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
 

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})

export class TimelinePage {

  totalDamage: number;
  totalDamageIndex: number;
  damageToTimelineRatio: string[] = [
    "2 weeks",
    "4 weeks",
    "10 weeks",
    "15 weeks",
    "25 weeks"
  ];

  damageTimeline: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalDamage = navParams.get('totalDamage');
    console.log("At timeline:" + this.totalDamage);
    this.calculateTimeline();
  }

  calculateTimeline(){
    this.totalDamageIndex = ((this.totalDamage/20)<5?Math.floor(this.totalDamage/20):4);
    this.damageTimeline = this.damageToTimelineRatio[this.totalDamageIndex];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}

 