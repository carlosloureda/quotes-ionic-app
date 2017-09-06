import { QuotesServices } from './../../services/quotes';
import { Quote } from './../../data/data.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, AlertController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[ ], icon: string};
  
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesServices: QuotesServices) {
    }

  // ionpViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  //   this.quoteGroup = this.navParams.data;
  //   // Add Elvis operator if we want to follow this approach
  //   // quoteGroup?.category,
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log("Ok");  
            this.quotesServices.addQuoteToFavorites(quote);
            
          }
        },
        {
          text: "no, I changed my mind!",
          role: 'cancel',
          handler: () => {
            console.log("Cancelled!");
          }
        }
      ]
    });
    
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesServices.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesServices.isQuoteFavorite(quote);
  }
  
}
