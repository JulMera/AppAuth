import { Component, ViewChild  } from '@angular/core';
import {  Nav, Platform, AlertController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TranslateService} from '@ngx-translate/core';
import { SQLite } from '@ionic-native/sqlite';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
import { App } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push/';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpProvider } from '../providers/http/http';
import { UtilsProvider } from '../providers/utils/utils';
//import { Keyboard } from '@ionic-native/keyboard';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage = 'LoginPage';
  //rootPage = 'InboxPage';
  //rootPage = 'BandejaMenuPage';
  @ViewChild(Nav) nav: Nav;
  //rootPage = 'AfiliacionPage';
  //rootPage = 'ValidacionPositivaPage';
  //rootPage = 'InboxPage';
  //private navCtrl: NavController;

  constructor(public statusBar: StatusBar, public splashScreen: SplashScreen, 
              public sqlite: SQLite, public push: Push,
              public tasksService: TasksServiceProvider,public  app: App, public alertCtrl: AlertController, public http:HttpProvider,
              public utils: UtilsProvider){

    //this.navCtrl = app.getActiveNav();

   
    this.http.callServerP().then(res => {
      console.log("mensaje=>Respuesta : "+JSON.stringify(res));

      let  respuesta=  this.utils.decodeText(res.key);
        console.log("mensaje=>Respuesta2 : "+respuesta);
     
        this.http.salt = respuesta.split(",")[0];
        this.http.iv = respuesta.split(",")[1];         
        this.http.passphrase = respuesta.split(",")[2];
        this.http.idkey= respuesta.split(",")[3];


        console.log("mensaje=>key salt= "+ this.http.salt);
        console.log("mensaje=>key iv= "+ this.http.iv);
        console.log("mensaje=>key passphrase= "+ this.http.passphrase);
        console.log("mensaje=>key idkey= "+ this.http.idkey);


    },
    error => {
       
      console.log("mensaje=>1="+ error);
      if (error) {

        console.log("mensaje=>2="+ error);
        
      }

    })
    .catch(error => {
      if (error) {
         console.log("mensaje=>3="+ error);
           
      }
    });

  }
/*
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HomePage') {
          if (nav.canGoBack()){
              nav.pop();
          } else {
              const alert = this.alertCtrl.create({
                  title: 'MENSAJE',
                  message: 'Desea salir de la aplicaciÃ³n?',
                  buttons: [{
                      text: 'Cancelar',
                      role: 'cancel',
                      handler: () => {
                        //this.nav.setRoot('HomePage');
                        console.log('** Salida Cancelada!');
                      }
                  },{
                      text: 'ACEPTAR',
                      handler: () => {
                        this.platform.exitApp();
                      }
                  }]
              });
              alert.present();
          }
      }
  });
  }
*/
}