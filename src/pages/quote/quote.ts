import { Component } from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string='';
  text: string = '';
  constructor(public viewCtrl: ViewController,public navParams: NavParams) {
  }
  onClose(value) {
    this.viewCtrl.dismiss(value);
  }

  ionViewDidLoad() {
   this.person= this.navParams.get('person');
   this.text= this.navParams.get('text');
  }

}
