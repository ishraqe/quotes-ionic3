import {Quote} from '../data/quote.interface';
export class QuotesService{
  private favoritesQuoets: Quote[]=[];

  addToFavorites(quotes: Quote) {
    this.favoritesQuoets.push(quotes);
    console.log(this.favoritesQuoets);
  }

  removeFromFavorites(quote: Quote) {
    const position = this.favoritesQuoets.findIndex((quoteEl: Quote)=> {
      return quoteEl.id == quote.id;
    });
    this.favoritesQuoets.splice(position,1);
  }
  getAllFav () {
    return this.favoritesQuoets.slice();
  }
  isFav(quote) {
    return this.favoritesQuoets.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
