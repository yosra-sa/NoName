import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the EvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {
  items: any = [];
  itemHeight: number = 0;

  constructor(public navCtrl: NavController) {

    this.items = [
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false}
  ];
  }
  expandItem(item){
    
           this.items.map((listItem) => {
    
               if(item == listItem){
                   listItem.expanded = !listItem.expanded;
               } else {
                   listItem.expanded = false;
               }
    
               return listItem;
    
           });
    
       }

}
