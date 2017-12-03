import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  items=[
    'Login'
  ];
  load(item: string){
    
  }
  loadLogin(){
    this.navCtrl.push(LoginPage,{
    val:'vjfvfj'
    });
  }
}

