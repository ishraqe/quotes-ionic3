import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import quotes from '../../data/quotes';
import {QuotesPage} from '../quotes/quotes';
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  constructor(private navCtrl: NavController) {}
  ngOnInit() {
    this.quoteCollection = quotes;
  }

  getAllQuotes(getQuotes){
    this.navCtrl.push(QuotesPage, {quotes: getQuotes});
  }
}
