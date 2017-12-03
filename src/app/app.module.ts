import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParticipantsPage } from '../pages/participants/participants'
import { LoginPage } from '../pages/login/login'
import{MentorsPage} from'../pages/mentors/mentors';
import{MenuPage} from'../pages/menu/menu';
import{EquipePage} from'../pages/equipe/equipe';
import{EvaluationPage} from'../pages/evaluation/evaluation';
import { ListComponent } from '../components/list/list';
import{UserFormPage} from'../pages/user-form/user-form';
import{StatPage} from'../pages/stat/stat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParticipantsPage,
    LoginPage,
    MentorsPage,
    EquipePage,
    MenuPage,
    EvaluationPage,
    ListComponent,
    UserFormPage,
    StatPage
  ],
  imports: [
    BrowserModule,
    
    IonicModule.forRoot(MyApp
    ),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MentorsPage,
    EquipePage,
    ParticipantsPage,
    MenuPage,
    UserFormPage,
    EvaluationPage,
    ListComponent,
    StatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
