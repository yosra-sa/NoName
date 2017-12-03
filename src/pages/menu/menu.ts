import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ParticipantsPage}from '../participants/participants';
import{MentorsPage}from'../mentors/mentors';
import { EvaluationPage } from '../evaluation/evaluation';
import{EquipePage} from'../equipe/equipe';
import{StatPage} from'../stat/stat';
import{HomePage} from'../home/home';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items=[
    'Participants',
    'Teams',
    'Evaluation',
    'Mentors',
    'Stat'

  ];
  load(item: string){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  loadParticipant(){
    this.navCtrl.push(ParticipantsPage,{
    val:'vjfvfj'
    });
  }
  loadTeams(){
    this.navCtrl.push(EquipePage,{
    val:'vjfvfj'
    });
  }
  loadMentors(){
    this.navCtrl.push(MentorsPage,{
    val:'vjfvfj'
    });
  }
  loadEvaluation(){
    this.navCtrl.push(EvaluationPage,{
      val:'erfj'
    });
  }
  loadStat(){
    this.navCtrl.push(StatPage,{
      val:'erfj'
    });
  }
  logout(){
    this.navCtrl.push(HomePage,{
      val:'erfj'
    });

  }
}
