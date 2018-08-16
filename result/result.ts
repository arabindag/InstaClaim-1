import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline';


/**
* Generated class for the ResultPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})

export class ResultPage {

  frontDamage: number;
  leftDamage: number;
  rightDamage: number;
  rearDamage: number;
  totalDamage: number;

  frontDamageCostRatio: number[] = [
    200,
    600,
    1000,
    12000,
    15000
  ];

  leftDamageCostRatio: number[] = [
    50,
    100,
    180,
    260,
    500
  ];

  rightDamageCostRatio: number[] = [
    50,
    100,
    180,
    260,
    500
  ];

  rearDamageCostRatio: number[] = [
    100,
    250,
    500,
    800,
    1000
  ];

 

  frontDamageCost: number;
  leftDamageCost: number;
  rightDamageCost: number;
  rearDamageCost: number;

  totalDamageCost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.frontDamage = 20;
    this.rearDamage = 40;
    this.leftDamage = 10;
    this.rightDamage = 60;

    this.calculateDamage();
    this.calculateCost();

  }

 

  calculateCost(){

    this.frontDamageCost = this.frontDamageCostRatio[((this.frontDamage / 20)<5?Math.floor(this.frontDamage / 20):4)];
    this.leftDamageCost = this.leftDamageCostRatio[((this.leftDamage / 20)<5?Math.floor(this.leftDamage / 20):4)];
    this.rightDamageCost = this.rightDamageCostRatio[((this.rightDamage / 20)<5?Math.floor(this.rightDamage / 20):4)];
    this.rearDamageCost = this.rearDamageCostRatio[((this.rearDamage / 20)<5?Math.floor(this.rearDamage / 20):4)];

    this.totalDamageCost = this.frontDamageCost + this.leftDamageCost + this.rightDamageCost + this.rearDamageCost;
  }

 

  calculateDamage(){
    this.totalDamage = (this.frontDamage + this.leftDamage + this.rightDamage + this.rearDamage)/4;
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

 

  goToRepairTime(){
    console.log("At result:" + this.totalDamage);
    this.navCtrl.push(TimelinePage, { totalDamage: this.totalDamage });
  }
}

 

 