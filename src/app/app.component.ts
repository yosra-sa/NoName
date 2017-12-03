import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ParticipantsPage } from '../pages/participants/participants'
import { LoginPage } from '../pages/login/login'
import { HomePage } from '../pages/home/home';
import{MentorsPage} from'../pages/mentors/mentors';
import{MenuPage} from '../pages/menu/menu';
import{EquipePage} from '../pages/equipe/equipe';
import{EvaluationPage} from '../pages/evaluation/evaluation';
import{ListComponent} from '../components/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{title:string, component:any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

