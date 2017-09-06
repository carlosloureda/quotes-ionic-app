import { SettingsService } from './../../services/services';
import { QuotePage } from './../quote/quote';
import { QuotesServices } from './../../services/quotes';
import { Quote } from './../../data/data.interface';
import { Component } from '@angular/core';
import { IonicPage, ModalController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    private quotesService: QuotesServices,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private settingsService: SettingsService
  ) {}
  
  // will be executed also when caching is working
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoritesQuotes();
  }

  /**
   * 
   * 
   * @param {Quote} quote 
   * @memberof FavoritesPage
   */
  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    /**
     * need to listen to the modal close, so if we receive the info to remove
     * some data we need to.
     */
     
    modal.onDidDismiss((remove: boolean) => {
      if (remove == true) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground'
  }

}
