import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { HttpProvider } from '../../providers/http/http';
import { UtilsProvider } from '../../providers/utils/utils';
import { AlertController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { DbaProvider } from '../../providers/dba/dba';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import { Platform } from 'ionic-angular';


// Nuevo 2019
declare var AesUtil: any;


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public envioDeviceID: string;

  public usuario: string;
  public pass: string;
  public message: any;
  public errorUsu;
  public errorPas;
  private lang: string = "en_us";
  private lenguajeAPP: string = "";
  private datos: Array<string[]>;
  public data: any;
  public encripData: string;
  idioms: any[] = [];
  nome = '';
  public contadorIntentos: number = 0;
  public isBtnEnabled: boolean = true;
  public isBtnEnabledAfi: boolean = false;

  public id: string;
  public model?: string;
  public cordova?: string;
  public platform?: string;
  public version?: string;
  public manufacturer?: string;
  public serial?: string;
  public isVirtual?: boolean;
  public lat?: number;
  public long?: number;
  public jsonDataDevice: any;
  public jsonDataDevice2: any;
  public jsonFiltro: any;
  public jsonCell: any;
  public huella: boolean = false;
  public face_ID: boolean = false;
  public consultaDeviceId: any;
  fingerprintOptions: FingerprintOptions;
  private red: boolean = true;
  public configDeviceDb: any;


  //para encriptar password
  //private CryptoJS: any =  require('crypto-js');
  private SECERET_KEY: string = 'e2eworks';
  //public passphrase: string = "323W0RKS";

  public latitud: any;
  public longitud: any;

  public contenedorBtn: boolean = true;
  public emisorApp: any;
  public appProcess: any;
  tasks: any[] = [];
  public authType: any;
  public notaContador: boolean = false;

  constructor() {

  }

}
