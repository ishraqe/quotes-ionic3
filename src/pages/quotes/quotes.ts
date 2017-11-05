import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import {QuotesService} from '../../service/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteCollection: {category: string, quotes: Quote[], icon: string};

  constructor(public navParams: NavParams, private alrtCtrl: AlertController, private quotesService: QuotesService) {
  }
  // ionViewDidLoad() {
  //   this.quoteCollection= this.navParams.get('quotes');
  // }

  ngOnInit() {
    this.quoteCollection= this.navParams.get('quotes');
  }

  addToFavorite(selectedQuote: Quote) {
    const alert = this.alrtCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure ?',
      message: 'Are you sure you want to add this to favorite??',
      buttons: [
        {
          text: 'Yes go ahead.',
          handler: () => {
            this.quotesService.addToFavorites(selectedQuote);
          }
        },
        {
          text: 'Nop! i have changed my mind ',
          role: 'cancel',
          handler: () => {
            console.log('canceled');
          }
        }
      ]
    });
    alert.present();
  }

  removeFav(quote: Quote) {
    this.quotesService.removeFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isFav(quote);
  }

}
