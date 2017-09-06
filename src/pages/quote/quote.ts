import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string; 
  text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) {
  
  }
  
  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  /**
   * Close the current modal (Show  info on favorite quote)
   * @param {boolean} [remove=false] - If we want to unfavorite a quote or not 
   * @memberof QuotePage
   */
  onClose(remove = false) {
    // we can pass some data to the bellow view when we dismiss a modal
    this.viewCtrl.dismiss(remove);
  }

}
