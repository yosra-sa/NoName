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
import{UserFormPage} from '../pages/user-form/user-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParticipantsPage,
    LoginPage,
    MentorsPage,
    EquipePage,
    MenuPage,
    UserFormPage
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
    UserFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
