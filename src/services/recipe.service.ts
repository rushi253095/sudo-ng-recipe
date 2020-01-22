import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReceipeManagerService {
    public recipes = [
        {
          id: 1,
          name: 'Club Sandwich',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/02/04/14/52/fries-1179308_960_720.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim et tortor gravida rhoncus. Cras non ante vel diam blandit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet sodales arcu. Aliquam erat volutpat. Nunc vehicula iaculis est, id egestas nisl laoreet quis. Donec faucibus maximus tellus.',
          type: 'Veg',
          chef: 'Rushi Patel',
          isFavourite: false
        },
        {
          id: 2,
          name: 'Red Souce Pasta',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/12/22/salad-791501_960_720.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim et tortor gravida rhoncus. Cras non ante vel diam blandit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet sodales arcu. Aliquam erat volutpat. Nunc vehicula iaculis est, id egestas nisl laoreet quis. Donec faucibus maximus tellus.',
          type: 'Non-Veg',
          chef: 'Maulik Patel',
          isFavourite: true
        },
        {
          id: 3,
          name: 'Brwonie Sizzler',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/05/25/09/42/brownie-2342762_960_720.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim et tortor gravida rhoncus. Cras non ante vel diam blandit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet sodales arcu. Aliquam erat volutpat. Nunc vehicula iaculis est, id egestas nisl laoreet quis. Donec faucibus maximus tellus.',
          type: 'Non-Veg',
          chef: 'Bansari Patel',
          isFavourite: false
        },
      ];

      addRecipe(recipe: any) {
        this.recipes.push(recipe);
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }

      likeRecipe(id: number) {
        this.recipes[id].isFavourite = true;
      }

      disLikeRecipe(id: number) {
        this.recipes[id].isFavourite = false;
      }
}
