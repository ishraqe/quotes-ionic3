import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {QuotesService} from '../../service/quotes';
import {Quote} from '../../data/quote.interface';
import {QuotePage} from '../quote/quote';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[]=[];
  constructor(private quoteService: QuotesService, private modalCtrl: ModalController) {
  }
  ionViewWillEnter() {
    this.quotes= this.quoteService.getAllFav();
  }

  onViewQuote(quote) {
    const modal= this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean)=>{
      if (remove==true) {
       this.remove(quote);
      }
    });
  }
  remove(quote) {
    this.quoteService.removeFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id = quote.id;
    });
    this.quotes.splice(position,1);
  }
}
