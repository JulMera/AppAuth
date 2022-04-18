import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { TranslateService } from '@ngx-translate/core'
import { AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';
import { DbaProvider } from '../../providers/dba/dba';
import { Push, PushObject, PushOptions } from '@ionic-native/push/';
declare var AesUtil: any;

/**
 * Generated class for the RegistroAfiliacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-afiliacion',
  templateUrl: 'registro-afiliacion.html',
})
export class RegistroAfiliacionPage {

  public value: boolean = true;
  private isBtnEnabledAfi: boolean = false;
  public usuario: string;
  public pass: string;
  public jsonDataDevice: any;
  public message: any;
  public data: any;
  public encripData: string;
  public messageId: string;
  public msgjsessionId: string;
  //public passphrase: string = "323W0RKS";
  public pushID: any;
  public idDispositivoPush: any;

  public latitud: any;
  public longitud: any;

  public idioma: boolean = false;
  public emisorApp: any;
  public appProcess: any;


  constructor() {

  }
}