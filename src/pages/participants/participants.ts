import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html',
})
export class ParticipantsPage {
  showSearchbar: boolean = false;

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  isPaid(): any {
    return { 'background-color':'lightpink' };
}
notPaid(): any {
  return { 'background-color':'lightgreen' };
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsPage');
  }

}
